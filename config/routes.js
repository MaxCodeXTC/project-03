const router = require('express').Router()
const homeController = require('../controllers/pages')

router.get('/', homeController.home)



module.exports = router