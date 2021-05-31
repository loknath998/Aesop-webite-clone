import Article from "./Article"
import Button from "./Button"

const Section2 = ({imgPath,articleText,articleHeading,articleDesc,btnText,type})=>{

    if(type==="left")
    return <section className="section2">
    <div className="section-article article-left">
        <Article type="big" text={articleText} 
                            heading={articleHeading}
                            description={articleDesc}>
            <Button text={btnText} />
        </Article>
    </div>
    <div className="section-image">
        <img src={imgPath} alt="asd"/>
    </div>
</section>

    return <section className="section2">
            <div className="section-image">
                <img src={imgPath} alt="asd"/>
            </div>
            <div className="section-article article-right">
                <Article type="big" text={articleText} 
                                    heading={articleHeading}
                                    description={articleDesc}>
                    <Button text={btnText} />
                </Article>
            </div>
    </section>
}
export default Section2;