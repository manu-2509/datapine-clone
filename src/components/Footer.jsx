import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {ImXing2} from "react-icons/im"
import {RiLinkedinFill} from "react-icons/ri"
import {BsPinterest} from "react-icons/bs"
export const Footer=()=>{
    return(
        <div>
            <div className="footer-first">
            <div>
                <h2>BUSINESS INTELLIGENCE</h2>
                <p>MySQL Business Intelligence</p>
                <p>Self-Service BI</p>
                <p>BI Tools</p>
                <p>Online BI</p>
            </div>
            <div>
                <h2>DATA VISUALIZATION</h2>
                <p>Online Data Visualization Tools</p>
                <p>Dashboard Designer</p>
                <p>Online Data Analysis Tools</p>
                <p>Visual Analytics Software</p>
                <p>Sales Analysis Software</p>
            </div>
            <div>
                <h2>DASHBOARDS AND REPORTING</h2>
                <p>Dashboard Creator</p>
                <p>Dashboard Software</p>
                <p>Dashboard Builder</p>
                <p>KPI Dashboard Software</p>
                <p>Dashboard Reporting</p>
            </div>
            <div>
                <h2>SQL QUERIES</h2>
                <p>Online SQL Report Builder</p>
                <p>Online SQL Query Builder</p>
                <p>MySQL Query Builder</p>
                <p>MySQL Reporting Tools</p>
                <p>MySQL Report Builder</p>
            </div>
            </div>
            <div>
            <div>
                <div>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Impressum</p>
                    <div>
                        <FaFacebookF></FaFacebookF>
                        <AiOutlineTwitter></AiOutlineTwitter>
                        <ImXing2></ImXing2>
                        <RiLinkedinFill></RiLinkedinFill>
                        <BsPinterest></BsPinterest>
                    </div>
                </div>
                <p>Managing Partners: Martin Blumenau, Ruth Pauline Wachter | Trade Register: Berlin-Charlottenburg HRB 144962 B | VAT ID: DE 28 552 2148</p>
            </div>
            <div>
                <p>+49 30 6920 9427</p>
                <p>contact@datapine.com</p>
                <p>Friedelstraße 2712047 Berlin, Germany</p>
            </div>
        </div>
        </div>
    )
}