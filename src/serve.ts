import App from "./app/app"
import host from "./host/ip";

import cluster from 'cluster'
const numCPUs = require('os').availableParallelism()

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const app = new App()
  let port : string | number = process.env.PORT || 3333
  if(typeof port === "string"){
    port = parseInt(port)
  }
  app.serve({
    port,
    host,
    message: `\n (worker ${process.pid}) \n running port: ${port} \n - web: http://${host}:${port}/ \n - api: http://${host}:${port}/api`
  })  
}