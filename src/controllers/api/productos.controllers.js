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
        disponible = true,
    } = req.body

    const { imagen } = req.files

    const productos = await readJSONFile(path.join(__dirname, "../../models/products.models.json"))

    productos.push({
        nombre,
        precio: Number(precio),
        disponible,
        imagen: `/assets/img/productos/${imagen.name}`
    })

    const imagePath = path.join(__dirname, `../../../public/assets/img/productos/${imagen.name}`)
    await imagen.mv(imagePath)

    await saveJSONFile(path.join(__dirname, "../../models/products.models.json"), productos)

    res.status(201).json({ ok: true })
}

module.exports = {
    getAllProducts,
    createProduct
}