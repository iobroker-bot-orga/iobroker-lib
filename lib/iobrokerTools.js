const repositories = require ('./iobrokerRepositories');

const context = [];

function extractAdapterName(url) {
    //`https://www.github.com/${user}/ioBroker.${adapter}`;
    return url.split('/')[4].split('.')[1];
}

async function getAdapters() {
    if (! context.adapters ) {
        await repositories.getLatestRepoLive();
        const adapters = {};
        for (const adapter in context.latestRepoLive) {
            if (adapter === '_repoInfo') continue;
            //"meta": "https://raw.githubusercontent.com/ioBroker/ioBroker.js-controller/master/packages/controller/io-package.json
            const meta = context.latestRepoLive[adapter].meta;
            if (!meta) {
                console.log (`warning: adapter ${adapter} does not specify 'meta' attribute`);
                continue;
            }
            const user = meta.split('/')[3];
            adapters[adapter] = {};
            adapters[adapter].githubUrl = `https://www.github.com/${user}/ioBroker.${adapter}`;
            adapters[adapter].user = user;
        }
        context.adapters = adapters;
    }
    return context.adapters;
};

async function getAdapterUrls() {
    if (! context.adapterUrls ) {
        const adapterUrls = [];
        adapters = await getAdapters();
        for (adapter in adapters) {
            console.log (`adding ${adapters[adapter].githubUrl}`)
            adapterUrls.push(adapters[adapter].githubUrl);
        }
        context.adapterUrls = adapterUrls;
    }
    return context.adapterUrls;
};

exports.extractAdapterName = extractAdapterName;
exports.getAdapters = getAdapters;
exports.getAdapterUrls = getAdapterUrls;

