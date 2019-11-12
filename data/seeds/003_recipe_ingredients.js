
exports.seed = function(knex) {
  
  return knex('recipe_ingredients').insert([
    {
      recipe_id: 1, 
      ingredient_id: 2
    },
    {
      recipe_id: 2, 
      ingredient_id: 3
    },
    {
      recipe_id: 3, 
      ingredient_id: 2
    },
    {
      recipe_id: 4, 
      ingredient_id: 4
    },
    {
      recipe_id: 5, 
      ingredient_id: 3
    },
    {
      recipe_id: 6, 
      ingredient_id: 5
    },
    {
      recipe_id: 7, 
      ingredient_id: 3 
    },
    {
      recipe_id: 8, 
      ingredient_id: 3
    }
  ]);
   
};