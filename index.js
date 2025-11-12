const jsonserver = require('json-server')
const server = jsonserver.create()
const middleware = jsonserver.defaults()
const routes = jsonserver.router('db.json')

server.use(middleware)
server.use(routes)

const PORT = 3000
server.listen(PORT,()=>{
    console.log('server started');
})