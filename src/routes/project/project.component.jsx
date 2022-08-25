import './project.styles.scss'
import {Link} from "react-router-dom";
import MenuItem from "../../component/menuItem/menuItem.component";
import Button from "../../component/button/button.component";
import Css1 from "../../routes/css1/css1.component";
import ShowButton from "../../routes/showButton/showButton.component";
import Js1 from "../../component/js/js1.component";
import LoadingPage from "../loadingPage/loadingPage.component";
import {useState} from "react";
import {useParams} from 'react-router-dom'
import ProjectCard from "../../component/project-card.component";

const data = [
    {
        title: "",
        icon: "menu",
        projects: []
    },
    {
        title: "CSS",
        icon: "arrow_forward_ios",
        projects: []
    },
    {
        title: "JS",
        icon: "arrow_forward_ios",
        projects: []
    },
    {
        title: "react",
        icon: "arrow_forward_ios",
        projects: []
    },
    {
        title: "others",
        icon: "arrow_forward_ios",
        projects: []
    },
];

const Project = () => {
    const {category} = useParams();
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
                    './../assets/css/p-css-1.gif'
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
                        './../assets/css/p-css-3.gif'
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
                '../assets/js/p-js-1.gif'
        },{
            name: 'Static Js Web page',
            description:
                '',
            url:
                '/universePhoto',
            github:
                '',
            img:
                './../assets/js/p-js-2.gif'
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
                './../assets/react/p-react-1.gif'
        }],
        others: [            {title:"beautiful buttons"},
            {title:"beautiful CSS animations showing loading state"},
        ],
    };
    const {css, js, react, others} = allProjects;
    const jsStart = css.length;
    const rStart = css.length + js.length;
    const oStart = css.length + js.length + react.length;
    const projects = allProjects[category];
    const end = projects.length-1;
    const [page, setPage] = useState(0);
    // const {category} = useParams();
    const addPage = () => {
        setPage((prev) => prev + 1);
    };
    const minusPage = () => {
        if (page === 0)
            alert("it's the first tab");
        else
            setPage((prev) => prev - 1);
    };
    const content = () => {
        // if (page >= oStart)
        //     return <Css1 project={oStart[page-oStart]} title="Others"/>
        // else if(page >= rStart)
        //     return <Css1 project={react[page-rStart]} title="React"/>
        // else if(page >= jsStart)
        //     return <Css1 project={js[page-jsStart]} title="JavaScript"/>
        // return <Css1 project={css[page]}/>
        if(category==="others")
            return <LoadingPage title={projects[page].title} page={page}/>;
        else
        return <Css1 project={projects[page]}/>
    };
    return (
        <div className="projects-page-container">
            <div className="menu-container">
                {
                    data.map((d,index) => {
                        return (
                            <MenuItem key={index} projects={d.projects} title={d.title} icon={d.icon} page={d === page}/>
                        )
                    })
                }
            </div>

            <div className="content-container">
                <div className="left-Container">
                    {page <= 0 ?
                        <div className="icon">
                            <span className="material-symbols-outlined">first_page</span>
                        </div> :(
                        <div className="icon" onClick={minusPage}>
                            <span className="material-symbols-outlined">chevron_left</span>
                        </div>)}
                </div>
                {content()}
                <div className="right-Container">
                    {page >= end ? <div className="icon"><span className="material-symbols-outlined">last_page
                        </span></div> :
                        <div className="icon" onClick={addPage}><span className="material-symbols-outlined">
chevron_right
</span></div>}
                </div>
            </div>

        </div>
    )
};
export default Project;