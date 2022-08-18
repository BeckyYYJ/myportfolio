import './loadingPage.styles.scss'
import Rockets from "../../component/loading/rockets.component";
import Love from "../../component/loading/love.component";

const LoadingPage = () => {
    return (
        <>
            <div className="loadingPageItemContainer">
                <Rockets/>
            </div>
            <div className="loadingPageItemContainer">
                <Love type="a"/>
            </div>
            <div className="loadingPageItemContainer">
                <Love type="b"/>
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
export default LoadingPage;