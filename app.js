const path = require("node:path")
const express = require("express")
const { engine, create } = require('express-handlebars')
const fileUpload = require("express-fileupload") // middleware
const { routes } = require("./src/routes")

const app = express()
const PORT = 3000

const hbs = create({
    helpers: {
        formatCurrency: function (value) {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            });

            return formatter.format(value)
        }
    }
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json()) // middleware habilita req.body para application/json
app.use(express.urlencoded()) // middleware habilita req.body para application/x-www-form-urlencoded
app.use(fileUpload()) // habilita req.files cuando llegan archivos

app.use(routes)

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}/`)
})