const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
    const { id } = req.params;
    Recipes.getShoppingList(id)
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'There as an error retrieving the required recipes' });
    });
});

router.get('/:id/instructions', (req, res) => {
    
});

router.get('/:id/shoppingList', (req, res) => {
    
});


module.exports = router;