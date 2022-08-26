import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	clean: true,
	minify: true,
	format: "cjs",
	outDir: "build",
	noExternal: ["@hapi/bourne", "chalk", "commander", "got"]
});
