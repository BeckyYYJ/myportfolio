import './loadingPage.styles.scss'
import Rockets from "../../component/loading/rockets.component";
import Love from "../../component/loading/love.component";
import ShowButton from "../showButton/showButton.component";

const LoadingPage = ({title, page}) => {

    const content = () => {
        switch (page) {
            case 0:
                return (<ShowButton/>);
            case 1:
                return (<>
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
                </>);

        }
    };

    return (
        <>
            <div>
                <h1>{title}</h1>
            </div>
            {content()}
        </>
    )
};
export default LoadingPage;