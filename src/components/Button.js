import {FaArrowRight} from 'react-icons/fa';

const Button =({text})=>{
    
    return <button className="btn">
            <div>
                {/* <a href="https://picsum.photos/500/500">{text}</a> */}
                {text}
            </div>
            <div className="arrow">
                <FaArrowRight />
            </div>
        </button>;
}
export default Button;