// const fs = require('fs');
// import { pathFile } from '../../../uploads/getPath';
// export const getDataFromFile = async (fileURL: String) => {
//   const fullPath = pathFile + '\\' + fileURL;
//   console.log(`get from data function ${fullPath}`);
//   // console.log();
//   let rawdata = await fs.readFile(fullPath, (err: any, data: any) => {
//     var coordinateData = JSON.parse(data); //parse json string into JS object

//     // console.log(` +++++=== ${JSON.stringify(coordinateData.geometries)}`);
//     if (data) {
//       return coordinateData.geometries;
//     }
//     console.log(`the error read file ${err}`);
//   });

//   // console.log(`@@@@@@@@ ${rawdata}`);
// };
// // let student = JSON.parse(rawdata);

// export default getDataFromFile;
