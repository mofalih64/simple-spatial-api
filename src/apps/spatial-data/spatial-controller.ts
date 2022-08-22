import { Handler } from 'express';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import { pool } from './../../utils/config/database-connection';
export const checkRequest: Handler = async (req, res, next) => {
  console.log('there is a request ');
  next();
};

export const checkLocation: Handler = async (req, res) => {
  // const user = req.user as User;
  try {
    let { cordinates, id } = req.body;
    cordinates = cordinates.split(',');
    // console.log(cordinates[0]);

    var Longitude = Number(cordinates[0]);
    // console.log(` latitude ${Longitude}`);
    var Latitude = Number(cordinates[1]);

    const checkLoc =
      await prisma.$queryRaw`SELECT ST_Intersects(ST_Point(${Longitude},${Latitude}, 4326)::geography,C.geom) FROM cities C where id=${id};`;
    if (checkLoc[0].st_intersects == true) {
      res.status(200).json({
        message: 'the location is correct ',
      });
    } else {
      res.status(200).json({
        messsage: 'the location is not fit to yur district ',
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const addCity: Handler = async (req, res) => {
  try {
    var { coordinates, name } = req.body;
    const geoJson = `{"type":"Polygon","coordinates":${coordinates}}`;
    const query = await pool.query(
      `INSERT INTO cities (name,geom) VALUES ($1,ST_GeomFromGeoJSON($2)) returning id`,
      [name, geoJson]
    );
    if (query) {
      console.log(query.rows[0].id);
    }
    res.status(201).json({
      message: 'city added succesfuly',
      id: query.rows[0].id,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    res.json({
      meesage: 'there is a problem ',
    });
  }
};
