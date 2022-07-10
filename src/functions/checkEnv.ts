export function checkEnv() {
    if (process.env.GRIEFFICIENT_API_KEY === undefined) {
        console.log("Please set the GRIEFFICIENT_API_KEY environment variable to your Shodan API key.\nCheck the documentation for help.\nExiting!");
        process.exit(1);
    }
}