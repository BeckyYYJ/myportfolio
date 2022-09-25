import './3Dphoto.styles.scss'
import {useState} from "react";
import Cube from "../../component/cube/cube.component";
import Cube2 from "../../component/cube/cube2.component";
import Cube3 from "../../component/cube/cube3.component";

const ThreeDphoto = () => {
    const [pos, setPos] = useState([45, -38]);
    const [upPos, setUpPos] = useState([45, -38]);
    const [click, setClick] = useState(false);
    const [downPos, setDownPos] = useState([0, 0]);
    const change = (e) => {
        if (click) {
            setPos([upPos[0] + 180 * (e.pageX - downPos[0]) / window.innerWidth, upPos[1] + 180 * (-e.clientY + downPos[1]) / window.innerHeight]);
        }
    };
    const mouseDown = (e) => {
        setClick(true);
        setDownPos([e.clientX, e.clientY]);
    };
    const mouseUp = (e) => {
        setClick(false);
        setUpPos([pos[0], pos[1]]);
    };
    return (
        <div className="ThreeDphoto-container" onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={change}>
            <div className="cube-container"
                 style={
                     {
                         transform: `rotateX(${pos[1]}deg) rotateY(${pos[0]}deg)`
                     }
                 }
            >
                <Cube/>
            </div>
                <div className="cube-container2">
                    <Cube2 left="0"/>                    <Cube2 left="50"/>                    <Cube2 left="100"/>
                    <Cube2 left="150"/>                    <Cube2 left="200"/>                    <Cube2 left="250"/>
                    <Cube2 left="300"/>                    <Cube2 left="350"/>                    <Cube2 left="400"/>
                </div>
            <div className="cube-container3">
                <Cube3 left="0"   icon="star_half"/> <Cube3 left="40"  icon="shopping_cart_checkout"/> <Cube3 left="80" icon="download"/>
                <Cube3 left="120"  icon="ios_share"/>       <Cube3 left="160"  icon="keyboard_voice"/>    <Cube3 left="200"  icon="settings"/>
                <Cube3 left="240" icon="favorite"/>         <Cube3 left="280" icon="home"/>
                <div className="shadow">
                </div>
            </div>
        </div>)
};
export default ThreeDphoto;