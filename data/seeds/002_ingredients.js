
exports.seed = function(knex) {
  
  return knex('ingredients_list').insert([
    {name: 'Beef'},
    {name: 'Lettuce '},
    {name: 'Tomatoes'},
    {name: 'Oil'},
    {name: 'Salt'},
    {name: 'Chill Powder'},
    {name: 'Chicken'},
    {name: 'eggs'},
    {name: 'Lobster'},
    {name: 'Peaches'},
    {name: 'And Ofcourse Classic Water'},
  ]);
   
};
