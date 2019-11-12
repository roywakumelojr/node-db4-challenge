const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db ('recipes')
}

function getShoppingList(recipe_id) {
    return db ('recipe_ingredients as R')
    .select('ingredients.name')
    .where({ recipe_id })
    .join('R.ingredients_id', 'ingredients', 'ingredients.id')
}

function getInstructions(recipe_id) {
    return db ('instructions as I')
    .select('recipe.name', 'I.instruction')
    .where({ recipe_id })
    .join('I.recipe_id', 'recipes', 'recipes.id')
}