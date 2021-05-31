import {PropTypes} from 'prop-types';
const Item =({productName,imgLink,desc})=>{
    return <div className="item">
            <div className="item-image">
                <img src={imgLink} alt="ka"/>
            </div>
            <div className="item-name">
                <a href="https://picsum.photos/500/500">
                    {productName}
                </a>
            </div>
            <div className="item-desc">
                {desc}
            </div>
    </div>

}
export default Item;

Item.defaultProps ={
    productName:"Protective Facial Lotion SPF25",
    imgLink:"/images/a1.webp",
    desc:"Broad-spectrum protection and hydration"
}
// imgLink:"https://picsum.photos/300/320",
Item.propType ={
    productName :PropTypes.String
} 