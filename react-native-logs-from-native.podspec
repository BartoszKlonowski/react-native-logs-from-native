# react-native-logs-from-native.podspec

require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-logs-from-native"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  react-native-logs-from-native
                   DESC
  s.homepage     = "https://github.com/BartoszKlonowski/react-native-logs-from-native"
  # brief license entry:
  s.license      = "MIT"
  # optional - use expanded license entry instead:
  # s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "Bartosz Klonowski" => "Bartosz.Klonowski@cxcode.pl" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/BartoszKlonowski/react-native-logs-from-native.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,c,cc,cpp,m,mm,swift}"
  s.requires_arc = true

  s.dependency "React"
  # ...
  # s.dependency "..."
end

