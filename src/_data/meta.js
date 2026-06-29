import { readFile } from "node:fs/promises";

const data = await readFile("data.txt", "utf-8");
const linkedinMatch = data.match(/LINKEDIN="([^"]+)"/);
const githubMatch = data.match(/GITHUB="([^"]+)"/);

export default {
  linkedin: linkedinMatch ? linkedinMatch[1] : "",
  github: githubMatch ? githubMatch[1] : ""
};
