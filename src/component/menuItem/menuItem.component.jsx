import './menuItem.styles.scss'
import {Link} from "react-router-dom";
import {useState} from "react";

const MenuItem = ({projects, title, icon}) => {
    const [show, setShow] = useState(false);
    return (
        <div className="menuItem-container">
            {icon == "menu" ? (
                <div className="menuItem-title2">
                <span className="material-symbols-outlined">
                      {icon}
            </span>
                </div>
            ) : (
                <div className="menuItem-title" onClick={() => {
                    setShow(!show);
                }}>
                    <div>
                  <span className="material-symbols-outlined">
                      {show ? "expand_more" : "chevron_right"}
            </span>
                        <span>
                {title}            </span>
                    </div>


                </div>)}
            {show && (<ul className="ul">
                    <li className="li">
                        1
                    </li>
                    <li className="li">
                        2
                    </li>
                    <li className="li">
                        2
                    </li>
                </ul>
            )
            }
        </div>
    )
};
export default MenuItem;