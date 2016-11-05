// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import RouteTable from './_routeTable'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.

    https://github.com/ReactTraining/react-router/blob/master/docs/guides/RouteConfiguration.md

    Note: __BASENAME__ is base path setting up for case relative directory like /abc/<route>
*/

export const createRoutes = (store) => ({
  path: __BASENAME__ + '/',
  component: CoreLayout,
  indexRoute: Home(store),
  childRoutes: [
    ...RouteTable.map(itm => {
      const tmp = itm(store)
      if (tmp.path)
        tmp.path = __BASENAME__ + tmp.path
      return tmp
    })
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes