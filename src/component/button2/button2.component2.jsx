import './button2.styles..scss'
const Button2 = ({type}) => {
    return (
        <>
            <button className={`btn-animated colorful-animated-button${type}`}>A button</button>
        </>
    )
};
export default Button2;