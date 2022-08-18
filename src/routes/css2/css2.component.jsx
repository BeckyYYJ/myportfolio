import './css2.styles.scss'
import Rockets from "../../component/loading/rockets.component";
import Love from "../../component/loading/love.component";
import Css2Item from "../../component/css2Item/css2Item.component";

const Css2 = () => {
    return (
        <>
            <div className="loadingPageItemContainer">
                <Css2Item/>
            </div>
            <div className="loadingPageItemContainer">
                <Css2Item/>
            </div>
            <div className="loadingPageItemContainer">
                <Css2Item/>
            </div>
            <div className="loadingPageItemContainer">
                {/*<Rockets/>*/}
            </div>
            <div className="loadingPageItemContainer">
                {/*<Rockets/>*/}
            </div>
        </>
    )
};

export default Css2;
