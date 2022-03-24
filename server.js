const express = require('express')
const path = require('path')
//const PORT = process.env.PORT || 5000
//const history = require("connect-history-api-fallback");
const app = express();

//app.use(history());

//express()
//  .use(express.static(path.join(__dirname, 'public')))
//  .set('views', path.join(__dirname, 'views'))
//  .set('view engine', 'ejs')
//  .get('/', (req, res) => res.render('index'))
//  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


app.use(express.static("./public/"));
app.get("/*", (req, res) => res.sendFile("index", { root: "/views/" }));

app.listen(process.env.PORT || 8080);
