import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = [
  { id: "todo-0", name: "eat", completed: true },
  { id: "todo-1", name: "sleep", completed: false },
  { id: "todo-2", name: "repeat", completed: false },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
