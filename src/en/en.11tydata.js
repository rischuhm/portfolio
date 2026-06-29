import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const [cv, projects] = await Promise.all([
  readFile(join(__dirname, "_data", "cv.json"), "utf-8"),
  readFile(join(__dirname, "_data", "projects.json"), "utf-8")
]);

export default {
  eleventyComputed: {
    cv: () => JSON.parse(cv),
    projects: () => JSON.parse(projects)
  }
};
