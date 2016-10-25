import HomeContainer from './containers/HomeContainer'

// Sync route definition

export default (store) => ({
  path : '',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {

      /*  Return getComponent   */
      cb(null, HomeContainer)

    /* Webpack named bundle   */
  }, 'tabs')
  }
})
