import { TIME_OUTSEC } from "./config.js";
import "regenerator-runtime/runtime";

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function (s) {
      reject(new Error("Request took too long"));
    }, 1000 * s);
  });
};

export const getJSON = async function (url) {
  try {
    const data = await Promise.race([fetch(url), timeout(TIME_OUTSEC)]);

    if (!data.ok)
      throw new Error(`!Please Input a valid Address ${data.status}`);

    return data.json();
  } catch (err) {
    throw err;
  }
};
