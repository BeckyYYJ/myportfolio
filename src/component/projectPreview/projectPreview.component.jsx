import './projectPreview.styles.scss'
import ProjectCard from "../project-card.component";
import Button from "../button/button.component";
import {useNavigate} from "react-router-dom";
const ProjectPreview = ({title, projects,url}) => {
    const navigat = useNavigate();
    const goto = ()=> navigat(url);
    return (
        <div className="projects-preview-container2  animate__animated animate__fadeInDown ">
            <div className="projects-preview-title">
                {title}
                {/*<Button type={1} text="Check Out" onClick={goto}/>*/}
            </div>
            <div className="projects-cards-container2">
                {projects.map((p,index) => {
                    return (<ProjectCard project={p} key={index} className={`animate__delay-${index}s animate__animated animate__fadeIn`}/>);
                })}
            </div>
        </div>
    )
};
export default ProjectPreview;