import './project-card.styles.scss'
import {useState} from "react";
import {Link} from "react-router-dom";
import 'animate.css';

const ProjectCard=({project})=>{
    const [isProjectDetailsShow, setIsProjectDetailsShow] = useState(false);
    const handle = () => {
        setIsProjectDetailsShow(true);
    };
    return (
        <section className="projectCard-container" onMouseOver={handle} onMouseOut={()=>setIsProjectDetailsShow(false)} >
            {isProjectDetailsShow ? (
                <div className="projectCard-detail animate__animated animate__fadeIn">
                    <span className="projectCard-name">{project.name}</span>
                    <span className="projectCard-descr">{project.description}</span>
                    <Link to='/'></Link>
                </div>):
                <img src='./assets/p1.gif' className="projectCard-gif"/>
            }
        </section>
    )
};
export default ProjectCard;