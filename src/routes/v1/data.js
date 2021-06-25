const express = require('express');
const router = express.Router();
const dataController = require('../../controller/v1/data');

//      @type       POST
//      @route      /api/v1/data/add
//      @desc       FOR ADDING DATA
//      @access     PUBLIC
router.post('/add', dataController.add);

//      @type       GET
//      @route      /api/v1/data/get
//      @desc       FOR ADDING DATA
//      @access     PUBLIC
router.get('/get', dataController.get);

module.exports = router;
