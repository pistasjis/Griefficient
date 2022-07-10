#!/usr/bin/env node
import { Command } from 'commander';
import { makeRequest } from './src/handle/request.js';
const program = new Command();
export const version = "1.0.0";

program
    .version(version)
    .option('-po, --withplayers', 'Only search for servers with players.')

program.parse(process.argv);

const options = program.opts();
if (options.withplayers) console.log("Option withplayers on");
else console.log("Hello World!"); makeRequest();