
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name')
        tbl.string('servings')
        tbl.string('duration')

    })

    .createTable('ingredients_list', tbl => {
        tbl.increments();
        tbl.string('name')
    })

    .createTable('recipe_ingredients', tbl => {
        tbl.increments();

        tbl.string('recipe_id')
        .unsigned()
        
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        tbl.string('ingredient_id')
        .unsigned()
        
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        tbl.unique(['recipe_id', 'ingredient_id'])
    })

    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.string('instructions')
        
        tbl.string('recipe_id')
        .unsigned()
        
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

    })
};    


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients_list')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('instructions')
};
