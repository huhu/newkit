local manifest = import 'core/manifest.libsonnet';
local utils = import 'core/utils.libsonnet';

local icons() = {
  [size]: 'logo.png'
  for size in ['16', '48', '128']
};

local json = manifest.new(
  name='Newkit',
  version='0.1',
  keyword='new',
  description='Oh! You can new everything in the address bar!',
)
             .addIcons(icons())
             .addWebAccessibleResources(['parse.js'])
             .addBackgroundScripts(utils.js_files('command', ['help']))
             .addBackgroundScripts(['shortcuts.js', 'search.js', 'main.js'])
             .addContentScript(
               matches=['*://whats.new/shortcuts*'],
               js=['content-scripts.js'],
               css=[],
             );

json
