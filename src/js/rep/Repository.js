import jsonp from "better-jsonp";

require("es6-promise").polyfill();

export default class Repository {
  async getProducts() {
    this.products = await jsonp({
      url: "http://roberval.chaordicsystems.com/challenge/challenge.json",

      jsonpCallback: "X",
      timeout: 5000,
    })
      .then(res => res.data)
      // eslint-disable-next-line no-console
      .catch(err => console.error(err));
  }
}
