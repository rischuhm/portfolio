import { readFile } from "node:fs/promises";

const data = await readFile("data.txt", "utf-8");
const match = data.match(/LINKEDIN="([^"]+)"/);

export default {
  linkedin: match ? match[1] : ""
};
