
exports.up = async function(knex) {
    await knex.schema.createTable("zoos",(table)=>{
        table.increments("id")
        table.text("name").notNullable()
        table.text("address").notNullable().unique()

    })

    await knex.schema.createTable("species", (table)=>{
        table.increments("id")
        table.text("name").notNullable().unique()
    })

    await knex.schema.createTable("animals", (table)=>{
        table.increments("id")
        table.text("name").notNullable().unique()

        //create a foreign key
        table.integer("species_id").references("id").inTable("species")
        .onDelete("SET NULL").onUpdate("CASCADE")

    })

    await knex.schema.createTable("zoo_animals", (table)=>{
        // table.increments("id")
        table.integer("zoo_id")
            .notNullable()
            .references("id")
            .inTable("zoos")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("animal_id")
            .references("id")
            .inTable("animals")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.date("from_date").notNull().defaultTo(knex.raw("current_timestamp")) //current time of data
        table.date("to_date")

        //create a foreign key
        table.integer("species_id").references("id").inTable("species")

        //primary key a combination of two column rather than a single one
        table.primary(["zoo_id", "animal_id"])

    })
  
};



exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("zoo_animals")
    await knex.schema.dropTableIfExists("animals")
    await knex.schema.dropTableIfExists("species")
    await knex.schema.dropTableIfExists("zoos")
  
};
