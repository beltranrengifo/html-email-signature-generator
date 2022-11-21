const app = require('express')()
const cors = require('cors')
const request = require('request')
const proxy = require('html2canvas-proxy')

app.get('/api', cors(), proxy(), (req, res, next) => {
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')

  request(
    { url: req.query.url, encoding: 'binary' },
    (error, response, body) => {
      if (error) {
        return next(error)
      }
      res.send(
        `data:${response.headers['content-type']};base64,${Buffer.from(
          body,
          'binary'
        ).toString('base64')}`
      )
    }
  )
})

module.exports = app
