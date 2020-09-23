const db=require("../data/db-config")

function findAnimals(zooId){
    return db("zoo_animals as za")
    .join("zoos as z", "z.id", "za.zoo_id")
    .join("animals as a", "a.id", "za.animal_id")
    //if i want the species name 
    .join("species as s", "s.id", "a.species_id")

    //filter based on the zoo id
    .where("za.zoo_id", zooId) //=> same as .where("z.id", zooId)
    //select specific columns
    .select( //if you wnt to select all columns a.*
        "a.id", 
        "a.name",
        "s.name as species_name",
        "za.from_date",
        "za.to_date"
        ) 
}

module.exports={

    findAnimals
}