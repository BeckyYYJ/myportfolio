import {useEffect, useState} from "react";
import './banner2.syles.scss'
import projectIcon from "../../assets/icons/projects.svg";
import {Link, useNavigate} from "react-router-dom";
import projects from "../../projects";
import ProjectCard from "../project-card.component";
import Button from "../button/button.component";
import Badge from "../Badge/badge.component";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Contacts} from "../contacts/contacts.component";

export const Banner = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const openLinkedIn = ()=>{

    }
    const openGithub = ()=>[

    ]
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = 'HELLO,I\'M YINGJI YAN!';
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const SKILLS1 = ["Java", "JavaScript", "React", "Redux", "HTML", "CSS",
        "C", "Python", "SQL", "Bootstrap", "Spring Boot", "MyBatis", "MATLAB", "Linux",
        "...."];
    const SKILLS2 = [
        "maven", "TensorFlow", "LoadRunner", "Git", "GCP"
    ];
    useEffect(() => {
        const period = text === fullText ? 1000 : 500 - Math.random() * 400;
        let ticker = setInterval(() => {
            tick();
        }, period);
        return () => {
            clearInterval(ticker)
        };
    }, [text]);

    const tick = () => {
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
        } else if (isDeleting && updatedText === 'H') {
            setIsDeleting(false);
        }
    };
    const goToProjects = () => {
        navigate("./projects")
    };

    return (
        <div className="shell">

            {/*<Offcanvas show={show} onHide={handleClose}>*/}
            {/*<Offcanvas.Header closeButton>*/}
            {/*<Offcanvas.Title>Offcanvas</Offcanvas.Title>*/}
            {/*</Offcanvas.Header>*/}
            {/*<Offcanvas.Body>*/}
            {/*Some text as placeholder. In real life you can have the elements you*/}
            {/*have chosen. Like, text, images, lists, etc.*/}
            {/*</Offcanvas.Body>*/}
            {/*</Offcanvas>*/}
            <div className="banner-container">
            </div>
            <div className="banner-item-container">
                <div className="banner-left">
                    <span className='tag'>Welcome To My Portfolio</span>
                    <span className='span-title'>{text}</span>
                    <span className='span-text'>
                        Hello, I graduated from USC Viterbi School of Engineering at 12/2022.
                    I am looking for a job as a Front-end Developer/Full-Stack Developer.
                    Following are some of my personal projects.
                    </span>
                </div>
                <div className="banner-right">
                    <img src='./assets/header-img.svg' className="banner-image"/>
                </div>
            </div>
            <div className="banner-item-container2">
                <div className="banner-item-container2-top">
                <span className="material-symbols-outlined">
                    info About Me
                </span>
                </div>
                <div className="banner-item-container2-info">
                    Hello.I have nothing to show yet.
                </div>
            </div>
            <div className="banner-item-container4 ">
                {/*<h3 onClick={openLinkedIn}>*/}
                    {/*LinkedIn*/}
                {/*</h3>*/}
                {/*<h4 onClick={openGithub}>*/}
                    {/*Github*/}
                {/*</h4>*/}
            </div>
            <div className="banner-item-container2">
                <div className="banner-item-container2-top">
                    <span className="material-symbols-outlined">
                        history_edu Education
                    </span>
                </div>
                <div className="banner-item-container2-info">
                    <p>University of Southern California</p>
                    <p>MS CS</p>
                    <p>Zhejiang University of Science and Technology </p>
                    <p>BS CS</p>
                </div>
            </div>
            <div className="banner-item-container3">
                <div>

                    <span className="material-symbols-outlined" >
                        south
                        Projects
                    </span>

                </div>
            </div>
            <div className="projects-preview-container" >
                <div className="projects-preview-top">
                    <img src={projectIcon} className="projectIcon"/>
                    <p className="projects-preview-title">
                        Selected Projects
                    </p>
                    <Button type="8-showMore" text="SHOW MORE" onClick={goToProjects}/>

                </div>
                <div className="projects-preview-bottom">
                    {projects.map((project) => {
                        return (<ProjectCard project={project}/>)
                    })}
                </div>
            </div>


            <div className="banner-container2">
                <img src='./assets/header-img.svg' className="banner-image"/>
            </div>
            <img src='./assets/cat.png' className="footer-image"/>
            {/*<img src='./assets/cat.png' className="footer-image"/>*/}
            <div className="skills-container"  id="skills">
                <div className="cards-container">
                    <div className='mycard'>
                        <h1>SKILLS</h1>
                    </div>
                    <div className='mycard'>
                        <div className="card-2">
                            {
                                SKILLS1.map((s, index) => <Badge key={index} text={s}/>)
                            }
                        </div>
                    </div>
                    <div className='mycard'>
                        <div className="card-2">
                            {
                                SKILLS2.map((s, index) => <Badge key={index} text={s}/>)
                            }
                        </div>
                    </div>
                    <div className='mycard'>
                        <h1>SKILLS</h1>
                    </div>
                </div>
            </div>
            <div className="projects-preview-container">
            </div>
        </div>
    )
};
export default Banner;