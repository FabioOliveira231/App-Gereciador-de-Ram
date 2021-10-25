const http = require('http')
const stats = require('./pcRamUsege')
http.createServer((req, res)=>{
    let url = req.url
if(url === "/stats"){
     res.end(JSON.stringify(stats, null, 2))
} else{
    res.end('<h1>Seja bem vindo</h1>')
}
}).listen(3000, ()=>{
console.log('Server is running');
console.log('CTRL + C para fechar server')
})
