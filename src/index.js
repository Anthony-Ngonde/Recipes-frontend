import React, {useEffect, useState} from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'


const App=()=>{


    useEffect(
        ()=>{
            fetch('/recipe/hello')
            .then(response=>response.json())
            .then(data=>console.log(data))
        },[]
    )
    const [message, setMessage] = useState('')
    return (
        <div className="app">
            {message}
        </div>
    )
}


const root = createRoot(document.getElementById('root'));
root.render(<App />);
