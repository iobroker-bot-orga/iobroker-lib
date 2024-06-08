/* jshint -W097 */
/* jshint strict: false */
/* jslint node: true */
'use strict';

const iobrokerTools = require('./lib/iobrokerTools.js');
const iobrokerRepositories = require('./lib/iobrokerRepositories.js');

console.log('module has been loaded successfully');

exports.extractAdapterName = iobrokerTools.extractAdapterName;
exports.getAdapterUrls = iobrokerTools.getAdapterUrls;
exports.getLatestAdapters = iobrokerTools.getLatestAdapters;
exports.getLatestRepoLive = iobrokerRepositories.getLatestRepoLive;
exports.getStableAdapters = iobrokerTools.getStableAdapters;
exports.getStableRepoLive = iobrokerRepositories.getStableRepoLive;
