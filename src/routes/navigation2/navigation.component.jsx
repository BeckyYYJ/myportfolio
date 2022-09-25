import './navigation2.styles.scss'
import {Link, Outlet} from 'react-router-dom'
import Example from "../../component/aaa";
import Button from "../../component/button/button.component";

import React, {useEffect, useState} from "react";

const Navigation2 = () => {
    const [scrollY, setScrollY] = useState(0);
    // const u ='block';
    const scrollEvent = () => {
        setScrollY(window.scrollY);
        // if (window.scrollY > 80)
        //     setShowNext('block');
    };
    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);
        return () => window.removeEventListener('scroll', scrollEvent);
    }, []);
    return (
        <>
            <div className="navigation-container"
            >
                <div>
                    <span className="navi-name">Yingji Yan</span>
                    {/*<Link to="/projects"><Button  type="6-contacts" text="Hello" /></Link>*/}
                </div>
                <div>
                    <Example/>
                </div>
            </div>

            <Outlet/>
        </>
    )
};
export default Navigation2;