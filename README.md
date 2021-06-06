## 学習の動機

## React hot toastの機能

### ・API

#### toast（）
第二引数にオプションを取ることができる
##### ■Available toast options
・duration 表示秒数　1000=1秒 
<br/>・styling スタイリングを変更することができる
  <br/>ex)背景色をオレンジにした。
<br/>・iconTheme アイコンのカラーを変えることができる　▶︎ success/error/loading icon


```Javascript
const notify = () =>
  toast('Hello World', {
    // duration
    duration: 4000,
    // Styling
    style: { backgroundColor: 'orange' },
    className: '',
    // Custom Icon
    icon: '👏',
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
    // Aria　
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  })
  ```
  ##### ■Promise
 ・ https://qiita.com/toshihirock/items/e49b66f8685a8510bd76<br>を参考に記述
 <br/>・ APIがないので疑似的に非同期処理を行うよう記述
 <br/> <一連の流れ>
 <br/>ボタンをおす▶︎非同期で処理をさせる▶︎その間は"loading"を表示▶︎非同期がうまくいったら"success"/いかなかったら"error"を表示させる
  ```Javascript
 // 4秒でGot the dataの表示がされるように記述
  function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 4000))
}

  function MyApp({ Component, pageProps }) {
    const handleClick = () =>
      toast.promise(sleep(), {
        loading: 'Loading',
        success: 'Got the data',
        error: 'Error when fetching',
     })
    return (
      <div>
        <button onClick={handleClick}>Make me a toast</button>
        <Component {...pageProps} />
        <Toaster />
      </div>
    )
 }
```
### ＜Toaster /＞ API

全体設定はこのコンポーネントで行って個別の設定は別に設定することができる<br/>
ex)app.jsでdurationを５０００と設定したが、index.jsの部分で１００００と設定すれば、表示から消えるまでの時間は5秒ではなく10秒になる。

```Javascript
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
```
      
### ＜ToasterBar /＞ API
デフォルトのtoast自体の形を変える時に使う
#### Add a dismiss button
toastを消すボタンを実装
```Javascript
import toast, { Toaster, ToastBar } from 'react-hot-toast'


//・・・

      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button onClick={() => toast.dismiss(t.id)}>X</button>
                )}
              </>
            )}
          </ToastBar>
```
