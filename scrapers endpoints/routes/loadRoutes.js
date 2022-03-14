exports.loadRoutes = (app) => {
  app.use('/api/scrapers-endpoints/cplay', require('./cplay'))
  app.use('/api/scrapers-endpoints/betfair-exchange', require('./betfair'))
}
