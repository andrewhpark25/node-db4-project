const db = require("./data/db-config.js");

module.exports = {
    getRecipes, 
   getShoppingList,
    getInstructions
}

function getRecipes() {
    return db("recipes");
}


function getShoppingList(recipe_id) {
    return db("ingredients")
     .join('recipe_book', 'ingredients.ingredient_name', 'recipe_book.quantity')
     .select('ingredients.ingredient_name', 'recipe_book.quantity')
      .where({recipe_id})
  }
  
  function getInstructions(recipe_id) {
    return db("instructions")
     .join('recipes', 'recipes.id', 'instructions.recipe_id')
     .select('instructions.id', 'recipes.recipe', 'instructions.instruction_number', 'instruction.instruction')
      .where({recipe_id})
  }