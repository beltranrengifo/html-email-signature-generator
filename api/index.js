/* import express from 'express'
import url from 'url'
import cors from 'cors'
import request from 'request'

const validUrl = (req, res, next) => {
  if (!req.query.url) {
    next(new Error('No url specified'))
  } else if (
    typeof req.query.url !== 'string' ||
    // eslint-disable-next-line n/no-deprecated-api
    url.parse(req.query.url).host === null
  ) {
    next(new Error(`Invalid url specified: ${req.query.url}`))
  } else {
    next()
  }
}

const getImageAsBase64 = () => {
  const app = express.Router()
  app.get('/', cors(), validUrl, (req, res, next) => {
    switch (req.query.responseType) {
      case 'blob':
        console.log('case bob')
        req.pipe(request(req.query.url).on('error', next)).pipe(res)
        break
      case 'text':
        console.log('case text')
        break
      default:
        console.log('case default')
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
    }
  })

  return app
}

export default getImageAsBase64 */

const app = require('express')()
const cors = require('cors')
const request = require('request')

app.get('/api', cors(), (req, res, next) => {
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
