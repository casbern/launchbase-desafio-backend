const express = require("express") //chamando o express
const nunjucks = require("nunjucks")
const courses = require("./data")

//server
const server = express() //inicializando o express que vai fazer nosso servidor funcionar

//mostrar o arquivos estaticos como css
server.use(express.static('public'))

//configurando o template engine
server.set("view engine", "njk") 

nunjucks.configure("views", {
  express: server,
  autoescape: false, //imprimir the html
  noCache: true
}) 

//routes
server.get("/", function(req,res) {
  return res.render("courses", { items: courses })
})

server.get("/about", function(req, res) {
  const about = {
    avatar_url: "https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_400x400.jpg",
    name: "Rocketseat",
    description: "Plataforma de educação em tecnologia",
    tecnologies: [ "HTML", "CSS", "JavaScript"],
    links: [
      {name: "Github", url: "https://github.com/Rocketseat"},
      {name: "Facebook", url: "https://www.instagram.com/rocketseat_oficial/?hl=en"},
      {name: "Instagram", url: "https://www.facebook.com/rocketseat/"}
    ]
  }

  return res.render("about", {about})
})

//mostrar pagina 404 - página não encontrada
server.use(function(req, res) {
  res.status(404).render("not-found")
})


//server listening
server.listen(5000, function() {
  console.log("server is running")
})


