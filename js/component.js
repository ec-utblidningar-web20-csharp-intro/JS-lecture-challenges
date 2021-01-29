{
  const observer = new MutationObserver(function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      for (const node of mutation.addedNodes){
        if (node.nodeName === "INSERT") {
          console.log(node);
          loadComponent(node, node.getAttribute("data-component"))
        }
      }
    }
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
  });

  function loadComponent(placeholder, componentName) {
    // importera HTML
    fetch(`html/components/${componentName}.html`)
      .then((response) => response.text())
      .then((html) => {
        /* ersätt '<script>component.load("my_component");</script>'
             html elementet med komponentens html */
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

  document.addEventListener("DOMContentLoaded", function () {
    observer.disconnect();
  });
}
