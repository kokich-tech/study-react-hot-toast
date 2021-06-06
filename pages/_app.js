import '../styles/globals.css'
import toast, { Toaster } from 'react-hot-toast'

const notify = () => toast('Here is your toast.')

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Component {...pageProps} />
      <Toaster />
    </div>
  )
}

export default MyApp
