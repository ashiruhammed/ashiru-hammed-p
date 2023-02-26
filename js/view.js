class DataView {
  _data;
  _parentElement = document.querySelector(".ipify");

  render(data) {
    if (!data) return console.log("dd");
    this._data = data;
    const markup = this._generateMarkup();
    this.#clear();
    this._parentElement.style.opacity = 1;
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  #clear() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup() {
    return `
        <div class="ipify-det">
        <div class="cont ip__cont">
        <h5>IP ADDRESS</h5>
        <h3 class="ip">${this._data.ipAddress}</h3>
        </div>
        <div class="cont loc__cont">
        <h5>LOCATION</h5>
        <h3 class="location">${this._data.location}</h3>
        </div>
        <div class="cont time__cont">
        <h5>TIMEZONE</h5>
        <h3 class="time">${this._data.timezone}</h3>
        </div>
        <div class="cont isp__cont">
        <h5>ISP</h5>
        <h3 class="isp">${this._data.isp}</h3>
        </div>
    </div>
    `;
  }
}

export default new DataView();
