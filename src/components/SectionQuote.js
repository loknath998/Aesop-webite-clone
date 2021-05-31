 const SectionQuote =({quote,quoter})=>{

    return <section className="section-quote">
            <div>

                <div className="section-quote-quote">
                    {quote}
                </div>
                <div className="section-quoter">
                    {quoter}
                </div>
            </div>
    </section>
 }
 export default SectionQuote;