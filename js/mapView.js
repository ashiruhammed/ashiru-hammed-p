import icon from "url:../img/icon-location.svg";

class mapView {
  _map;
  _mapCont = document.querySelector("#map");
  _icon;
  _icon = L.icon({
    iconUrl: icon,
  });
  addHandlerRender(handler) {
    this._mapCont.addEventListener("click", function (e) {
      const btn = e.target.closest(".try_button");
      if (!btn) return;
      handler();
    });
  }

  render(data) {
    this._data = data;
    if (!data) mapView.renderError("fhdfgdf");

    this.renderMap();
  }

  renderMap() {
    this._map = L.map("map", {
      zoom: 13,
      // zoomControl: false,
    }).setView(this._data);
    const img = document.querySelector("img");
    L.tileLayer("https://mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this._map);

    L.marker(this._data, {
      icon: this._icon,
    }).addTo(this._map);
  }

  renderError(err) {
    const markup = `
    <div class="error_message">
    <p>${err}. <a class="try_button" href="">Try again later</a></p>
  </div>
    
`;

    this._mapCont.innerHTML = "";
    this._mapCont.insertAdjacentHTML("beforeend", markup);
  }

  renderSearchView(data) {
    if (!data) console.log(data);
    this._map.setView(data, 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    L.marker(data, {
      icon: this._icon,
    }).addTo(this._map);
  }
}

export default new mapView();
