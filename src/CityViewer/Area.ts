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

/**
 * Convert xml area data to object
 * @param prefData
 */
export function GetAreaData(prefData: Array<Object>): Array<Pref> {
  const area = new Array<Pref>();
  prefData.map((pref: any, index: number) => {
    const prefName: string = pref["$"].title;
    const cities = pref["city"].map(
      (city: any): City => {
        return {
          name: city["$"].title,
          id: city["$"].id,
          source: city["$"].aource,
        };
      }
    );
    // 道南が重複している!! (RSS側の不具合っぽい) 重複をまとめるように処理追加
    const idx = area.findIndex((v) => v.name === prefName);
    if (idx == -1) {
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
