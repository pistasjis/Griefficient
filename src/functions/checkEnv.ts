import chalk from 'chalk';

export function checkEnv() {
    if (process.env.GRIEFFICIENT_API_KEY === undefined) {
        console.log(chalk.red("❌ Please set the GRIEFFICIENT_API_KEY environment variable to your Shodan API key.\nCheck the documentation for help.\nExiting!"));
        process.exit(1);
    }
    else {
        console.log(chalk.greenBright("✅ Environment variables are set properly."));
    }
}