
const DetailArticle = ({type,heading,linkArray,para})=>{

    return <div className={type==="big"?`detail-article detail-article-big`: `detail-article`}>
            <div className="heading">
                {heading}
            </div>
            <div></div>
            <div className="items">
                <ul>
                {linkArray.map((link,index)=>{
                    return <li key={index}><a href={link}>{link}</a></li>
                })}
                </ul>
            </div>
            <div className="para"> 
                {para}
            </div>
    </div>
}
export default DetailArticle;
DetailArticle.defaultProps = {
    linkArray :['Contact Us','FAQs','Delivery and returns','Terms and conditions']
}