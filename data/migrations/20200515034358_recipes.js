exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128).notNullable();
        tbl.string('instructions').notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 128).notNullable();
    })
    .createTable('recipe_book', tbl => {
        tbl.increments();

        // foreign key to recipes
        tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

        // foreign key to ingredients
        tbl.integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })

   .createTable("instructions", tbl => {
        tbl.increments("id")
        tbl.integer("instruction_number")
        tbl.string("instruction")
        table.integer("recipe_id")
            .references("id")
            .inTable("recipes")
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists("recipe_book")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("recipes")
      .dropTableIfExists("instructions");
  };