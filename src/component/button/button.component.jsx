import './button.styles..scss'
const Button = ({type,text='A button',...otherProps}) => {
    return (
        <>
            <button className={`btn-animated colorful-animated-button${type}`} {...otherProps}>{text}</button>
        </>
    )
};
export default Button;