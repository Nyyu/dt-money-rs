import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { db as databaseItems } from './db'
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transactions: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: databaseItems
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, req) => {
      const data = JSON.parse(req.requestBody)

      return schema.create('transactions', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
