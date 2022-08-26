# Griefficient

[![npm package version](https://img.shields.io/npm/v/griefficient)](https://www.npmjs.com/package/griefficient) [![License](https://img.shields.io/github/license/Odyssey346/Griefficient)](https://github.com/Odyssey346/Griefficient/blob/master/LICENSE) ![Downloads](https://img.shields.io/npm/dw/griefficient)

A command line tool that scans Shodan for Minecraft servers and shows you details about them.

## Installation and usage

### Using the executable (recommended)

1. Get the latest executable for your platform from the ["Releases"](https://github.com/Odyssey346/Griefficient/releases/latest) section on GitHub.
2. [Set up your environment variables.](#environment-variables)
3. Run the executable.

### Using npm

1. Install [Node.js](https://nodejs.org).
2. Run `npm i -g griefficient` in a terminal. _(On Linux you might need root privileges.)_
3. [Set up your environment variables.](#environment-variables)
4. Run `griefficient` in a new terminal.

### By compiling

1. Install [Git](https://git-scm.com/), [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io).
2. Open a terminal and run:

```bash
git clone https://github.com/Odyssey346/Griefficient
cd Griefficient
pnpm i
pnpm build
```

3. [Set up your environment variables.](#environment-variables)
4. Run `pnpm preview` in the same terminal you ran the previous commands.

---

#### Environment Variables

You need to set the `GRIEFFICIENT_API_KEY` environment variable to your Shodan API key.

[Guide for Windows](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html)

[Guide for Linux](https://www.cyberciti.biz/faq/set-environment-variable-linux/)

---

## Credits

-   Odyssey346 - Main developer
-   akisblack - Made the building and development process easier
