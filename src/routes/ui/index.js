const { renderContacto, renderHome } = require("../../controllers/ui/views.controllers.js")
const express = require("express")
const router = express.Router()

router.get('/', renderHome);
router.get('/contacto', renderContacto);

module.exports = {
    uiRoutes: router
}