import './navigation.styles.scss'
import {Outlet} from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <div className="navigation-container">
                <div>
                    <span className="navi-name">Yingji Yan</span>
                    <span className="navi-projects">Projects</span>
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