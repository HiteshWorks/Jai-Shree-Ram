import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AudioPlayer from './AudioPlayer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AudioPlayer />
    <App />
  </React.StrictMode>,
)
