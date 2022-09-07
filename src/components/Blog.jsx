import {TbArrowsRight} from "react-icons/tb"
export const Blog=()=>{
    return(
        <div>
            <h1 className="blog-head">INTERNATIONAL NEWS & BLOG</h1>
            <div className="blog-div">
            <div className="blog-box">
                <p className="blog-p">20 May 2022</p>
                <h3 className="blog-h3">How Can Smart Data Discovery Tools Generate Business Value?</h3>
                <p className="blog-p2">Smart data discovery tools help businesses get a competitive advantage with specific models & advanced big data analytics. Learn how here!</p>
                <div className="blog-span"><TbArrowsRight className="blog-icon"></TbArrowsRight><p className="blog-para">See Full Article</p></div>
            </div>
            <div className="blog-box">
                <p className="blog-p">18 May 2022</p>
                <h3 className="blog-h3">Modern CRM Dashboards & Reports For Your Business</h3>
                <p className="blog-p2">See here the best CRM dashboard examples & report formats created with modern customer relationship management software and tools!</p>
                <div className="blog-span"><TbArrowsRight className="blog-icon"></TbArrowsRight><p className="blog-para1">See Full Article</p></div>
            </div>
            <div className="blog-box">
                <p className="blog-p">11 May 2022</p>
                <h3 className="blog-h3">13 Essential Data Visualization Techniques, Concepts & Methods</h3>
                <p className="blog-p2">These 13 invaluable data visualization techniques, concepts, & methods will accelerate the growth and success of your business.</p>
                <div className="blog-span"><TbArrowsRight className="blog-icon"></TbArrowsRight><p className="blog-para2">See Full Article</p></div>
            </div>
            </div>
        </div>
    )
}