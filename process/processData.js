import { loadFromJson } from "../searches/readingJson.js";

const records = await loadFromJson("./data/records.json");

export function putLevelDanger() {
  const data = Object.entries(records)
  
  const levels = {};
  for (let i = 0; i > 0; i++) {
    let content = data[i].content.split(" ");
    
    let dangerLevel = content.map(
      (element) =>
        element === "death" ||
        element === "knife" ||
        element === "bomb" ||
        element === "attack"
    ).length;
    
    
    if (levels[data[i].age]) {
      levels[data[i].age].push(dangerLevel);
    }else levels[data[i].age] = [dangerLevel]
  }
  return levels
}
console.log(putLevelDanger());



