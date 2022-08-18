import './wave.styles.scss'
import {useEffect, useState} from "react";
import 'animate.css'
import React from "react";
import Button from "../../component/button/button.component";

const Wave = () => {
    const [index, setIndex] = useState(0);
    const summerStories = [{
        title: " La Jolla Shores",
        content: "A few minutes from Pacific Beach, La Jolla Shores is one of the most picturesque beaches in all of San" +
            "Diego. The mile-long, gently curving beach is protected from large waves, so it's a great place for wading and frolicking in the surf.",
        img: "california-san-diego-la-jolla-shores.jpg",
    },
        {
            title: "Pacific Beach",
            content: "There's a wide, smooth lifeguard-patrolled beach that goes on for miles. Most of the beach is fluffy" +
                " white sand, with only a small part covered by the waves most of the day. The beach is flat but slopes down right near the waterline.",
            img: "california-san-diego-pacific-beach.jpg",
        },
        {
            title: "Mission Bay",
            content: "Mission Bay is the bay and marina area, located between Old Town San Diego and Pacific Beach. The Playa" +
                "Pacifica is the wide strip of beach on the bay, not the ocean. It's between the old visitor's center building" +
                "(shaped like a giant shell) and San Diego Mission Bay Resort on East Mission Bay Drive. The on-the-sand resort" +
                "is a great place to stay for families, it has its own semi-private beach, as well as a little marina with boat " +
                "and water sports rentals.",
            img: "california-san-diego-playa-pacifica-on-mission-bay.jpg",
        },
        {
            title: " Swami's Beach",
            content: "Located in the town of Encinitas, just north of San Diego, this beach is one of the area's best surf breaks. " +
                "Non-surfers will love the cool vibe and watching all the surfers catch waves. It's an excellent place to watch surfing" +
                " because the breaks are a few hundred yards off the beach, and some surfers are able to ride the waves for a long time.",
            img: "california-san-diego-swamis-beach.jpg",
        },
        {
            title: "Del Mar City Beach ",
            content: "Del Mar City Beach is more than two miles long, wide and clean, with multiple lifeguard towers. " +
                "There are two parks across the street from the beach: Powerhouse Park and Seagrove Park; both are great places to picnic before or after your beach outing.",
            img: "california-san-diego-top-rated-beaches-del-mar-city-beach.jpg",
        }
    ];
    const [opacity, setOpacity] = useState([0]);
    const [titleShow, setTitleShow] = useState(false);
    useEffect(() => {
            const ticker = setInterval(
                () => changeIndex()
                , 2000
            );
            return () => {
                clearInterval(ticker);
            }
        }
        , [index]);
    const handleScroll = (e) => {
        if (!titleShow && e.target.scrollTop > 180 * 3) {
            setTitleShow(true);
            return;
        }
        if (titleShow && e.target.scrollTop <= 180 * 3)
            setTitleShow(false);
        setOpacity(e.target.scrollTop / 3);
        console.log(e.target.scrollTop / 3);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll, true);
    }, []);
    const changeIndex = () => {
        setIndex((index) => {
            if (index === 4)
                return 0;
            return index + 1;
        });
    };
    return (
        <div>
            <div className="wave-page-nav">
                <span className="material-symbols-outlined icon">
                    menu
                </span>
                <span className="material-symbols-outlined home">
                    home
            </span>
            </div>
            <div className="wave-page-container" onScroll={handleScroll}>
                <div className="wave-page-title">
                    Enjoy The Summer
                </div>
                <button className="btn colorful-animated-button10">
                    Learn More
                </button>
                <div className="panel">
                    <div className="panel-head"
                         style={{
                             backgroundImage: `url(./assets/${summerStories[index].img})`,
                         }}/>
                    <div className="panel-content" key={index}>
                        <p className="panel-title animate__animated animate__fadeIn"
                        >{summerStories[index].title}</p>
                        <p className="panel-desc animate__animated animate__fadeIn">
                            {summerStories[index].content}
                        </p>
                    </div>
                    <div className="panel-btn">
                        {/*<button onClick={() => setIndex(index + 1)}>index</button>*/}
                        <div className={index === 0 && 'chosen'} onClick={() => setIndex(0)}>

                        </div>
                        <div className={index === 1 && 'chosen'} onClick={() => setIndex(1)}>

                        </div>
                        <div className={index === 2 && 'chosen'} onClick={() => setIndex(2)}>

                        </div>
                        <div className={index === 3 && 'chosen'} onClick={() => setIndex(3)}>

                        </div>
                        <div className={index === 4 && 'chosen'} onClick={() => setIndex(4)}>

                        </div>
                    </div>
                </div>
                <img src='./assets/wave5.png' className="wave1"
                     style={{
                         opacity: (75 - opacity) + "%",
                     }}
                />
                <img src='./assets/wave7.png' className="wave2"
                     style={{
                         opacity: (140 - opacity) + "%",
                     }}
                />
                <img src='./assets/wave6.png' className="wave3"
                     style={{
                         opacity: (180 - opacity) + "%",
                     }}
                />
                <img src='./assets/wave4.png' className="wave4"
                     style={{
                         opacity: opacity + "%",
                     }}
                />

                {/*<div className="p"></div>*/}
            </div>
        </div>
    )
};

export default Wave;