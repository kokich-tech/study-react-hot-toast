import '../styles/globals.css'
import toast, { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  const handleClick = () => toast.loading('Waiting...')

  return (
    <div>
      <button onClick={handleClick}>Make me a toast</button>
      <Component {...pageProps} />
      <Toaster />
    </div>
  )
}
export default MyApp
