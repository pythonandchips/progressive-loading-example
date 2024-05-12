import { TurboLayerController } from "./turbo_layer_controller"

document.addEventListener("turbo:load", () => {
  const layers = document.querySelectorAll("meta[name=turbo-layer]")

  layers.forEach((layer) => {
    new TurboLayerController(
      layer.getAttribute("value"),
      layer.getAttribute("src")
    ).update()
  })
});
