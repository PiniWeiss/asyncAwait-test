import fs from "fs";


async function getAllPeople(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return await res.text();
}

async function getAllRecords(path) {
  const res = await fetch(path);
  if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.text();
}



export async function loadToJson(filePath, cb){
  try {
    const data = await cb;
    fs.writeFile(filePath, data, (err) => {
  if (err) {
      console.log(err);
      
      return;
    }
});
} catch (error) {
    console.error(error);
}
}



