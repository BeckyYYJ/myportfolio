import './projectOverview.styles.scss'
import ProjectPreview from "../../component/projectPreview/projectPreview.component";
import ThreeDphoto from "../3Dphoto/3Dphoto.component";
import TrackVisibility from "react-on-screen";
import React from "react";

const ProjectOverview = () => {
        const allProjects = {
            css:
                [
                    {
                        name: 'Static Html/Css Web page',
                        description:
                            '',
                        url:
                            'https://yingjiyan.github.io/a3/page1.html',
                        github:
                            '',
                        img:
                            'assets/css/p-css-1.gif'
                    },
                    {
                        name: 'Static Html/Css Web page',
                        description:
                            '',
                        url:
                            '/wave',
                        github:
                            '',
                        img:
                            'assets/css/p-css-3.gif'
                    },
                    {
                        name: 'Static Html/Css Web page',
                        description:
                            'trying Parallax Scrolling Effects',
                        url:
                            '/css3',
                        github:
                            '',
                        img:
                            'assets/css/p-css-4.gif'
                    },
                    {
                        name: 'Static Html/Css Web page',
                        description:
                            'trying Parallax Scrolling Effects',
                        url:
                            '/css2',
                        github:
                            '',
                        img:
                            'assets/css/p-css-5.gif'
                    },
                ],
            js: [{
                name: 'Static Js Web page',
                description:
                    ' trying panorama web page',
                url:
                    '/360Photo',
                github:
                    '',
                img:
                    'assets/js/p-js-1.gif'
            }, {
                name: 'Static Js Web page',
                description:
                    '',
                url:
                    '/universePhoto',
                github:
                    '',
                img:
                    'assets/js/p-js-2.gif'
            }
            ],
            react: [{
                name: 'Weather Forecasts',
                description:
                    'A simple Web page shows weather forecasts in 5 days',
                url:
                    'https://fuhei-weather-forecast.netlify.app/',
                github:
                    '',
                img:
                    'assets/react/p-react-1.gif'
            }, {
                name: "Crown Clothing",
                description: "an e-commercial website where users can buy clothes",
                url: "https://fantastic-chimera-18aed6.netlify.app",
                img: "./assets/react/p-react-2.gif"
            },
                {
                    name: "Stock Search",
                    id: 2,
                    description: "an website where users can search and trade stocks.",
                    url: "https://mystocksearch.netlify.app",
                    img: "./assets/react/p-react-3.gif"
                },],
            others: [{
                name: "Android APP of Stock Search",
                id: 4,
                description: "",
                url: null,
                img: "./assets/others/android.gif"
            }],
        };

        return (
            <div className="projects-overview-container-c">
                <div className="projects-overview-container">
                    <br/> <br/> <br/>
                    <svg className="animate__animated animate__fadeIn" width="173" height="167" viewBox="0 0 173 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="projects-overview-path" d="M60 51.5L86.5 1.5L115 51.5L172 64L131.5 106.5L141.5 166L86.5 139L33 166L43 106.5L1.5 64L60 51.5Z" strokeWidth={5} stroke="black"/>
                    </svg>
                    <h6 className="info animate__animated animate__fadeInDown">
                        <h3>This page includes projects and single web page/demo (UI design) </h3>
                        <span className="material-symbols-outlined ">info</span>Click the Gif to check the certain web page.
                        {/*Or Click the CHECK OUT button to check certain category.*/}
                    </h6>
                    <TrackVisibility className="projects-overview-track1" once>
                        {({isVisible}) => isVisible && (
                    <ProjectPreview title="HTML&CSS" projects={allProjects.css} url="css"/>)}
                    </TrackVisibility>
                    <TrackVisibility  className="projects-overview-track2" once>
                        {({isVisible}) => isVisible && (
                    <ProjectPreview title="JavaScript" projects={allProjects.js} url="js"/>)}
                    </TrackVisibility>
                    <TrackVisibility  className="projects-overview-track2" once>
                        {({isVisible}) => isVisible && (
                    <ProjectPreview title="React" projects={allProjects.react} url="react"/>)}
                    </TrackVisibility>
                    <TrackVisibility  className="projects-overview-track2" once>
                        {({isVisible}) => isVisible && (
                    <ProjectPreview title="Others" projects={allProjects.others} url="others"/>)}
                    </TrackVisibility>
                    <ThreeDphoto/>

                </div>
            </div>
        )
    }
;
export default ProjectOverview;