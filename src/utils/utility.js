import fs from "fs";

export async function readInput(path) {
  try {
    const file = await fs.promises.readFile(path, "utf-8");
    return file
      .trim()
      .split("\n")
      .map((line) => line.split(/\s+/).map(Number));
  } catch (error) {
    console.error(`Error reading file at ${path}:`, error);
  }
}
