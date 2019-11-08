
exports.seed = function(knex) {
 
  return knex('recipes').insert([
    {
      name: 'Beef Wellington', 
      duration: '30 Minutes', 
      servings: '1 people'
    },
    {
      name: 'Beef Stroganoff', 
      duration: '30 Minutes', 
      servings: '4 people'
    },
    {
      name: 'Caesar Salad', 
      duration: '30 Minutes', 
      servings: '3 people'
    },
    {
      name: 'Chicken Marengo', 
      duration: '30 Minutes', 
      servings: '2 people'
    },
    {
      name: 'Eggs Benedict', 
      duration: '30 Minutes', 
      servings: '2 people'
    },
    {
      name: 'Lobster Newburg', 
      duration: '30 Minutes', 
      servings: '6 people'
    },
    {
      name: 'Peach Melba', 
      duration: '30 Minutes', 
      servings: '6 people'
    },
    {
      name: 'Waldorf Salad', 
      duration: '30 Minutes', 
      servings: '4 people'
    },
    {
      name: 'Salisbury Steak', 
      duration: '30 Minutes', 
      servings: '3 people'
    }
  ]);

};
