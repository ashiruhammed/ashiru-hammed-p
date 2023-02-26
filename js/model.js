import { async } from "regenerator-runtime";
import { getJSON } from "./helper.js";
import { API_URL, IP_API_URL } from "./config.js";

export const state = {
  ipInfo: {},
};

const setData = function (ipData) {
  state.ipInfo = {
    ipAddress: ipData.ip,
    location: `${ipData.location.city}, ${ipData.location.country} ${ipData.as.asn}`,
    isp: ipData.isp,
    lat: ipData.location.lat,
    lng: ipData.location.lng,
    timezone: ipData.location.timezone,
  };
};
export const loadDefaultLoc = async function () {
  try {
    const ip = await getJSON(API_URL);
    const ipData = await getJSON(`${IP_API_URL}${ip.ip}`);

    setData(ipData);
  } catch (err) {
    throw err;
  }
};

export const loadSearchIp = async function (query) {
  try {
    const ip = await getJSON(`${IP_API_URL}${query}`);
    setData(ip);
  } catch (err) {
    throw err;
  }
};
