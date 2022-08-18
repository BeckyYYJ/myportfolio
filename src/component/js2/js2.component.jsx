import './js2.styles.scss'
import {useEffect, useState} from "react";

const Js2 = () => {
    const ox = 0;
    const oy = 100;
    const [pos, setPos] = useState([ox, oy]);
    const [cat3,setCat3] = useState([0,-200]);
    const [progressBarPos, setProgressBarPos] = useState([ox, oy]);
    useEffect(() => {

    });
    const changePos = (e) => {
        console.log(e.clientX, e.clientY);
        const cat3y= (oy+e.clientY>-30)?-30:oy+e.clientY;
        // setCat3([0,cat3y]);
        setProgressBarPos([e.clientX/1.45]);
        setPos([ox + (-e.clientX)/15, oy + (-e.clientY) /20]);
    };
    return (
        <div className="js2-container" onMouseMove={changePos}>
            <div className="bg"
                 style={
                {
                    "backgroundPositionX": pos[0], "backgroundPositionY": pos[1]
                }
            }
            >
            </div>
            <img src='./assets/header-img.svg' className="img1"/>

            <img src='./assets/s1.png' className="img2"/>
            <img src='./assets/s2.png' className="img3"/>
            <img src='./assets/rocket.png' className="img4"/>

            <img src='./assets/star.png' className="img-star1 rotate"/>
            <img src='./assets/star.png' className="img-star2 rotate "/>
            <img src='./assets/star.png' className="img-star3  rotate"/>
            <img src='./assets/star.png' className="img-star4 rotate"/>
            <img src='./assets/star.png' className="img-star5 rotate"/>
            <img src='./assets/star.png' className="img-star6 rotate"/>
            {/*<img className="love" src="assets/cat3.png"*/}
            {/*style={*/}
            {/*{"bottom":cat3[1]}*/}
            {/*}*/}
        </div>
    )
};
export default Js2;