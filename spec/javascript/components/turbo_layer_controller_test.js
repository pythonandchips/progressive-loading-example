import { TurboLayerController } from "../../../app/javascript/components/turbo_layer_controller"}

describe("adding layer", () => {
  it("merges in the layers", () => {
    const currentBody = new DOMParser().parseFromString(`
      <table>
        <tbody>
          <tr>
            <td>
              Name of something
              <turbo-layer-fragment name="client-detail">
              </turbo-layer-fragment>
            </td>
          </tr>
        </tbody>
      </table>
    `, "text/html")
    const layerBody = new DOMParser().parseFromString(`
      <table>
        <tbody>
          <tr>
            <td>
              Name of something
              <turbo-layer-fragment name="client-detail">
                Price of the world
              </turbo-layer-fragment>
            </td>
          </tr>
        </tbody>
      </table>
    `, "type/html")

    const turboLayerController = new TurboLayerController("client-detail", "/project")

    turboLayerController.applyLayer(currentBody.body, layerBody.body)

    expect(
      layerBody.querySelector("turbo-layer-fragment[name=client-detail]")
    ).toEqual("Price of the world")
  })
})
