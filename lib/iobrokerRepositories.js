#!/usr/bin/env node

const axios = require('axios');

// disable axios caching
axios.defaults.headers = {
    'Authorization': process.env.IOBBOT_GITHUB_TOKEN ? `token ${process.env.IOBBOT_GITHUB_TOKEN}` : 'none',
    'user-agent': 'Action script',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
};

const context = {};

async function getLatestRepoLive() {
    if ( !context.latestRepoLive ) {
        try {
            const url = 'http://repo.iobroker.live/sources-dist-latest.json';
            console.log(`retrieving "${url}"`)
            const _response = await axios(url);
            const body = _response.data;
            if (body) {
                context.latestRepoLive = body;
            } else {
                console.log('Error: cannot download "${url}"')
                throw( 'Cannot download "${url}"' );
            }
        } catch (e) {
            console.log('Error: cannot download "${url}"')
            throw e;
        }
    }
    return context.latestRepoLive;
};

async function getStableRepoLive() {
    if ( !context.stableRepoLive ) {
        try {
            const url = 'http://repo.iobroker.live/sources-dist.json';
            console.log(`retrieving "${url}"`)
            const _response = await axios(url);
            const body = _response.data;
            if (body) {
                context.stableRepoLive = body;
            } else {
                console.log('Error: cannot download "${url}"')
                throw( 'Cannot download "${url}"' );
            }
        } catch (e) {
            console.log('Error: cannot download "${url}"')
            throw e;
        }
    }

    return context.stableRepoLive;
};

exports.getLatestRepoLive = getLatestRepoLive;
exports.getStableRepoLive = getStableRepoLive;

