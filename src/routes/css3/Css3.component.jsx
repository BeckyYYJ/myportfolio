import './Css3.styles.scss'
import {useEffect, useState} from "react";

const Css3 = () => {
    const [scrollY,setScrollY]= useState(0);
    const a = [
        {
            img: './assets/css2-1-img.jpg',
            heading: 'When you are confused',
            text: 'Set goals in your mind'
        },
        {
            img: './assets/css2-2-img.jpg',
            heading: 'When you\'re down',
            text: 'Try to wake up the beast in your heart'
        },
        {
            img: './assets/css2-3-img.jpg',
            heading: 'When people leaves you',
            text: 'It\'s time to restart'
        },
        {
            img: './assets/css2-4-img.jpg',
            heading: 'Come on,stranger.',
        }
    ];
    const scrollEvent = ()=>{
        setScrollY(window.scrollY);
    };
    useEffect(()=>{
        window.addEventListener('scroll',scrollEvent);
        return ()=>window.removeEventListener('scroll',scrollEvent);
    },[]);
    return (
        <div className="Css3-shell">
            <header id="header">
                <a href="#" className="logo">Jungle</a>
                <ul>
                    <li><a href="#" style={{backgroundColor:"#094b65", color:" white"}}>Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Destination</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </header>
            <section className="css3-section">
                <h2 id="text"
                    style={{top:50+scrollY*-0.2+'%'}}><span>It's time for a new </span><br/>Adventure</h2>
                <img style={{left:1.1*scrollY+'px',top:-1.5*scrollY+'px'}} src="./assets/css3/bird1.png" id="bird1"/>
                <img style={{right:1.2*scrollY+'px',top:-1.5*scrollY+'px'}} src="./assets/css3/bird2.png" id="bird2"/>
                <a style={{marginTop:1.5*scrollY+'px',opacity:1-scrollY/200}} id="btn">Explore</a>
                <img style={{left:-10+'px',top:2*scrollY+'px'}} src="./assets/css3/forest3.png"/>
                <img style={{top:0.8*scrollY+'px'}} src="./assets/css3/forest2.png"/>
                <img src="./assets/css3/forest1.png"/>
                <img style={{bottom:0.15*scrollY+'px'}} src="./assets/css3/rocks.png" id="rocks"/>
                <img style={{bottom:0.15*scrollY+'px'}} src="./assets/css3/water.png" id="water"/>
            </section>
            <div className="sec">
                <h2>Parallax Scrolling Effects</h2>
                <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Maecenas eros nunc, fermentum a massa non,
                commodo faucibus felis. Fusce aliquet congue nisi, element
                um efficitur purus tincidunt ac. Etiam varius lorem nec cond
                imentum efficitur. Duis id pellentesque eros. Mauris purus arcu,
                consequat aliquet varius eu, varius in ex. Pellentesque sit ame
                t orci libero. Morbi hendrerit sodales justo quis tempus. In vel justo ac ex sodales viverra in
                semper urna. Phasellus lacinia at leo eget accumsan. Praesent lacus nulla, laoreet ut pellentesque
                a, accumsan at nunc. Nullam in quam dignissim, pretium quam a, lacinia elit. Nulla facilisi.
                Praesent bibendum arcu a ex maximus rhoncus.
            </p>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Maecenas eros nunc, fermentum a massa non,
                    commodo faucibus felis. Fusce aliquet congue nisi, element
                    um efficitur purus tincidunt ac. Etiam varius lorem nec cond
                    imentum efficitur. Duis id pellentesque eros. Mauris purus arcu,
                    consequat aliquet varius eu, varius in ex. Pellentesque sit ame
                    t orci libero. Morbi hendrerit sodales justo quis tempus. In vel justo ac ex sodales viverra in
                    semper urna. Phasellus lacinia at leo eget accumsan. Praesent lacus nulla, laoreet ut pellentesque
                    a, accumsan at nunc. Nullam in quam dignissim, pretium quam a, lacinia elit. Nulla facilisi.
                    Praesent bibendum arcu a ex maximus rhoncus.
                </p>
            </div>
        </div>
    )
};

export default Css3;
