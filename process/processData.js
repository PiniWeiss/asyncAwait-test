import { loadFromJson } from "../searches/readingJson.js";

const records = await loadFromJson("./data/records.json");
const people = await loadFromJson("./data/people.json");

export function putLevelDanger() {
  const levels = {};
  for (let i = 0; i < records.length; i++) {
    let content = records[i].content.split(" ");

    let dangerLevel = content.filter(
      (element) =>
        element === "death" ||
        element === "knife" ||
        element === "bomb" ||
        element === "attack"
    ).length;

    if (dangerLevel > 0) {
      if (levels[records[i].age]) {
        levels[records[i].age].push(dangerLevel);
      } else levels[records[i].age] = [dangerLevel];
    }
  }
  return levels;
}

function sum(arr) {
  let sum = 0;

  for (const number of arr) {
    sum += number;
  }
  return sum;
}

export function calculatAvarageDangerAge(levelObj) {
  const avarageLevels = {};
  Object.keys(levelObj).forEach((key) => (levelObj[key] = sum(levelObj[key])));
  return levelObj;
}

export function top3Level(levelObj) {
  const result = Object.entries(levelObj);
  const sorted = result.sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, 3);
}

export function namesDangers(agesList) {
  return people.filter(
    (person) =>
      person.age === agesList[0] ||
      person.age === agesList[1] ||
      person.age === agesList[2]
  );
}

async function sentDangersPeople(namesList) {
  const res = await fetch(
    `https://spies-test-server.vercel.app/report?names=${namesList}`
  );
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.text();
  return data;
}

