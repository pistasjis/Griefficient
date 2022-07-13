import got from 'got';
import Bourne from '@hapi/bourne';
import { checkEnv } from '../functions/checkEnv.js';
import chalk from 'chalk';

export async function makeRequest() {
    interface JSONStuff {
        ip_str?: string;
        port?: number;
        version?: string;
        data?: string;
    }


    checkEnv();

    console.log(chalk.green("🔎 Getting data from Shodan's API, please wait..."))
    const parsed = await got('https://api.shodan.io/shodan/host/search?key=' + process.env.GRIEFFICIENT_API_KEY + '&query=Minecraft', {
        parseJson: text => Bourne.parse(text),
    }).json();

    let thejson: { matches?: JSONStuff[] } = parsed;
    let total_results: {total?:number}= parsed;

    // TODO: In the future, show player numbers. Could be done using Gamedig or from Shodan's API.
    for (var i=0; i<thejson.matches.length; i++) {
        var matches = thejson.matches[i];
        console.log(chalk.blue(matches.ip_str + ":" + matches.port) + chalk.cyan(" (" + matches.version + ")"));
    }
    console.log("👉 " + chalk.bold.cyan(Object.keys(thejson.matches).length) + " results shown out of " + chalk.bold.cyan(total_results.total) + " possible results (blame Shodan)")
}