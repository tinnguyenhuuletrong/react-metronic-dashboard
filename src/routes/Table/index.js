import TableView from './components/TableView'

// Sync route definition

export default (store) => ({
  path : 'table',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {

      /*  Return getComponent   */
      cb(null, TableView)

    /* Webpack named bundle   */
  }, 'table')
  }
})
