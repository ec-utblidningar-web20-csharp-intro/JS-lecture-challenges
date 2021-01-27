let component = {
  load: (name) => {
    let spot = document.currentScript;

    document.head.insertAdjacentHTML(
      "beforeend",
      `<link rel="stylesheet" href="/css/components/${name}.css"/>`
    );

    fetch(`/html/components/${name}.html`)
      .then((response) => response.text())
      .then((text) => {
        spot.outerHTML = text;

        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `/js/components/${name}.js`;
        document.head.append(script);
      });
  },
};
