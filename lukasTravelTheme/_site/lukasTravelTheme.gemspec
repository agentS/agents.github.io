# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "lukas_travel_theme"
  spec.version       = "0.0.0"
  spec.authors       = ["Lukas Schoerghuber"]
  spec.email         = ["lukas.schoerghuber@posteo.at"]

  spec.summary       = "Theme for travel blogs inspired by \"Kami And the Rest of the World\""
  spec.homepage      = "https://www.github.com/agentS/lukasTravelTheme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
