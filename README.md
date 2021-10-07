# Newkit

<img align="right" width="200" src="extension/logo.png">

### Oh! You can new everything in the address bar.

[![license-apache](https://img.shields.io/badge/license-Apache-yellow.svg)](https://github.com/huhu/newkit/blob/master/LICENSE-APACHE)

## Installation

- [Chrome Web Store](https://chrome.google.com/webstore/detail/newkit/)

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/newkit/)

- [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/)

## How to use it
   
Input keyword **new** in the address bar, press `Space` to activate the search bar. Then enter any word 
you want to **new**.

## Contribution

[jsonnet](https://jsonnet.org/) is required before getting started. To install `jsonnet`,
please check `jsonnet`'s [README](https://github.com/google/jsonnet#packages).
For Linux users, the `snap` is a good choice to [install jsonnet](https://snapcraft.io/install/jsonnet/ubuntu).

```bash
$ git clone --recursive https://github.com/huhu/newkit
Cloning into 'newkit'...
$ cd newkit

$ make chrome # For Chrome version

$ make firefox # For Firefox version

$ make edge # For Edge version
```