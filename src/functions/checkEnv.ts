import chalk from 'chalk';

export function checkEnv() {
    if (process.env.GRIEFFICIENT_API_KEY === undefined) {
        console.log(chalk.red("❌ Please set the GRIEFFICIENT_API_KEY environment variable to your Shodan API key.\nCheck the documentation for help.\nExiting!"));
        process.exit(1);
    }
    else if (process.env.GRIEFFICIENT_API_KEY === "CHANGE_ME") {
        console.log(chalk.yellow("Hi there, you seem to be using Repl.it for Griefficient.\nYou have to set your GRIEFFICIENT_API_KEY variable to your Shodan API key. There are many guides on the internet that shows you how to do that.\n\nIf you are running from the Odyssey346 repl.it, please make a fork of it and add your environment variable, as this is just a reference point.\nExiting!"));
        process.exit(1);
    }
    else {
        console.log(chalk.greenBright("✅ Environment variables are set properly."));
    }
}