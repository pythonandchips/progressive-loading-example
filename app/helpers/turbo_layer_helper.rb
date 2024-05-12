module TurboLayerHelper
  def turbo_layer_fragment(name=nil)
    tag.turbo_layer_fragment(name: name) do
      if name
        yield if request.headers["Turbo-Layer"] == name
      else
        yield if request.headers["Turbo-Layer"].nil?
      end
    end
  end
end
