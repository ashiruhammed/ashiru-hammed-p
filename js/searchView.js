class searchView {
  _parentElement = document.querySelector("form");

  _input = document.querySelector("input");

  addHandlerRender(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  getQuery() {
    const userInput = this._input;
    return userInput.value;
  }

  clearInput() {
    this._input.value = "";
  }
}

export default new searchView();
