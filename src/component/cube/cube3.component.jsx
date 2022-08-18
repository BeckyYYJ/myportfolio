import './cube3.styles.scss'

const Cube3 = ({left,icon}) => {
    return (
        <div className="c2" style={
            {
                left: left + "px",
                fontSize: 10 + "px"
            }
        }>
            <div className="cube3 front3">

            </div>
            <div className="cube3 back3">

            </div>
            <div className="cube3 left3">

            </div>
            <div className="cube3 right3">
            </div>
            <div className="cube3 up3">
<span className="material-symbols-outlined cube3-icon">
    {icon}
</span>
            </div>
            <div className="cube3 down3">

            </div>
        </div>
    )
};
export default Cube3;