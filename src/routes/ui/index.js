const { renderContacto, renderHome, renderCrearProducto } = require("../../controllers/ui/views.controllers.js")
const express = require("express")
const router = express.Router()

router.get('/', renderHome);
router.get('/contacto', renderContacto);
router.get('/crear-producto', renderCrearProducto);

module.exports = {
    uiRoutes: router
}