[![Build Status](https://travis-ci.org/apibyexample/grunt-abe-json-builder.svg?branch=master)](https://travis-ci.org/apibyexample/grunt-abe-json-builder)
[![Dependency Status](https://david-dm.org/apibyexample/grunt-abe-json-builder/status.svg)](https://david-dm.org/apibyexample/grunt-abe-json-builder#info=dependencies)
[![devDependency Status](https://david-dm.org/apibyexample/grunt-abe-json-builder/dev-status.svg)](https://david-dm.org/apibyexample/grunt-abe-json-builder#info=devDependencies)
[![peerDependency Status](https://david-dm.org/apibyexample/grunt-abe-json-builder/peer-status.svg)](https://david-dm.org/apibyexample/grunt-abe-json-builder#info=peerDependencies)
[![Monthly downloads](http://img.shields.io/npm/dm/grunt-abe-json-builder.svg)](https://www.npmjs.org/package/grunt-abe-json-builder)

# grunt-abe-json-builder

Grunt task for [abe-json-builder](https://github.com/apibyexample/abe-json-builder)

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-abe-json-builder --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-abe-json-builder');
```

## Usage

### options.location

Type: ``String`` *Required*

This is the location of your ABE mock files, in which to cycle through.

### options.build

Type: ``String`` *Required*

This is the location in which you want your new JSON files to be created within.

### options.verbose

Type: ``Boolean`` Default: ``false``

This flags whether or not you wish ``abe-json-builder`` to log out when files are created.

## Example usage

```js

module.exports = function (grunt) {
    grunt.initConfig({
        'abe-json-builder': {
            options: {
                location: 'myApp/mocks/**/*',
                build: 'dist/json/'
            },
            dist: {},
            dev: {
                verbose: true
            }
        }
    });
};
```

To run this you would simply run:

```js
grunt abe-json-builder:dev
```
