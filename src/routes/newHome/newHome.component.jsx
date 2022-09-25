import './newHome.styles.scss'
import {useEffect, useRef, useState} from "react";
import Badge from "../../component/Badge/badge.component";
import {Path} from "./svg1";
import Button from "../../component/button/button.component";
import React from "react";
import TrackVisibility from 'react-on-screen';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {Link} from "react-router-dom";

const NewHome = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showNext, setShowNext] = useState('none');
    const [cursorX, setCursorX] = useState(400);
    const [cursorY, setCursorY] = useState(400);
    const [cursorShow, setCursorShow] = useState(0);
    const [bgmove, setBgmove] = useState([0, 0]);
    // const [iconsMove, setIconsMove] = useState(-500);
    const [mountainPos, setMountainPos] = useState(0);
    // const [pathLength,setPathLength] = useState(0);
    // const u ='block';
    const [skillY, setSkillY] = useState(0);
    const scrollEvent = () => {
        if (window.scrollY < window.innerHeight)
            setMountainPos(-window.scrollY / 5);
        if (window.scrollY < window.innerHeight)
            setScrollY(window.scrollY);
        if (window.scrollY > 90)
            setShowNext('block');
        if (window.scrollY > window.innerHeight * 3)
            setSkillY(window.scrollY);
        // setIconsMove((window.scrollY - 1800) / 5);
    };
    const cursorChange = (e) => {
        setCursorY(e.clientY);
        setCursorX(e.clientX);
    };
    // console.log(path.getTotalLength());
    useEffect(() => {
        // setPathLength(path.getTotalLength());
        window.addEventListener('scroll', scrollEvent);
        return () => window.removeEventListener('scroll', scrollEvent);
    }, []);

    const changeBg = (e) => {
        const windowx = window.innerWidth;
        const windowY = window.innerHeight;
        setBgmove([e.clientX - windowx / 2, e.clientY - windowY / 2])
    };

    const goto = (url) => {
        window.open(url);
    };
    return (
        <div className="newhome-container">
            <div>
                <div className="loading"/>
                <div className="loading2"/>
                <div className="cursor"
                     style={{
                         height: cursorShow,
                         width: cursorShow,
                         left: cursorX - 10 + "px",
                         top: cursorY - 10 + "px"
                     }}
                />

                <div className="first-page"

                     style={{
                         backgroundPosition: 110 + scrollY + "px " + (110 + scrollY + "px")
                     }}>
                    <span>YINGJI</span>
                    <div className="first-page-bg"
                    />
                    <div className="mountain"
                         style={{
                             bottom: mountainPos + "px"
                         }}
                    />
                </div>

                <div className="sec-page">
                    <img
                        style={{
                            left: 1.5 * scrollY + 'px', top: -0.5 * scrollY + 'px'
                        }}
                        src="./assets/css3/bird1.png"
                        className="bird"/>
                    <img
                        style={{right: 0.5 * scrollY + 'px', top: -0.2 * scrollY + 'px'}}
                        src="./assets/css3/bird2.png"
                        className="bird"/>
                    <div className="banner"
                    >
                        <h1 className='tag' style={
                            {
                                top: 20 - scrollY,
                                opacity: 100 - scrollY / 2 + "%",
                                // transform: "translateX(" + bgmove[0] / 60 + "px) translateY(" + bgmove[1] / 80 + "px)"
                                // right:scrollY/5   style={{transform: "translateX(" + bgmove[0] / 80 + "px) translateY(" + bgmove[1] / 80 + "px)"}}
                            }
                        }>Welcome To My Portfolio</h1>
                        <h3 className='span-title' style={
                            {
                                top: 95 - scrollY / 1.5,
                                opacity: 120 - scrollY / 2 + "%",
                                // right:scrollY/5
                            }
                        }>Hello, I'm </h3>
                        <h1 className="h3-h1"
                            style={
                                {
                                    top: 150 - scrollY / 1.2,
                                    opacity: 140 - scrollY / 2 + "%",
                                    // right:scrollY/5
                                }
                            }
                        > Yingji Yan</h1>
                        <h4 className='span-text'
                            style={{bottom: -50 + scrollY / 1.5, display: showNext}}>
                            I am currently a graduate student at USC Viterbi School of Engineering.
                        </h4>
                        <h4 style={{
                            bottom: -100 + scrollY / 1.5, display: showNext
                        }} className='span-text2'>
                            I am looking for a job as a SDE/SWE.
                        </h4>
                    </div>
                </div>
            </div>
            <div className="third-page-container">
                <div className="circle" style={{top: -scrollY / 8 + 420}}/>
                <div className="circle circle2" style={{top: -scrollY / 4 + 350}}/>

                <div className="svg-container">
                    <Path
                        data="M147.5 0V289.5C166.333 287 202.2 292.6 195 335H256C263.5 335.5 279 340.8 281 358C283 375.2 281.833 448.833 281 483.5C280.5 490.667 275.4 505.8 259 509C242.6 512.2 111.5 510.333 48 509C41.5 510.667 26.4 508 18 484L21 364C20.6667 356 24.8 339 44 335H147.5L150.5 993C174.167 971.333 236.5 941 296.5 993V1198C271.5 1187 207.5 1171.6 151.5 1198C125.5 1187 59.8 1171.2 5.00001 1196V993C30.3333 970.5 94.9 940.2 150.5 999V1719L236 1721C252 1722 285.2 1730.1 290 1754.5C296 1785 300 1876.5 293 1911C287.4 1938.6 261.667 1948.17 249.5 1949.5L175 1952.5C163.333 1955 136.5 1962.2 122.5 1971C105 1982 89 1990 80.5 1988.5C72 1987 68.5 1989.5 68.5 1967.5C68.5 1949.9 54.1667 1948.17 47 1949.5C35.6667 1947.67 11.6 1935 6.00001 1899C0.400008 1863 3.66668 1797.67 6.00001 1769.5C9.50001 1753.33 25.2 1721 60 1721C94.8 1721 129.5 1721 142.5 1721"
                        id="k1"/>
                </div>

                <div className="third-page ">
                    <TrackVisibility className="project1-container" once offset={100}>
                        {({isVisible}) => isVisible && (
                            <div className="third-page-project animate__backInLeft animate__animated">
                                <div className="third-page-project-img">
                                    <div
                                        style={{
                                            top: -scrollY / 5 + 180
                                        }}
                                    />
                                    <img className="third-page-project-img1" src='./assets/bg/part1.png'/>
                                    <img className="third-page-project-img2" src='./assets/bg/part2.png'/>
                                    <img className="third-page-project-img3" src='./assets/bg/part3.png'/>
                                </div>
                                {/*<img className="third-page-project-img" src='./assets/bg/part.jpg'/>*/}
                                <div className="third-page-project-content" onMouseMove={cursorChange}
                                     onMouseEnter={() => setCursorShow('40px')}
                                     onMouseLeave={() => setCursorShow('0')}>
                                    <div className="button-group">
                                        <h1 className="third-page-project-content-title">Stock Search</h1>
                                        <div>
                                            <button className="code"
                                                    onClick={() => goto("https://github.com/BeckyYYJ/stock-search")}>
                                                <span className="material-symbols-outlined">code</span>
                                            </button>
                                            <button className="code"
                                                    onClick={() => goto("https://mystocksearch.netlify.app")}>
                                                <span className="material-symbols-outlined">web</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="third-page-project-content-tags">
                                        <Badge text="HTML"/>
                                        <Badge text="SASS"/>
                                        <Badge text="JavaScript"/>
                                        <Badge text="React"/>
                                        <Badge text="Redux"/>
                                    </div>
                                    <p>• Implemented HTML5, Sass, Bootstrap, React, and Redux. Users can search and
                                        trade.</p>
                                    <p>
                                        • Display info and create stock charts.
                                    </p>
                                    <p>
                                        • Using Responsive Design to enhance the experience of the user.Deployed by GCP.
                                    </p>
                                </div>
                            </div>
                        )}
                    </TrackVisibility>
                    <TrackVisibility className="project1-container" once offset={100}>
                        {({isVisible}) => isVisible && (

                            <div
                                className="third-page-project animate__backInRight animate__animated">
                                <div className="third-page-project-img">
                                    <div
                                        style={{
                                            top: -scrollY / 5 + 280
                                        }}
                                    />
                                    <img className="third-page-project-img1" src='./assets/bg/part21.png'/>
                                    <img className="third-page-project-img2" src='./assets/bg/part22.png'/>
                                    <img className="third-page-project-img3" src='./assets/bg/part23.png'/>
                                </div>
                                {/*<img className="third-page-project-img" src='./assets/bg/part.jpg'/>*/}
                                <div className="third-page-project-content" onMouseMove={cursorChange}
                                     onMouseEnter={() => setCursorShow('40px')}
                                     onMouseLeave={() => setCursorShow('0')}>
                                    <div className="button-group">
                                        <h1 className="third-page-project-content-title">CRWN Clothing</h1>
                                        <div>
                                            <button className="code"
                                                    onClick={() => goto("https://github.com/BeckyYYJ/crown-clothes")}>
                                                <span className="material-symbols-outlined">code</span>
                                            </button>
                                            <button className="code"
                                                    onClick={() => goto("https://fantastic-chimera-18aed6.netlify.app")}>
                                                <span className="material-symbols-outlined">web</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="third-page-project-content-tags">
                                        <Badge text="HTML"/>
                                        <Badge text="SASS"/>
                                        <Badge text="JavaScript"/>
                                        <Badge text="React"/>
                                        <Badge text="Redux"/>
                                    </div>
                                    <p>• Online shopping website</p>
                                    <p>
                                        • Implemented Firestore as a database to serve concurrent data read and
                                        write.
                                    </p>
                                    <p>
                                        • Provided 3 different ways to authenticate users and proceed with the
                                        orders.
                                    </p>
                                </div>
                            </div>

                        )}
                    </TrackVisibility>

                    <div className="project2-container">
                        <TrackVisibility className="project2-container-group" once>
                            {({isVisible}) => isVisible && (
                                <>
                                    <div className="third-page-project animate__animated animate__zoomIn"
                                         style={{
                                             // display: showProject2,

                                             // transform:"scale("+scrollY/1000+")",
                                             // top:450-scrollY/1.5
                                         }}
                                    >

                                        {/*<img className="third-page-project-img" src='./assets/bg/PS-P1.png'/>*/}
                                        <div
                                            className="third-page-project-content animate__animated animate__fadeInDown animate__delay-1s">
                                            <h1 className="third-page-project-content-title">My Old Portfolio</h1>
                                            <div className="third-page-project-content-tags">
                                                <Badge text="HTML"/>
                                                <Badge text="SASS"/>
                                                <Badge text="JavaScript"/>
                                                <Badge text="React"/>
                                            </div>
                                            <p>
                                                • My old portfolio.
                                            </p>
                                            <button className="code"
                                                    onClick={() => goto("https://github.com/BeckyYYJ/myportfolio")}>
                                                <span className="material-symbols-outlined">code</span>
                                            </button>
                                            <button className="code" onClick={() => goto("/oldPortfolio")}>
                                                <span className="material-symbols-outlined">web</span>
                                            </button>
                                        </div>
                                    </div>
                                    < div className="third-page-project animate__animated animate__zoomIn"
                                          style={{
                                              // display: showProject2,

                                              // transform:"scale("+scrollY/1000+")",
                                              // top:450-scrollY/1.50
                                          }}
                                    >

                                        {/*<img className="third-page-project-img" src='./assets/bg/PS-P1.png'/>*/}
                                        <div
                                            className="third-page-project-content  animate__animated animate__fadeInDown animate__delay-1s">
                                            <h1 className="third-page-project-content-title">The Spring boot
                                                Framework-Based Review
                                                System</h1>
                                            <div className="third-page-project-content-tags">
                                                <Badge text="Spring Boot"/>
                                                <Badge text="JS"/>
                                                <Badge text="React"/>
                                                <Badge text="MyBatis"/>
                                            </div>
                                            <p>• Full stack web application.</p>
                                            <p>
                                                • Achieved back-end functions through Spring Boot, and finished
                                                front-end pages through JavaScript, bootstrap, and React.
                                            </p>
                                            {/*<span className="material-symbols-outlined">code</span>*/}
                                            {/*<span className="material-symbols-outlined">web</span>*/}
                                        </div>
                                    </div>
                                </>)}
                        </TrackVisibility>
                    </div>
                    <TrackVisibility className="project3-container" once>
                        {({isVisible}) => isVisible && (
                            <div className="third-page-project">
                                <div className="third-page-project-img">
                                    <img className="third-page-project-img1" src='./assets/others/android.gif'/>
                                </div>
                                <div className="third-page-project-content">
                                    <div>
                                        <h1 className="third-page-project-content-title">Android APP of Stock
                                            Search</h1>
                                        <div>
                                            <h5 className="third-page-project-content-title ">Android</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                    </TrackVisibility>
                    <TrackVisibility className="project3-container" once>
                        {({isVisible}) => isVisible && (
                            <div className="third-page-project">
                                <div className="third-page-project-img">
                                    <img className="third-page-project-img1" src='./assets/js/p-js-3.gif'/>
                                </div>

                                <div className="third-page-project-content">
                                    <div>
                                        <h1 className="third-page-project-content-title">Web APP of Stock
                                            Information</h1>
                                        <div>
                                            <h5 className="third-page-project-content-title ">HTML,CSS,JS,Python,Flask</h5>
                                            <button className="code2"
                                                    onClick={() => goto("https://assignment6-341603.wl.r.appspot.com/")}>
                                                <span className="material-symbols-outlined">web</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                    </TrackVisibility>
                </div>
                {/*<img src='./assets/wave5.png' className="skills-wave"/>*/}
            </div>
            {/*<img src='./assets/wave5.png' className="skills-wave"/>*/}
            <div className="skills">
                <img className="flower3" src="../assets/flower/flower2.svg"
                     style={{transform: "rotateZ(" + scrollY / -5 + "deg)"}}/>
                <img className="flower2" src="../assets/flower/flower1.svg"
                     style={{transform: "rotateZ(" + scrollY / 5 + "deg)"}}/>
                <div className="skills-title">
                    <span className="">SKILLS</span>
                    <p style={{bottom: (skillY - window.innerHeight * 5) / 6 + "px"}}>SKILLS</p></div>

                <TrackVisibility once className="track-skills">
                    {({isVisible}) => isVisible && (
                        <div className="skills-content ">
                            {/*<img  className="flower1" src="../assets/flower/flower.svg" style={{transform:"rotateZ("+scrollY/5+"deg)"}}/>*/}

                            {/*<img  className="flower4"  src="../assets/flower/hyacinth.svg" style={{transform:"rotateZ("+scrollY/5+"deg)"}}/>*/}
                            {/*<img className="skills-bg" src="../assets/skills/bg.png"/>*/}
                            {["Html", "Css3", "Javascript", "Android", "Python", "Mysql", "Java", "Redux"].map((key) => (

                                <OverlayTrigger
                                    key={key}
                                    placement="right"
                                    overlay={
                                        <Tooltip>
                                            {key}
                                        </Tooltip>
                                    }
                                >
                                    <img className={key} src={`../assets/skills/${key}.svg`}
                                         alt="Icon by Icon Mafia"/>
                                </OverlayTrigger>)
                            )}

                            {/*<img className="css3" src="../assets/skills/css3.svg"/>*/}
                            {/*<img className="javascript" src="../assets/skills/javascript.svg"/>*/}
                            {/*<img className="android" src="../assets/skills/android.svg"/>*/}
                            {/*/!*<img className="spring" src="../assets/skills/spring.svg"/>*!/*/}
                            {/*<img className="python" src="../assets/skills/python.svg"/>*/}
                            {/*<img className="mysql" src="../assets/skills/mysql.svg"/>*/}
                            {/*<img className="java" src="../assets/skills/java.svg"/>*/}
                            {/*<img className="redux" src="../assets/skills/redux.svg" alt="Redux icon by Icons8"/>*/}
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip>
                                        React
                                    </Tooltip>
                                }
                            >
                                <img className="React" src="../logo512.png" alt="react"/>
                            </OverlayTrigger>
                        </div>)}
                </TrackVisibility>
                <div className="skills-bg">
                    <div className="skills-icons skills-icons-animation"
                        // style={{transform:"rotateZ(-8deg) translateX("+iconsMove+"px)",}}
                    >
                        <span className="material-symbols-outlined">html</span>
                        <span className="material-symbols-outlined">school</span>
                        <span className="material-symbols-outlined">css</span>
                        <span className="material-symbols-outlined">code</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">forum</span>
                        <span className="material-symbols-outlined">android</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">html</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">css</span>
                        <span className="material-symbols-outlined">code</span>
                        <span className="material-symbols-outlined">school</span>
                        <span className="material-symbols-outlined">forum</span>
                        <span className="material-symbols-outlined">android</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">html</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">css</span>
                        <span className="material-symbols-outlined">code</span>
                        <span className="material-symbols-outlined">school</span>
                        <span className="material-symbols-outlined">forum</span>
                        {/*<span className="material-symbols-outlined">android</span>*/}
                        {/*<span className="material-symbols-outlined">javascript</span>*/}
                    </div>
                    <div className="skills-icons skills-icons-animation2"
                        // style={{transform:"rotateZ(-8deg) translateX(-"+iconsMove+"px)",}}
                    >
                        <span className="material-symbols-outlined">html</span>
                        <span className="material-symbols-outlined">school</span>
                        <span className="material-symbols-outlined">css</span>
                        <span className="material-symbols-outlined">code</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">forum</span>
                        <span className="material-symbols-outlined">android</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">html</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">css</span>
                        <span className="material-symbols-outlined">code</span>
                        <span className="material-symbols-outlined">school</span>
                        <span className="material-symbols-outlined">forum</span>
                        <span className="material-symbols-outlined">android</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">html</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">css</span>
                        <span className="material-symbols-outlined">code</span>
                        <span className="material-symbols-outlined">school</span>
                        <span className="material-symbols-outlined">forum</span>
                        {/*<span className="material-symbols-outlined">android</span>*/}
                        {/*<span className="material-symbols-outlined">javascript</span>*/}
                    </div>
                    <div className="skills-icons skills-icons-animation"
                        // style={{transform:"rotateZ(-8deg) translateX("+iconsMove+"px)",}}
                    >
                        <span className="material-symbols-outlined">html</span>
                        <span className="material-symbols-outlined">school</span>
                        <span className="material-symbols-outlined">css</span>
                        <span className="material-symbols-outlined">code</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">forum</span>
                        <span className="material-symbols-outlined">android</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">html</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">css</span>
                        <span className="material-symbols-outlined">code</span>
                        <span className="material-symbols-outlined">school</span>
                        <span className="material-symbols-outlined">forum</span>
                        <span className="material-symbols-outlined">android</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">html</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">css</span>
                        <span className="material-symbols-outlined">code</span>
                        <span className="material-symbols-outlined">school</span>
                        <span className="material-symbols-outlined">forum</span>
                        {/*<span className="material-symbols-outlined">android</span>*/}
                        {/*<span className="material-symbols-outlined">javascript</span>*/}
                    </div>
                    <div className="skills-icons skills-icons-animation2"
                        // style={{transform:"rotateZ(-8deg) translateX(-"+iconsMove+"px)",}}
                    >
                        <span className="material-symbols-outlined">html</span>
                        <span className="material-symbols-outlined">school</span>
                        <span className="material-symbols-outlined">css</span>
                        <span className="material-symbols-outlined">code</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">forum</span>
                        <span className="material-symbols-outlined">android</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">html</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">css</span>
                        <span className="material-symbols-outlined">code</span>
                        <span className="material-symbols-outlined">school</span>
                        <span className="material-symbols-outlined">forum</span>
                        <span className="material-symbols-outlined">android</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">html</span>
                        <span className="material-symbols-outlined">javascript</span>
                        <span className="material-symbols-outlined">css</span>
                        <span className="material-symbols-outlined">code</span>
                        <span className="material-symbols-outlined">school</span>
                        <span className="material-symbols-outlined">forum</span>
                        {/*<span className="material-symbols-outlined">android</span>*/}
                        {/*<span className="material-symbols-outlined">javascript</span>*/}
                    </div>

                </div>
            </div>

            <div className="new-home-contacts" onMouseMove={changeBg}>
                <TrackVisibility once className="new-home-contacts-img">
                    {({isVisible}) => isVisible && (
                        <>
                            <img src="./bgg.png" className="bgg animate__animated animate__fadeInDown"/>
                            <div className="animate__animated animate__fadeIn animate__delay-1s">
                                <img src="./girl.png"
                                     className="girl"/>
                                <div className="eye-container " style={{
                                    transform: "translateX(" + bgmove[0] / 60 + "px) translateY(" + bgmove[1] / 80 + "px)"
                                }}>

                                    <div className="eye"/>
                                    <div className="eye"/>

                                </div>
                                <div className='mouth' style={{
                                    //clip-path: circle(50% at 49% 0);
                                    clipPath: `circle(${Math.abs(bgmove[0] / 10)}% at 45% 10%)`,
                                    transform: "translateX(" + bgmove[0] / 150 + "px) translateY(" + bgmove[1] / 200 + "px)"
                                }}/>
                            </div>
                            <Link to="/projects">
                                <button className="exmore animate__animated animate__zoomIn animate__delay-2s">Explore
                                    More
                                </button>
                            </Link> <h1 className="animate__animated animate__zoomIn">Thank you for viewing</h1></>

                    )}
                </TrackVisibility>
            </div>
        </div>


    )
};
export default NewHome;