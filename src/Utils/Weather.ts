export interface CityWeatherInfo {
  link: string;
  publicTime: Date;
  title: string;
  pinpointLocations: Array<PinpointLocation>;
  forecasts: Array<Forecast>;
  location: Location;
  description: { text: string; publicTime: Date };
}
export const EmptyWeather: CityWeatherInfo = {
  link: "",
  publicTime: new Date(),
  title: "",
  pinpointLocations: new Array<PinpointLocation>(),
  forecasts: new Array<Forecast>(),
  location: { city: "", area: "", prefecture: "" },
  description: { text: "", publicTime: new Date() },
};

type PinpointLocation = { link: string; name: string };
type ForecastImage = {
  width: number;
  url: string;
  title: string;
  height: number;
};
type Temparature = {
  celsius: string | number | null;
};
type Forecast = {
  dateLabel: string;
  telop: string;
  date: string;
  image: ForecastImage;
  temprature: { min: null | Temparature; max: null | Temparature };
};
type Location = {
  city: string;
  area: string;
  prefecture: string;
};

/**
 * Get weather data by city ID
 * @param cityId
 */
export default async function GetWeather(
  cityId: string
): Promise<CityWeatherInfo> {
  const url = `/forecast/webservice/json/v1?city=${cityId}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data === undefined) return EmptyWeather;
    return data;
    //    return data;
  } catch (e) {
    console.log(e);
    return EmptyWeather;
  }
}
