import { Idiomorph } from "idiomorph/dist/idiomorph.esm"

class TurboLayerController {
  constructor(name, src) {
    this.name = name
    this.src = src
  }

  async update() {
    const response = await window.fetch(this.src, {
      method: "GET",
      credentials:  "same-origin",
      headers: {
        "Turbo-Layer": this.name,
      }
    })

    const html = await response.text()
    const dom = new DOMParser().parseFromString(html, "text/html")
    const body = dom.querySelector("body")

    this.applyLayer(document.body, body)
  }

  applyLayer(currentBody, layerBody) {
    const result = Idiomorph.morph(
      currentBody,
      layerBody.childNodes,
      {
        morphStyle: "innerHTML",
        ignoreActive: true,
        callbacks: {
          beforeNodeRemoved: (node) => {
            if (node.nodeName.toLowerCase().includes("text")) {
              node = node.parentElement
            }
            if (node.nodeName.toLowerCase() === "turbo-layer-fragment") {
              return node.getAttribute("name") === this.name
            }
            return node.closest(`turbo-layer-fragment[name=${this.name}]`) !== undefined
          }
        }
      }
    );
    console.log(result)
  }
}

export { TurboLayerController }
