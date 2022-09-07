import {HiOutlineUser} from "react-icons/hi"
import {TbDots} from "react-icons/tb"
import {SiRedux} from "react-icons/si"
import {GiPointyHat} from "react-icons/gi"
import "./style.css"
export const Rating=()=>{
    return(
        <div>
        <div className="rating-main">
            <div className="rating-div">
                <img className="rating-img" src="https://www.datapine.com/images/moritz-klussmann-small.png" alt="" />
                <div className="rating-para">
                <p className="rating-p1">Moritz Klussmann</p>
                <p className="rating-p3">Founder Customer Alliance</p>
                <p className="rating-p2">“Thanks to datapine we are able to review all customer data in one central place and react on trends as well as opportunities much faster.”</p>
                </div>
            </div>
            <div>
                <img className="rating-lap" src="https://www.datapine.com/images/laptop-index2.png" alt="" />
                <video className="rating-video" src="https://www.datapine.com/images/self-service-analytics-drag-and-drop.mp4"></video>
            </div>
             <div className="rating-star-main">
                <div className="rating-star">
                   <img className="rating-star-img" src="https://www.datapine.com/images/capterra-rating.png" alt="" />
                   <img src="https://www.datapine.com/images/g2-rating.png" alt="" /> 
                </div>
                <div className="rating-star">
                    <img className="rating-star-img" src="https://www.datapine.com/images/get-app-rating.png" alt="" />
                    <img src="https://www.datapine.com/images/finances-online-rating.png" alt="" />
                </div>
                <img src="https://www.datapine.com/images/g2-high-performer.png" alt="" />
             </div>
           
        </div>
          <div className="rating-roundbg">
            <div className="rating-connect">
                <div className="rating-inner">
               <HiOutlineUser className="rating-icons icon-main"></HiOutlineUser>
               <p>Create an account</p>
               </div>
               <TbDots className="rating-icons dots"></TbDots>
               <div>
                 <SiRedux className="rating-icons icon-main"></SiRedux>
                 <p>Connect your data</p>
               </div>
               <TbDots className="rating-icons dots"></TbDots>
               <div>
                <GiPointyHat className="rating-icons icon-main"></GiPointyHat>
                <p>Become a data wizard</p>
               </div>
           </div>
           <div className="rating-trial">
            <input className="rating-email" type="email" placeholder="Business Email" />
            <input className="rating-password" type="password" placeholder="Password"/> 
            <button className="btn-trial">START MY FREE TRIAL</button>
           </div>
         </div>
          
        </div>
    )
}