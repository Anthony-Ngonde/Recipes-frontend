import React, {useEffect, useState} from 'react'
import ReactDOM from 'react'


const App=()=>{
    
    const [message, setMessage] = useState('')
    return (
        <div className="app">
            {message}
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))