import './rockets.styles.scss'

const Rockets = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12];
    const light = () => {

    };
    return (
        <div className="rocketsContainer">
            <img src='./assets/rocket.png' className="rocket"/>
            {
                arr.map((i) => {
                    return <div className="light" key={i}
                                style={{
                                    height: 5+Math.random() * 30 + '%',
                                    left: Math.ceil(Math.random() * 99) + '%',
                                    animationDuration: 1+Math.random()*4+'s',
                                }}
                    />
                })
            }
        </div>
    )
};
export default Rockets;