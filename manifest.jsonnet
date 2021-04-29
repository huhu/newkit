local manifest = import 'core/manifest.libsonnet';
local utils = import 'core/utils.libsonnet';

local icons() = {
  [size]: 'logo.png'
  for size in ['16', '48', '128']
};

local json = manifest.new(
  name='Oh My New',
  version='0.1',
  keyword='new',
  description='Oh! You can new everything in the address bar.t!',
)
             .addIcons(icons())
             .addBackgroundScripts(utils.js_files('command', ['help']))
             .addBackgroundScripts(['main.js']);

json
