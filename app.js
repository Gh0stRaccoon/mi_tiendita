const path = require("node:path")
const express = require("express")
const { engine, create } = require('express-handlebars');
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
app.use(express.json()) // application/json
app.use(express.urlencoded()) // application/x-www-form-urlencoded
app.use(routes)

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}/`)
})