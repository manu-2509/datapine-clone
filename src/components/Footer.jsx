import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {ImXing2} from "react-icons/im"
import {RiLinkedinFill} from "react-icons/ri"
import {BsPinterest} from "react-icons/bs"
export const Footer=()=>{
    return(
        <div className="footer-main">
            <div className="footer-first">
            <div>
                <h2 className="footer-head">BUSINESS INTELLIGENCE</h2>
                <p>SaaS Business Intelligence</p>
                <p>MySQL Business Intelligence</p>
                <p>Self-Service BI</p>
                <p>BI Tools</p>
                <p>Online BI</p>
            </div>
            <div>
                <h2 className="footer-head">DATA VISUALIZATION</h2>
                <p>Online Data Visualization Tools</p>
                <p>Dashboard Designer</p>
                <p>Online Data Analysis Tools</p>
                <p>Visual Analytics Software</p>
                <p>Sales Analysis Software</p>
            </div>
            <div>
                <h2 className="footer-head">DASHBOARDS AND REPORTING</h2>
                <p>Dashboard Creator</p>
                <p>Dashboard Software</p>
                <p>Dashboard Builder</p>
                <p>KPI Dashboard Software</p>
                <p>Dashboard Reporting</p>
            </div>
            <div>
                <h2 className="footer-head">SQL QUERIES</h2>
                <p>Online SQL Report Builder</p>
                <p>Online SQL Query Builder</p>
                <p>MySQL Query Builder</p>
                <p>MySQL Reporting Tools</p>
                <p>MySQL Report Builder</p>
            </div>
            </div>
            <div className="footer-box">
            <div className="footer-div">
                <div className="footer-sec">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Impressum</p>
                    <div className="footer-icon">
                        <FaFacebookF className="foot-icon"></FaFacebookF>
                        <AiOutlineTwitter className="foot-icon"></AiOutlineTwitter>
                        <ImXing2 className="foot-icon"></ImXing2>
                        <RiLinkedinFill className="foot-icon"></RiLinkedinFill>
                        <BsPinterest className="foot-icon"></BsPinterest>
                    </div>
                </div>
                <div>
                <p className="footer-p">Managing Partners: Martin Blumenau, Ruth Pauline Wachter | Trade Register: Berlin-Charlottenburg HRB 144962 B | VAT ID: DE 28 552 2148</p>
               </div> 
           </div>
            <div className="footer-lower">
                <p>+49 30 6920 9427</p>
                <p>contact@datapine.com</p>
                <p>Friedelstraße 2712047 Berlin, Germany</p>
            </div>
        </div>
        </div>
    )
}