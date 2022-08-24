import {useEffect, useState} from "react";
import './banner2.syles.scss'
import projectIcon from "../../assets/icons/projects.svg";
import {Link} from "react-router-dom";
import projects from "../../projects";
import ProjectCard from "../project-card.component";

export const Banner = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = 'HELLO,I\'M YINGJI YAN!';
    const [text, setText] = useState('');

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


    return (
        <div className="shell">
            <div className="banner-container">
            </div>
            <div className="banner-item-container">
                <div className="banner-left">
                    <span className='tag'>Welcome To My Portfolio</span>
                    <span className='span-title'>{text}</span>
                    <span className='span-text'>Hello, I am currently a graduate student at USC Viterbi School of Engineering.
                    I am looking for a job as a SDE.
                    </span>
                </div>
                <div className="banner-right">
                    <img src='./assets/header-img.svg' className="banner-image"/>
                </div>
            </div>
            {/*<div className='test'>dadawd</div>*/}
            {/*<div className="banner-container2">*/}
            {/*</div>*/}
            {/*<div className="banner-item-container">*/}
            {/*<div className="banner-left">*/}
            {/*<span className='tag'>Welcome To My Portfolio</span>*/}
            {/*<span className='span-title'>{text}</span>*/}
            {/*<span className='span-text'>daohvpohroe fnlsdircv fsdnvlkserhl vsjsosv rg,*/}
            {/*daohvpohroe fnlsdircv fsdnvlkserhl vsjsosv rg</span>*/}
            {/*</div>*/}
            {/*/!*<div className="banner-right">*!/*/}
            {/*/!*<img src='./assets/cat2.png' className="banner-image"/>*!/*/}
            {/*/!*</div>*!/*/}
            {/*</div>*/}
            <div className="projects-preview-container">
                    <div className="projects-preview-top">
                        <img src={projectIcon} className="projectIcon"/>
                        <h1 className="projects-preview-title">
                            Selected Projects
                        </h1>
                        <span>I selected some apps i've built.Click the gif to redirect,
                        or <Link to='/'>SHOW MORE</Link> to see more projects.</span>
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
            <div className="skills-container">
                <div className="cards-container">
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                </div>
            </div>

            <div className="projects-preview-container">

            </div>
        </div>
    )
}
export default Banner;