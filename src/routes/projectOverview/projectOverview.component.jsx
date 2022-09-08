import './projectOverview.styles.scss'
import ProjectPreview from "../../component/projectPreview/projectPreview.component";
import ThreeDphoto from "../3Dphoto/3Dphoto.component";

const ProjectOverview = () => {
    const allProjects = {
            css:
                [{
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
                            '',
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
                            '',
                        url:
                            '/css2',
                        github:
                            '',
                        img:
                            'assets/css/p-css-5.gif'
                    },
                ],
            js: [ {
                name: 'Static Js Web page',
                description:
                    '',
                url:
                    '/360Photo',
                github:
                    '',
                img:
                    'assets/js/p-js-1.gif'
            },{
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
                    name:"Crown Clothing",
                    description:"an e-commercial website where users can buy clothes",
                    url:"https://fantastic-chimera-18aed6.netlify.app",
                    img:"./assets/react/p-react-2.gif"
                },
                {
                    name:"Stock Search",
                    id:2,
                    description:"an website where users can search and trade stocks.",
                    url:"https://mystocksearch.netlify.app",
                    img:"./assets/react/p-react-3.gif"
                },],
            others: [ {
                name:"Android APP of Stock Search",
                id:4,
                description:"",
                url: null,
                img:"./assets/others/android.gif"
            }],
        };

    return (
        <div className="projects-overview-container-c">
        <div className="projects-overview-container">
            <br/>            <br/>            <br/>
            <h6 className="info">
                <span className="material-symbols-outlined">info</span>Click the Gif to check the certain web page.
                Or Click the CHECK OUT button to check certain category.
            </h6>
            <ProjectPreview title="HTML&CSS" projects={allProjects.css} url="css"/>
            <ProjectPreview title="JavaScript" projects={allProjects.js} url="js"/>
            <ProjectPreview title="React" projects={allProjects.react} url="react"/>
            <ProjectPreview title="Others" projects={allProjects.others} url="others"/>
            <ThreeDphoto/>

        </div>
        </div>
    )
}
    ;
    export default ProjectOverview;