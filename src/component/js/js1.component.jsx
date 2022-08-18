import './js1.styles.scss';
import {useEffect, useState} from "react";

const Js1 = () => {
    const ox = 0;
    const oy = -600;
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
        setPos([ox + 2 * (-e.clientX), oy + (-e.clientY) / 1.5]);
    };
    return (
        <div className="js1-container" onMouseMove={changePos}>
            <div className="img" style={
                {
                    "backgroundPositionX": pos[0], "backgroundPositionY": pos[1]
                }
            }>
            </div>
            {/*<img className="love" src="assets/cat3.png"*/}
            {/*style={*/}
                {/*{"bottom":cat3[1]}*/}
            {/*}*/}
            {/*/>*/}
            <div className="title">
                <div className="c">RETURN</div>
                <div className="a">Click Me</div>
                <div className="b">Click Me</div>

            </div>
            <div className="bar"
        >
            <div className="bar-ball" style={
                {
                    left: progressBarPos[0]
                }
            }>

            </div>
        </div>

        </div>
    )
};
export default Js1;