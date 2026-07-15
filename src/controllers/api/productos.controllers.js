const path = require("node:path")
const cloudinary = require('../../config/cloudinary.js')
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

    const imagen = req.files?.imagen

    if (!imagen) {
        return res.status(400).json({ ok: false, message: 'La imagen es requerida' })
    }

    const productos = await readJSONFile(path.join(__dirname, "../../models/products.models.json"))

    const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: 'mi-tiendita/productos'
            },
            (error, uploadResult) => {
                if (error) {
                    reject(error)
                    return
                }

                resolve(uploadResult)
            }
        )

        stream.end(imagen.data)
    })

    productos.push({
        nombre,
        precio: Number(precio),
        disponible,
        imagen: result.secure_url
    })

    await saveJSONFile(path.join(__dirname, "../../models/products.models.json"), productos)

    res.status(201).json({ ok: true, imagen: result.secure_url })
}

module.exports = {
    getAllProducts,
    createProduct
}