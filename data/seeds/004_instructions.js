
exports.seed = function(knex) {
 
  return knex('instructions').insert([
    {
      recipe_id: '1', 
      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', 
    },
    {
      recipe_id: '1', 
      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', 
    },
    {
      recipe_id: '2', 
      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', 
    },
    {
      recipe_id: '2', 
      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', 
    },
    {
      recipe_id: '3', 
      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', 
    },
    {
      recipe_id: '4', 
      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', 
    },
    {
      recipe_id: '4', 
      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', 
    },
    {
      recipe_id: '5', 
      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', 
    },
    {
      recipe_id: '4', 
      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', 
    }
  ]);

};
