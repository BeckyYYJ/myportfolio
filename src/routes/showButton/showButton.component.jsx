import './showButton.styles.scss'
import Button from "../../component/button/button.component";

const buttonList1 = [
    {type: 1, color: 'red'}, {type: 2, color: 'red'}, {type: 3, color: 'red'},
    {type: 4, color: 'red'}, {type: 5, color: 'red'}, {type: 6, color: 'red'},
    {type: 7, color: 'red'}, {type: 8, color: 'red'}, {type: 9, color: 'red'}
];
const ShowButton = () => {
    return (
        <div className="showButton-container">
            {
                buttonList1.map((btn)=>{
                    return (<Button type={btn.type} key={btn.type}/>)
                })
            }
        </div>
    )
};
export default ShowButton;
