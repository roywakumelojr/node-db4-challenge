
exports.up = function(knex) {
    exports.up = function(knex) {
        return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name').notNullable()
            tbl.integer('servings').notNullable()
            tbl.string('duration').notNullable()
    
        })

        .createTable('ingredients_list', tbl => {
            tbl.increments();
            tbl.string('name').notNullable()
        })

        .createTable('recipe_ingredients', tbl => {
            tbl.increments();
            tbl.unique(['recipe_id', 'ingredients_id'])

            tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

            tbl.integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        })

        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.string('instructions').notNullable()
            
            tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        })
    };    
};

exports.down = function(knex) {
    return knex.schema
    .droTableIfExists('recipes')
    .droTableIfExists('ingredients_list')
    .droTableIfExists('recipe_ingredients')
    .droTableIfExists('instructions')
};
