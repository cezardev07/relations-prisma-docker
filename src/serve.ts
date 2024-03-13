import App from "./app/app"

import cluster from 'cluster'
const numCPUs = require('os').availableParallelism()

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const app = new App()
  const port = process.env.PORT || 3333
  app.serve({
    port,
    message: `\n (worker ${process.pid}) \n running port: ${port} \n - web: http://localhost:${port}/ \n - api: http://localhost:${port}/api`
  })  
}