import './button.styles..scss'
const Button = ({type,text='A button'}) => {
    return (
        <>
            <button className={`btn-animated colorful-animated-button${type}`}>{text}</button>
        </>
    )
};
export default Button;