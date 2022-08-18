import './home.styles.scss'
import projects from '../../projects'
import ProjectCard from "../../component/project-card.component";
import projectIcon from '../../assets/icons/projects.svg'
import {Link} from "react-router-dom";
import Banner from "../../component/banner/banner.component";
const Home = ()=>{
    return (
        <div>
            {/*<div className="bg"></div>*/}
            <Banner/>
        </div>
    )
};
export default Home;