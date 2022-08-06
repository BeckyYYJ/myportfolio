import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Route,Routes} from 'react-router-dom'
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

function App() {
    const [isProjectDetailsShow, setIsProjectDetailsShow] = useState(false);
    const handle = () => {
        setIsProjectDetailsShow(true);
    };
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
            </Route>

        </Routes>
    );
}

export default App;
