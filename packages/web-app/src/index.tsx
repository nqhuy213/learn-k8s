import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import './firebase-config'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 51px;
    line-height: 62px;
    font-weight: 700;
    margin: 18px 0 10px;
    position: relative;
    padding-left: 70px;
    font-family: "Poppins",sans-serif;
  }
  p {
    margin: 15px 0 28px;
    font-size: 16px;
    line-height: 35px;
    font-family: "Open Sans",sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <GlobalStyle />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
