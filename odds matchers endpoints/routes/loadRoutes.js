exports.loadRoutes = (app) => {
  app.use('/api/odds-matchers-endpoints/oddsmatcher', require('./oddsmatcher'))
}
