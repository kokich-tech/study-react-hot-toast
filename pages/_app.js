import '../styles/globals.css'
import toast, { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Toaster />
    </div>
  )
}
export default MyApp
