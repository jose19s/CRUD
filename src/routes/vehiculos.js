const express = require('express');
const router = express.Router();

//the routes for each form
const vehiculosController = require('../controllers/vehiculosController');

//route for the lists
router.get('/', vehiculosController.list);

//route for save
router.post('/add', vehiculosController.save);

//route for delete
router.get('/delete/:id', vehiculosController.delete);

//route for edit
router.get('/update/:id', vehiculosController.edit );

//route for update
router.post('/update/:id', vehiculosController.update );
module.exports = router;