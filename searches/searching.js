import { loadFromJson } from "./readingJson.js";
import input from "analiza-sync"

const people = await loadFromJson("./data/people.json")

export function searchPepoleByName(){
    const data = people
    const  name = input("Enter name to search: ")
    if(data.filter(element => element.name === name).length > 0){
        console.log(data.filter(element => element.name === name));
        
    }else console.log("There is no person name "+name);
    
}

export function searchPepoleByAge(){
    const data = people
    const  age = +input("Enter age to search: ")
    if(data.filter(element => element.age === age).length > 0){
        console.log(data.filter(element => element.age === age));
        
    }else console.log("There is no person on the list whose age is "+age);
    
}