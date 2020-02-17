const express = require("express") //chamando o express
const nunjucks = require("nunjucks")

//server
const server = express() //inicializando o express que vai fazer nosso servidor funcionar

//mostrar o arquivos estaticos como css
server.use(express.static('public'))

//configurando o template engine
server.set("view engine", "njk") 

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

//routes
server.get("/", function(req,res) {
  return res.render("courses")
})

server.get("/about", function(req, res) {
  return res.render("about")
})

//mostrar pagina 404 - página não encontrada
server.use(function(req, res) {
  res.status(404).render("not-found")
})


//server listening
server.listen(5000, function() {
  console.log("server is running")
})

