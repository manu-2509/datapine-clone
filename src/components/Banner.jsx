import "./style.css"
export const Banner=()=>{
    return(
        <div className="banner-main">
            <img src="https://www.datapine.com/images/datapine-index-header.jpg" alt="" />
            <div className="banner-content">
                <p className="banner-head">ARE YOU READY TO UNLOCK THE FULL POTENTIAL OF YOUR DATA?</p>
                <p className="banner-para">Interactive BI dashboards give you and your teams secure access to all relevant company data and enable you to make data-driven decisions at any place, and any time.</p>
                <div>
                    <button className="banner-btn green">START MY FREE TRIAL</button>
                    <button className="banner-btn grey">SHOW USE CASES</button>
                </div>
            </div>
        </div>
    )
}