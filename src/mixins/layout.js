import config from "../config";

export default {
  data: () => {
    return {
      appConfig: {
        colors: config.colors
      }
    }
  },
  methods: {
    decodeHtml(html) {
      let txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }
  }
};
