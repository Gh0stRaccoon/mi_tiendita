const path = require("node:path")
const { readJSONFile, saveJSONFile } = require('../../helpers/fileManager.js')

const getAllProducts = async (req, res) => {
    const productos = await readJSONFile(path.join(__dirname, "../../models/products.models.json"))

    res.json(productos)
}

const createProduct = async (req, res) => {
    const {
        nombre,
        precio,
        disponible,
        imagen
    } = req.body

    const productos = await readJSONFile(path.join(__dirname, "../../models/products.models.json"))

    productos.push({ nombre, precio, disponible, imagen })

    await saveJSONFile(path.join(__dirname, "../../models/products.models.json"), productos)

    res.status(201).json({ ok: true })
}

module.exports = {
    getAllProducts,
    createProduct
}