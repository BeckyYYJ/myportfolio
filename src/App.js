import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Route,Routes} from 'react-router-dom'
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Project from "./component/project/project.component";
import Js1 from "./component/js/js1.component";
import Js2 from "./component/js2/js2.component";
import ThreeDphoto from "./routes/3Dphoto/3Dphoto.component";
import Wave from "./routes/wave/wave.component";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='/projects' element={<Project/>}/>
            </Route>
            <Route path='/360photo' element={<Js1/>}/>
            <Route path='/universePhoto' element={<Js2/>}/>
            <Route path='/3d' element={<ThreeDphoto/>}/>
            <Route path='/wave' element={<Wave/>}/>
        </Routes>
    );
}

export default App;
