import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom'
import NavBar from './components/Navbar';
import HomePage from './components/Home';
import SignUpPage from './components/SignUp';
import LoginPage from './components/Login';
import CreateRecipePage from './components/CreateRecipe';

import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'


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
        <Router>
        <div className>
            <NavBar />
            <Routes>
            <Route path='/create_recipe' element={<CreateRecipePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                    <Route path='/' element={<HomePage />} />
            </Routes>
            
        </div>
        </Router>
    )
}


const root = createRoot(document.getElementById('root'));
root.render(<App />);
