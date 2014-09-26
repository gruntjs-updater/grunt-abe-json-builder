var lodash = require('lodash-node'),
    jsonBuilder = require('abe-json-builder');

module.exports = function (grunt) {
    grunt.task.registerMultiTask('abe-json-builder', function () {
        // Warn task if "location" and/or "build" is not passed
        var opt = this.options(),
            done = this.async();

        if (lodash.isEmpty(opt.location)) {
            grunt.fail.warn('location option is required.');
        }

        if (lodash.isEmpty(opt.build)) {
            grunt.fail.warn('build option is required.');
        }

        jsonBuilder.jsonBuilder(opt, done);
        grunt.log.writeln('ABE JSON files body responses have been split');
    });
};
