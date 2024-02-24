import { useState } from "react"
import axios from "axios"
import "./Page.css"
function Page(){
    const[Images,setImages]=useState([])
    const getImages = async()=>{
       
        try{
            const Response = await axios.get("https://picsum.photos/v2/list")
            const getData = Response.data
            setImages(getData)
            console.log(Images)
        }catch(e){
            console.log("Page Not Found:"+e)
        }

    }

    return(
        <>
        <div className="display">
        <button onClick={getImages}>Get Images</button>
        <div className="images">
            {Images.map((elem,i)=>{
            return <img 
            key={i}
            src={elem.download_url}
            />
            })}
        </div>
        </div>
       
        </>
    )
}

export default Page