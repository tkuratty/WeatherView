import xml2js from "xml2js";

/**
 * City data
 */
export type City = {
  name: string;
  id: string;
  source: string;
};

/**
 * Prefecture
 */
export type Pref = {
  name: string;
  cities: Array<City>;
};

export const emptyCity: City = { id: "", name: "", source: "" };

export default async function GetArea(): Promise<Array<Pref>> {
  const xmlUrl = "/forecast/rss/primary_area.xml";
  try {
    const res = await fetch(xmlUrl);
    const xml = await res.text();
    const parser = new xml2js.Parser();
    return new Promise(function (resolve, reject) {
      parser.parseString(xml, (err: Error, result: any) => {
        if (err === null) {
          //console.log(result.rss.channel[0]["ldWeather:source"][0].pref);
          resolve(
            PrepareAreaData(result.rss.channel[0]["ldWeather:source"][0].pref)
          );
        } else {
          console.log(err);
          reject(new Array<Pref>());
        }
      });
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
}

/**
 * Convert xml area data to object
 * @param prefData
 */
function PrepareAreaData(prefData: Array<Object>): Array<Pref> {
  const area = new Array<Pref>();
  prefData.forEach((pref: any) => {
    const prefName: string = pref["$"].title;
    const cities = pref["city"].map(
      (city: any): City => {
        return {
          name: city["$"].title,
          id: city["$"].id,
          source: city["$"].source,
        };
      }
    );
    // 道南が重複している!! (RSS側の不具合っぽい) 重複をまとめるように処理追加
    const idx = area.findIndex((v) => v.name === prefName);
    if (idx === -1) {
      area.push({
        name: prefName,
        cities: cities,
      });
    } else {
      area[idx].cities = area[idx].cities.concat(cities);
    }
  });
  return area;
}
