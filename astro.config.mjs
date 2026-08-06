import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://universal-age-calculator.pages.dev",
	integrations: [sitemap()],
});