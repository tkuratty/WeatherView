export type City = {
  name: string;
  id: string;
  source: string;
};

export type Pref = {
  name: string;
  cities: Array<City>;
};

export function GetAreaData(prefData: Array<Object>): Array<Pref> {
  const area = new Array<Pref>();
  prefData.map((pref: any, index: number) => {
    const prefName: string = pref["$"].title;
    area.push({ name: prefName, cities: new Array<City>() });
  });

  return area;
}
