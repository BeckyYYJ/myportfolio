import './project.styles.scss'
import {Link} from "react-router-dom";
import MenuItem from "../menuItem/menuItem.component";
import Button from "../button/button.component";
import Css1 from "../../routes/css1/css1.component";
import ShowButton from "../../routes/showButton/showButton.component";
import Js1 from "../js/js1.component";
import LoadingPage from "../../routes/loadingPage/loadingPage.component";
import {useState} from "react";
import Css2 from "../../routes/css2/css2.component";

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
    const [page, setPage] = useState(1);
    const addPage = () => {
        setPage((prev) => prev + 1);
    };
    const minusPage = () => {
        setPage((prev) => prev - 1);
    };
    const content = () => {
        switch ((page)) {
            case 1:
                return <Css1 page={1}/>;
            case 2:
                return <Css1 page={2}/>;
            case 3:
                return <Css1 page={3}/>;
            case 4:
                return <Css1 page={4}/>;
        }
    };
    return (
        <div className="projects-page-container">
            <div className="menu-container">
                {
                    data.map((d) => {
                        return (
                            <MenuItem projects={d.projects} title={d.title} icon={d.icon} page={d === page}/>
                        )
                    })
                }
            </div>

            <div className="content-container">
                <div className="left-Container" >
                    <div  className="icon" onClick={minusPage}><span className="material-symbols-outlined">
chevron_left
</span></div>
                </div>
                {content()}
                <div className="right-Container">
                    <div className="icon" onClick={addPage}><span className="material-symbols-outlined">
chevron_right
</span></div>
                </div>
            </div>

        </div>
    )
};
export default Project;