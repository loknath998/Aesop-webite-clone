import DetailArticle from './DetailArticle';

const Footer =()=>{

    return <section className="footer">
            <div className="details-div">

                <div className="big-details-div">
                    <DetailArticle type="big" heading="Email" linkArray={[]} para="Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy."/>
                    <DetailArticle type="big" heading="Sustainability" linkArray={[]} para="All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more"/>

                </div>
                <div className="small-details-div">

                    <DetailArticle heading="Orders and support"/>
                    <DetailArticle heading="Loaction Prefrence" linkArray={['Live assistance','Corporate gifts','Facial appointments']}/>
                    <DetailArticle heading="Services" linkArray={['Shipping:Hong Kong (S.A.R)','Language:English']} />
                    <DetailArticle heading="About" linkArray={['Our story','Foundation','Careers','Privacy policy','Accessibility']} />
                    <DetailArticle heading="Social Media" linkArray={ ['Instagram' ,'Twitter ','LinkedIn', 'WeChat','Weibo' ]}/>
                </div>
            </div>
                <div className="footer-logo">
                © Aesop
                </div>
    </section>;

}
export default Footer;