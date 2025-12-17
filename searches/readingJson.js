import fs from "fs/promises";

export async function loadFromJson(path) {
  const recordData = await fs.readFile(path, "utf-8", (err) => {
    if (err) {
      console.log("Error reading file");
      return;
    }
    
  }
);
const peopleArray = JSON.parse(recordData);
return peopleArray
}