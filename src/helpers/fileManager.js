const fs = require("node:fs/promises")

const readJSONFile = async (filePath) => {
    const data = await fs.readFile(filePath, {
        encoding: 'utf-8'
    })

    const dataJSON = JSON.parse(data)

    return dataJSON
}

const saveJSONFile = async (filePath, data) => {
    const dataText = JSON.stringify(data)
    
    await fs.writeFile(filePath, dataText, {
        encoding: "utf-8"
    })

    return
}

module.exports = {
    readJSONFile,
    saveJSONFile
}