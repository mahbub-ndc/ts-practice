const http = require('http')
const fs = require('fs')
const server = http.createServer();

server.on('request', (req, res) =>{
    if(req.url ==='/read-file' && req.method==='GET'){
    const readFile = fs.createReadStream(process.cwd() + '/modules/dist/text.txt')

    readFile.on('data', (buffer)=>{
        res.write(buffer)
    })
    readFile.on('end',()=>{
        res.end("Hello world!")
    })
    }
    
})

server.listen(5000, ()=>{
    console.log("server is listening on 5000")
})