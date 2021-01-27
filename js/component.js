let component = {
  load: (name) => {
    let spot = document.currentScript;

    document.head.insertAdjacentHTML(
      "beforeend",
      `<link rel="stylesheet" href="/JS-lecture-challenges/css/components/${name}.css"/>`
    );

    fetch(`/JS-lecture-challenges/html/components/${name}.html`)
      .then((response) => response.text())
      .then((text) => {
        spot.outerHTML = text;

        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `/JS-lecture-challenges/js/components/${name}.js`;
        document.head.append(script);
      });
  },
};
