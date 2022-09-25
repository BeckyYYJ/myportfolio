import {Component} from "react";

export class Path extends Component {
    constructor(props) {
        super(props);
        this.refCallback = this.refCallback.bind(this);

    }

    refCallback(element) {
        var len = element.getTotalLength();
        // console.log("Element: ", element.getTotalLength());
        element.style.strokeDasharray = len +" "+len;
        element.style.strokeDashoffset = len;
        window.addEventListener('scroll',()=>{
            var a = len - (window.scrollY)*(window.scrollY)/7600;
            console.log(a);
            // var scollPercentage = window.scrollY/1.5;
            // var drawLen = len * scollPercentage;
            element.style.strokeDashoffset = a;
        })
    }
    componentDidMount()
    {
        // window.addEventListener('scroll',()=>{
        //     var scollPercentage = element.scro
        // })
    }
    componentWillUnmount(){
        // window.removeEventListener('scroll2')
    }
    render() {
        const { data, id } = this.props;
        return (

            <svg  viewBox="0 0 31 1030"  preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  ref={ this.refCallback } d="M16 0.5V25H29V44.5H15.5M2.5 22H2V44.5H15.5M2.5 22H11L14.5 25V23.5L12 21H4L2.5 22ZM15.5 44.5L16 181.5L17.5 182H16V183L19.5 183.5L16 184V185L9 185.5L16 186V228.708L17.5 229L12.5 229.5L16 230V235L25 236.5L16 237V307.693C17 307.962 18.9 308.5 18.5 308.5C18.1 308.5 12 308.833 9 309L16 309.5V312.5L18.5 313.5H16V773.5L30 781V796.5L16 803L0.5 796.5V781C5.5 778.333 15.4 773.1 15 773.5C14.6 773.9 5.83333 778.667 1.5 781L15.5 787.5V1005H30.5V1022.5H15.5L8.5 1028V1023.5L8 1023H1.5V1005M1.5 1005H14V1003.5H3L1.5 1005Z" stroke="#daff7f"/>
                    {/*<svg  viewBox="0 0 284 4280" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*<path ref={ this.refCallback } d="M142 5H199.5V152.5H269.5L150 247.5L24 152.5H121V424C121.833 420.333 128.8 413.2 150 414C176.5 415 181.5 423 181.5 454.5H234C238.167 454.667 248.2 459.4 255 477V590C253.667 596.667 247.6 611 234 615H59.5L39 596V477C40.1667 469.5 45.9 454.5 59.5 454.5C73.1 454.5 125.5 454.5 150 454.5V1132.5C169.167 1140.67 196.6 1159.8 153 1171C98.5 1185 100.5 1200 150 1217.5C189.6 1231.5 168.5 1247.67 153 1254L143 3167.5C162 3145 215.5 3113.5 277.5 3167.5V3356.5C249.833 3346.5 184.1 3333 142.5 3359C120.333 3347.33 61.8 3331 5 3359V3167.5C12.3333 3158.33 36.6 3139.9 75 3139.5C113.4 3139.1 135 3164.67 141 3177.5V3708.5V4029.5M141" stroke="#fdfdfd" strokeWidth="6"/>*/}
                    {/*</svg>*/}
             </svg>


        );
    }

}


