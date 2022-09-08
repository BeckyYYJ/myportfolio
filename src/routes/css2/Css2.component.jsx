import './Css2.styles.scss'

const Css2 = () => {
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
    return (
        <div className="css2-shell">
            {a.map((key) => {
                return (
                    <>
                        <img className="css2-image" src={key.img}/>
                        < div className="css2-heading">
                            <h1>{key.heading}</h1>
                        </div>
                    {key.text&&(
                        <div
                        className="css2-text">
                        <h1>{key.text}
                        </h1>
                    </div>)}

                    </>)
            })}
        </div>
    )
};

export default Css2;
