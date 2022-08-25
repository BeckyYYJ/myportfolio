import './projectPreview.styles.scss'
import ProjectCard from "../project-card.component";
import Button from "../button/button.component";
import {useNavigate} from "react-router-dom";
const ProjectPreview = ({title, projects,url}) => {
    const navigat = useNavigate();
    const goto = ()=> navigat(url);
    return (
        <div className="projects-preview-container2">
            <div className="projects-preview-title">
                {title} <Button type={1} text="Check Out" onClick={goto}/>
            </div>
            <div className="projects-cards-container2">
                {projects.map((p) => {
                    return (<ProjectCard project={p}/>);
                })}
            </div>
        </div>
    )
};
export default ProjectPreview;