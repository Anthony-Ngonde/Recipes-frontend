import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import NavBar from './components/Navbar';


const App=()=>{

    // const [message, setMessage] = useState(''); 

   
    // useEffect(() => {
    //     fetch('/recipe/hello')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setMessage(data.message); 
    //         })
    //         .catch(err => console.log(err));
    // }, []);
   
    // return (
    //     <div className="app">
    //         {message}
    //     </div>
    // )

    return(
        <div className="app">
          <NavBar/>
        </div>
    )
}


const root = createRoot(document.getElementById('root'));
root.render(<App />);
