import './hero.css';
import Article from './Article';
import Button from './Button';
import Logo from './Logo';
const Hero =()=>{

    return <section className="hero">
            <div className="hero-logo">
                <Logo />
            </div>
            <div className="hero-article">
            <Article 
                // text="s"
                type="big"
                heading="Summer skin: bright, exposed, often at risk"
                description="Our star’s UV rays don’t discriminate, especially during the hottest months. Enter sun protection that makes the skin less susceptible—when reapplied regularly, of course."
                >
                    <Button text="Discover now" />
                </Article>
            </div>
    </section>;
}
export default Hero;