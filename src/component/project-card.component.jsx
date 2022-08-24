import './project-card.styles.scss'
import {useState} from "react";
import {Link} from "react-router-dom";
import 'animate.css';

const ProjectCard=({project})=>{
    const [isProjectDetailsShow, setIsProjectDetailsShow] = useState(false);
    const handle = () => {
        setIsProjectDetailsShow(true);
    };
    const redirect = ()=>{
        if(project.url!==null)
        window.open(project.url);
    };
    return (
        <section className="projectCard-container" onClick={redirect} onMouseOver={handle} onMouseOut={()=>setIsProjectDetailsShow(false)} >
            {isProjectDetailsShow ? (
                <div className="projectCard-detail animate__animated animate__fadeIn">
                    <span className="projectCard-name">{project.name}</span>
                    <span className="projectCard-descr">{project.description}</span>
                    Redirect
                </div>):
                <img src={project.img} className="projectCard-gif"/>
            }
        </section>
    )
};
export default ProjectCard;