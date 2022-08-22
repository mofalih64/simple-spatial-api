
CREATE EXTENSION  IF NOT EXISTS  postgis;
-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "geom" geography(Polygon,4326) NOT NULL,
    "name" VARCHAR(70),

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "sidx_cities_geom" ON "cities"("geom");
