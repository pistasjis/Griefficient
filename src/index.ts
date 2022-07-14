#!/usr/bin/env node
import { Command } from 'commander';
import { makeRequest } from './handle/request.js';  //FIXME: If tsconfig.json specifies strictness, this throws an error during compile. That's not good!
import chalk from  'chalk';

const program = new Command();
export const version = "1.0.1";

program
    .version(version)
    // .option('-po, --withplayers', 'Only search for servers with players.') For later :)

program.parse(process.argv);

const options = program.opts();
// if (options.withplayers) console.log("Option withplayers on");
console.log(chalk.blue("Griefficient v" + version + chalk.green(" by Odyssey346"))); makeRequest();