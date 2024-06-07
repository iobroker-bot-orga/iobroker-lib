/* jshint -W097 */
/* jshint strict: false */
/* jslint node: true */
'use strict';

const iobrokerTools = require('./lib/iobrokerTools.js');
const iobrokerRepositories = require('./lib/iobrokerRepositories.js');

console.log('module has been loaded successfully');

exports.extractAdapterName = iobrokerTools.extractAdapterName;
exports.getAdapters = iobrokerTools.getAdapters;
exports.getAdapterUrls = iobrokerTools.getAdapterUrls;
exports.getLatestRepoLive = iobrokerRepositories.getLatestRepoLive;
exports.getStableRepoLive = iobrokerRepositories.getStableRepoLive;
