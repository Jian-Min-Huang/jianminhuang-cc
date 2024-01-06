import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Footer from './Footer'

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )

ReactDOM
  .createRoot(document.getElementById('footer') as HTMLElement)
  .render(
    <React.StrictMode>
      <Footer/>
    </React.StrictMode>
  )
