import "./style.css"
import { useState,useEffect} from "react"
import axios from "axios"
import {AiOutlineArrowRight} from "react-icons/ai"
export const Dashboards=()=>{
    const [stat1,setStat1] = useState(true)
    const [stat2,setStat2] = useState(false)
    const [stat3,setStat3] = useState(false)
const [func,setFunc] = useState([])
const [industry,setIndustry] = useState([])
const [platform,setPlatform] = useState([])
    useEffect(()=>{
        axios.get("https://datapine.herokuapp.com/function").then((response)=>{
            setFunc(response.data.func)
        })
    },[])
    useEffect(()=>{
        axios.get("https://datapine.herokuapp.com/industry").then((response)=>{
            setIndustry(response.data.industry)
        })
    },[])
    useEffect(()=>{
        axios.get("https://datapine.herokuapp.com/platform").then((response)=>{
            setPlatform(response.data.platformv)
        })
    },[])
    
const handleDisplay=(a,b,c)=>{
    
    setStat1(a)
    setStat2(b)
    setStat3(c)
}


    return(
        <div className="dashboard-main">
            <h1 className="dash-head">THE RIGHT BUSINESS DASHBOARDS FOR EVERY USE CASE</h1>
            <div className="dash-cat">
                <h2 className={stat1?"underline":"none"} onClick={()=>handleDisplay(true,false,false)}>Dashboards by Function</h2>
                <h2 className={stat2?"underline":"none"} onClick={()=>handleDisplay(false,true,false)}>Dashboards by Industry</h2>
                <h2 className={stat3?"underline":"none"} onClick={()=>handleDisplay(false,false,true)}>Dashboards by Platform</h2>
            </div>
            <div className="dash-dash">
            <div className="dash-content"> 
              <div className={stat1?"func":"nil"}>
                    {func.map((e)=>{
                        return(
                             <div key={e._id} className="priority"> 
                                <img className="all-img" src={e.image} alt="" />
                                <h1 className="all-head">{e.desc}</h1>
                                <div className="all-flex">
                                    <p>View</p>
                                    <AiOutlineArrowRight className="all-icon"></AiOutlineArrowRight>
                                </div>
                             </div>
                        )
                    })} 
                </div>
                  <div className={stat2?"industry":"nil"}>
                    {industry.map((e)=>{
                        return(
                             <div key={e._id} className="priority">
                                <img className="all-img" src={e.image} alt="" />
                                <h1 className="all-head">{e.desc}</h1>
                                <div className="all-flex">
                                    <p>View</p>
                                    <AiOutlineArrowRight className="all-icon"></AiOutlineArrowRight>
                                </div>
                             </div>
                        )
                    })} 
                </div>
                <div className={stat3?"platform":"nil"}>
                    {platform.map((e)=>{
                        return(
                             <div key={e._id} className="priority">
                                <img className="all-img" src={e.image} alt="" />
                                <h1 className="all-head">{e.desc}</h1>
                                <div className="all-flex">
                                    <p>View</p>
                                    <AiOutlineArrowRight className="all-icon"></AiOutlineArrowRight>
                                </div>
                             </div>
                        )
                    })} 
                </div>
                 
            </div>
            </div>
            <div className="dash-lower">
                <h1 className="dash-headlower">TAKE ADVANTAGE OF INTERACTIVE BUSINESS DASHBOARDS</h1>
                <button className="dash-btn">START MY FREE TRIAL</button>
            </div>

        </div>
    )
}