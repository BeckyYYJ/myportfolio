import './css1.styles.scss'

const Css1 = ({project}) => {
    const {
        name,
        description,
        url,
        github,
        img,
    } = project;

    return (
        <>
            <div className="content-div">
                <div className="content-img">
                    <img src={project.img} className="projectCard-gif"/>
                </div>
            </div>
            <div className="content-div">
                <div className="content-details">
                    <div className="content-detail">
                        <span>NAME:</span>
                        <span>{name}</span>
                    </div>
                    <div className="content-detail">
                        <span>DESCRIPTION:</span>
                        <span>{description}</span>
                    </div>
                    <div className="content-detail">
                        <span>URL:</span>
                        <span>{url}</span>
                    </div>
                    <div className="content-detail">
                        <span>GITHUB:</span>
                        <span>{github}</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Css1;
