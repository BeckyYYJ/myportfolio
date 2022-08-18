import './cube2.styles.scss'
const Cube2 = ({left})=>{
    return (
        <div className="c" style={
            {left:left+"px",
                fontSize:10+"px"}
        }>
            <div className="cube2 front2">

            </div>
            <div className="cube2 back2">

            </div>
            <div className="cube2 left2">

            </div>
            <div className="cube2 right2">
            </div>
            <div className="cube2 up2">

            </div>
            <div className="cube2 down2">

            </div>
        </div>
    )
};
export default Cube2;