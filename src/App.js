import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Project from "./routes/project/project.component";
import Js1 from "./component/js/js1.component";
import Js2 from "./component/js2/js2.component";
import ThreeDphoto from "./routes/3Dphoto/3Dphoto.component";
import Wave from "./routes/wave/wave.component";
import ShowButton from "./routes/showButton/showButton.component";
import ProjectOverview from "./routes/projectOverview/projectOverview.component";
import LoadingPage from "./routes/loadingPage/loadingPage.component";
import Test from "./routes/css1/test";
import Css2 from "./routes/css2/Css2.component";
import Css3 from "./routes/css3/Css3.component";
import Navigation2 from "./routes/navigation2/navigation.component";
import Banner from "./component/banner/banner.component";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigation2/>}>
                <Route index element={<Home/>}/>
                <Route path='/projects' element={<ProjectOverview/>}/>
                <Route path='projects/:category' element={<Project/>}/>
                {/*<Route path='projects/:category' element={<Test project="./assets/css/p-css-1"/>}/>*/}
                <Route path='projects/loading' element={<LoadingPage/>}/>
                <Route path='projects/button' element={<ShowButton/>}/>
            </Route>
            <Route path='/oldPortfolio' element={<Navigation/>}>
                <Route index element={<Banner/>}/>
            </Route>
            <Route path='/360photo' element={<Js1/>}/>
            <Route path='/universePhoto' element={<Js2/>}/>
            <Route path='/3d' element={<ThreeDphoto/>}/>
            <Route path='/wave' element={<Wave/>}/>
            <Route path='/css2' element={<Css2/>}/>
            <Route path='/css3' element={<Css3/>}/>
            {/*<Route path='/weather' element={<Weather/>}/>*/}
        </Routes>
    );
}

export default App;
