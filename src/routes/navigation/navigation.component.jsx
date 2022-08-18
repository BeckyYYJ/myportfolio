import './navigation.styles.scss'
import {Link, Outlet} from 'react-router-dom'
import {useEffect, useState} from "react";

const Navigation = () => {

    return (
        <>
            <div className="navigation-container">
                <div>
                    <span className="navi-name">Yingji Yan</span>
                    <Link to="/projects"><span className="navi-projects">Projects</span></Link>
                    <span className="nave-skills">Skills</span>
                </div>
                <div>
                <span className="Contacts">
                contacts
                </span>
                </div>
            </div>
            <Outlet/>
        </>
    )
};
export default Navigation;