const path = require("node:path")
const { readJSONFile } = require("../../helpers/fileManager.js")

const STORE_NAME = "Mew's Store"

const renderHome = async (req, res) => {
    const productos = await readJSONFile(path.join(__dirname, "../../models/products.models.json"))

    res.render('home', {
        storeName: STORE_NAME,
        products: productos
    });
}

const renderContacto = (req, res) => {
    res.render('contacto', { storeName: STORE_NAME });
}

const renderCrearProducto = (req, res) => {
    res.render('crearProducto', { storeName: STORE_NAME });
}

module.exports = {
    renderHome,
    renderContacto,
    renderCrearProducto
}