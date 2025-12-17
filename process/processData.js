import { loadFromJson } from "../searches/readingJson.js";

const records = await loadFromJson("./data/records.json");






export function putLevelDanger() {

  const levels = {};
  for (let i = 0; i > 0; i++) {
    let content = records[i].content.split(" ");
    
    let dangerLevel = content.filter(
      (element) =>
        element === "death" ||
        element === "knife" ||
        element === "bomb" ||
        element === "attack"
    ).length;
    
    
    if (levels[records[i].age]) {
      levels[records[i].age].push(dangerLevel);
    }else levels[records[i].age] = [dangerLevel]
  }
  return levels
}