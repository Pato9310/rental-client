import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { extendedApiSlice } from './redux/services/hotelsServices'
import { extendedApiSliceUser } from './redux/services/usersServices'
import { Auth0Provider } from '@auth0/auth0-react'

import { store } from './redux/store/store'

import { App } from './routes/App'

store.dispatch(extendedApiSlice.endpoints.getHotels.initiate())
store.dispatch(extendedApiSlice.endpoints.getCities.initiate())
store.dispatch(extendedApiSliceUser.endpoints.getUsers.initiate())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain='dev-gbwt47j0.us.auth0.com'
        clientId='Nwg2VsV5q398oCHROGxm7OtTF8gSkyis'
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>,
    </Provider>
  </React.StrictMode>
)
