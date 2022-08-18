import './love.styles.scss'

const Love = ({type}) => {
    const loveBarC = [
        {color: 'red', delay: 1, height: 0},
        {color: '#ffaf17', delay: 1, height: 100},
        {color: '#fffa00', delay: 1, height: 140},
        {color: '#acff05', delay: 1, height: 180},
        {color: '#68ff9d', delay: 1, height: 220},
        {color: '#95fffc', delay: 1, height: 260},
        {color: '#fe24ff', delay: 1, height: 300},
        {color: '#f473ff', delay: 1, height: 260},
        {color: '#ff87ca', delay: 1, height: 220},
        {color: '#ff9794', delay: 1, height: 180},
        {color: 'blue', delay: 1, height: 140},
        {color: 'yellow', delay: 1, height: 100},
        {color: 'yellow', delay: 1, height: 60},
    ];
    const loveBarB = [
        {color: '#ff1600', delay: 0, height: 60},
        {color: '#ff638e', delay: 2, height: 100},
        {color: '#ff1600', delay: 3, height: 140},
        {color: '#ff89ab', delay: 4.5, height: 130},
        {color: '#ff1600', delay: 5.5, height: 100},

        {color: '#ffa0c3', delay: 6, height: 110, layoff: 20},
        {color: '#ff0038', delay: 7, height: 120, layoff: 40},
        {color: '#ffa0c3', delay: 4, height: 100, layoff: 20},

        {color: '#ff0b00', delay: 0.5, height: 140},
        {color: '#ff89ab', delay: 1, height: 100},
        {color: '#ff0051', delay: 5, height: 140},
        {color: '#ff638e', delay: 1.5, height: 100},
        {color: '#ff0b00', delay: 2.5, height: 60},
    ];
    const loveBarA = [
        {color: '#ffa0c3', delay: 0, height: 20},
        {color: '#ff94b9', delay: 0, height: 50},
        {color: '#ff8ba6', delay: 0, height: 100},
        {color: '#ff8ba6', delay: 0, height: 155},
        {color: '#ff788c', delay: 0, height: 160, layoff: 10},

        {color: '#ff5c7c', delay: 0, height: 150, layoff: 30},
        {color: '#ff4a6c', delay: 0, height: 140, layoff: 50},
        {color: '#ff4855', delay: 0, height: 150, layoff: 30},

        {color: '#ff2848', delay: 0, height: 160, layoff: 10},
        {color: '#ff3a56', delay: 0, height: 155},
        {color: '#ff2d3b', delay: 0, height: 100},
        {color: '#ff4a6c', delay: 0, height: 50},
        {color: '#ff5c7c', delay: 0, height: 20},
    ];
    const loveBar = () => {
        switch (type) {
            case 'a':
                return loveBarA;
            case 'b':
                return loveBarB;
        }
    }
    return (
        <div className="love-container">
            {
                loveBar().map((bar) => {
                        return (
                            <div className={`loveBar${type}`} style={
                                {
                                    transform: "translateY(" + bar.layoff + "px)",
                                    height: bar.height, backgroundColor: bar.color,
                                    animationDelay: bar.delay + "s",
                                }
                            }>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
};
export default Love;