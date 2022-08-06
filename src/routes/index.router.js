const express = require('express');
const router = express.Router();
const { getAllField , getfieldById , addField , updatefieldById , deletefieldById} = require('../controllers/index.controller')


router.get('/', getAllField);
router.get('/:id', getfieldById);
router.patch('/:id',updatefieldById);
router.post('/new',addField);
router.delete('/:id', deletefieldById)

module.exports = router