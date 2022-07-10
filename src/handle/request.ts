import got from 'got';
import Bourne from '@hapi/bourne';
import { checkEnv } from '../functions/checkEnv.js';

export async function makeRequest() {
    interface JSONStuff {
        ip_str?: string;
        port?: number;
        version?: string;
        total?: number;
        data?: string;
    }

    checkEnv();

    const parsed = await got('https://api.shodan.io/shodan/host/search?key=' + process.env.GRIEFFICIENT_API_KEY + '&query=Minecraft', {
        parseJson: text => Bourne.parse(text)
    }).json();

    let thejson: { matches?: JSONStuff[] } = parsed;

    for (var i=0; i<thejson.matches.length; i++) {
        var matches = thejson.matches[i];
        console.log(matches.ip_str + ":" + matches.port + " (" + matches.version + ")");
    }
}