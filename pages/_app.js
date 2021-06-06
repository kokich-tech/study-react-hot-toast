import '../styles/globals.css'
import toast, { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Toaster
        // toasterの表示位置
        position="top-center"
        reverseOrder={false}
        //余白について
        gutter={8}
        containerClassName=""
        //toastがどこから出てくるかを指定できる
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </div>
  )
}
export default MyApp
