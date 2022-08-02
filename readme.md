# Griefficient

[![npm package version](https://img.shields.io/npm/v/griefficient)](https://www.npmjs.com/package/griefficient) [![License](https://img.shields.io/github/license/Odyssey346/Griefficient)](https://github.com/Odyssey346/Griefficient/blob/master/LICENSE) ![Downloads](https://img.shields.io/npm/dw/griefficient)

A command line tool that scans Shodan for Minecraft servers and shows you details about them.

## Installation and usage

### repl.it

1. Navigate to [the repl.it](https://replit.com/@Odyssey346/Griefficient?v=1)
2. Fork it
3. Go to the `Secrets` tab and add [your Shodan API key](https://developer.shodan.io/api/requirements) to the `GRIEFFICIENT_API_KEY` secret.
4. Run `griefficient` in the terminal

_If you have an issue with the repl.it please only report issues to the GitHub issues page and not the repl.it comments section._

### Locally, using npm

1. Install [Node.js](https://nodejs.org).
2. Run `npm i -g griefficient` in a terminal. _(On Linux you might need root privileges.)_
3. [Set up your environment variables.](#environment-variables)
4. Run `griefficient` in a new terminal.

### Locally, by compiling

1. Install [Git](https://git-scm.com/) and [Node.js](https://nodejs.org).
2. Open a terminal and run:

```bash
git clone https://github.com/Odyssey346/Griefficient
cd Griefficient
npm i
npm run build # If you are using NixOS, you can run `nix-shell` instead
```

3. [Set up your environment variables.](#environment-variables)

---
#### Environment Variables

You need to set the `GRIEFFICIENT_API_KEY` environment variable to your Shodan API key.

[Guide for Windows](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html)

[Guide for Linux](https://www.cyberciti.biz/faq/set-environment-variable-linux/)

---

## Credits
- Odyssey346 - Main developer
- akisblack - Made the building and development process easier