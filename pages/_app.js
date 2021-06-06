import '../styles/globals.css'
import toast, { Toaster } from 'react-hot-toast'

const notify = () =>
  toast('Hello World', {
    //duration 表示秒数　1000=1秒
    duration: 4000,
    // Styling スタイリングを変更することができる
    style: { backgroundColor: 'orange' },
    className: '',
    // Custom Icon
    icon: '👏',
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
    // Aria　アクセシビリティに考慮
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  })

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
