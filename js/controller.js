import { async } from "regenerator-runtime/runtime";
import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import view from "./view.js";
import mapView from "./mapView.js";
import searchView from "./searchView.js";

const controlIpInfo = async function () {
  try {
    await model.loadDefaultLoc();

    view.render(model.state.ipInfo);

    mapView.render([model.state.ipInfo.lat, model.state.ipInfo.lng]);
  } catch (err) {
    console.error(err);
    mapView.renderError(err);
  }
};

const reloadWindow = function () {
  window.location.reload();
};

const controlSearch = async function () {
  try {
    const userData = searchView.getQuery();

    searchView.clearInput();

    await model.loadSearchIp(userData);

    view.render(model.state.ipInfo);

    mapView.renderSearchView([model.state.ipInfo.lat, model.state.ipInfo.lng]);
  } catch (err) {
    alert(err);
  }
};

const init = function () {
  controlIpInfo();
  mapView.addHandlerRender(reloadWindow);
  searchView.addHandlerRender(controlSearch);
};

init();

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const whereAmI2 = async function () {
//     try {
//       const data = await getJSON(
//         `https://geo.ipify.org/api/v2/country,city?apiKey=at_IxnbYe2e68VTS6MNbWIBtcN5Q7tG8&ipAddress=${input.value}`
//       );

//       const isp = data.isp;
//       const { asn } = data.as;
//       const { lat, lng, city, country, timezone } = data.location;

//       map.setView([lat, lng], 13, {
//         animate: true,
//         pan: {
//           duration: 1,
//         },
//       });
//       L.marker([lat, lng], {
//         icon: my,
//       }).addTo(map);
//       input.value = "";
//     } catch (err) {
//       console.error(err.message);
//       alert(`${err.message}`);
//     }
//   };

//   whereAmI2();
// });
