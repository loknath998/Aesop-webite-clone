
const Article = ({text,heading,description,children,type})=>{

    return <div className={`article ${type==='big'?'article-big':''}`} >

        {text ? <div className="article-text">{text}</div>:""}
        <div className="article-heading">
                {heading}
        </div>
        <div className="article-desc">
                {description}
        </div>
        <div className="article-children">
            {children}
        </div>
    </div>;
}
export default Article;
Article.defaultProps ={
    heading:"How to cleanse the skin",
    description:"Both delicate and resilient, skin requires gentle, routine cleansing. To better understand cleansing and its foundational role in a healthy skin care routine, we invite you to read on."
}