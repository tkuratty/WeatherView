export default async function GetWeather(cityId: string): Promise<string> {
  const url = `/forecast/webservice/json/v1?city=${cityId}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data !== undefined) return data;
    else return "";
  } catch (e) {
    console.log(e);
  }
  return "";
}
