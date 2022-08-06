import './home.styles.scss'
import projects from '../../projects'
import ProjectCard from "../../component/project-card.component";
import projectIcon from '../../assets/icons/projects.svg'
import {Link} from "react-router-dom";
const Home = ()=>{
    return (
        <div>
            <div className="projects-preview">
                <div className="projects-preview-top">
                    <img src={projectIcon} className="projectIcon"/>
                    <h1 className="projects-preview-title">
                        Selected Projects
                    </h1>
                    <span>I selected some apps i've built.Click the gif to redirect,
                        or <Link to='/'>SHOW MORE</Link> to see more projects.</span>
                </div>
                <div className="projects-preview-bottom">
                {projects.map((project)=>{
                    return (<ProjectCard project={project}/>)
                })}
                </div>
            </div>
        </div>
    )
};
export default Home;