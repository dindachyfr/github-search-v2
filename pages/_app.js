// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from '../src/redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Provider store={store}>

          <Component {...pageProps} />
        </Provider>

      </ChakraProvider>

    </>
  )
}

export default MyApp