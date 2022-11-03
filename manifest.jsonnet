// Format: jsonnetfmt -i manifest.jsonnet
local utils = import 'core/utils.libsonnet';

local icons() = {
  [size]: 'logo.png'
  for size in ['16', '48', '128']
};

local name = 'Newkit';
local version = '0.1';
local keyword = 'new';
local description = 'Oh! You can new everything in the address bar!';

local browser = std.extVar('browser');

local json = if std.member(['chrome', 'edge'], browser) then
  local manifest_v3 = import 'core/manifest_v3.libsonnet';
  manifest_v3.new(name, keyword, description, version, service_worker='service-worker.js')
  .addWebAccessibleResources(
    resources=['parse.js'],
    matches=[
      '*://whats.new/*',
    ],
  )
else
  local manifest_v2 = import 'core/manifest.libsonnet';
  manifest_v2.new(name, keyword, description, version)
  .addWebAccessibleResources(['parse.js'])
  .addBackgroundScripts(utils.js_files('command', ['help']))
  .addBackgroundScripts(['shortcuts.js', 'search.js', 'index-manager.js', 'main.js'])
;

json
.addIcons(icons())
.addPermissions(['storage', 'unlimitedStorage'])
.addContentScript(
  matches=['*://whats.new/shortcuts/'],
  js=['content-scripts.js'],
  css=[],
)
