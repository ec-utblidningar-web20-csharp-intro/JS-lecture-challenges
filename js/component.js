{
  // Här använder jag MutationObserver för att byta ut
  // <insert> elementet så fort browsern skapar det
  // https://tr.javascript.info/mutation-observer
  const observer = new MutationObserver(function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      for (const node of mutation.addedNodes) {
        // om node är <insert></insert>
        if (node.nodeName === "INSERT") {
          loadComponent(node, node.getAttribute("data-component"));
        }
      }
    }
  });

  //börja kolla efter nyskapta element
  observer.observe(document, {
    childList: true,
    subtree: true,
  });

  function loadComponent(placeholder, componentName) {
    // importera HTML
    fetch(`html/components/${componentName}.html`)
      .then((response) => response.text())
      .then((html) => {
        // ersätt <insert> med komponentens html
        placeholder.outerHTML = html;

        // importera JS
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `js/components/${componentName}.js`;
        document.head.append(script);

        // importera css
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `css/components/${componentName}.css`;
        document.head.append(link);
      });
  }

  //sluta kolla när hela DOM har blivit skapad
  document.addEventListener("DOMContentLoaded", function () {
    observer.disconnect();
  });
}
