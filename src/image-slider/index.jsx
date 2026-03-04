import { useEffect, useState } from "react";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
 
    const [images,setImages]= useState([])
    const [currentSlider, setCurrentSLider] = useState(0)
    const [errorMsg,setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImage(getUrl){
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()
            if (data){
                setImages(data)
                setLoading(false)
            }

        } catch (e) {
            setErrorMsg(e.message)
        }
    }


    function handlePrevious(){
        setCurrentSLider(currentSlider === 0 ? images.length - 1 : currentSlider - 1)
    }

    function handleNext(){
         setCurrentSLider(currentSlider === images.length - 1 ? 0 : currentSlider + 1)
    }


    useEffect(()=>{
        if(url !== ' ')fetchImage(url)
    },[url])
 

    if(loading){
        return <div>
            <h1>Loading data please wait</h1>
        </div>
    }

    if(errorMsg !== null){
        return <div>
            <h3>Error Occured</h3>
        </div>
    }

  return <div className="container">
    <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
    {
        images && images.length ? images.map((imageItem, index)=>(
            <img 
            key={imageItem.id}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            className={currentSlider === index ? "current-image": "hide-current-image" }
            />
        ))  : null
    }
    <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
    <span className="circle-indicators">
        {
            images && images.length ?
            images.map((_,index)=><button key={index} className={currentSlider === index ? "current-indicator": "inactive-indicator" } onClick={()=>setCurrentSLider(index)}></button>)
            :null
        }
    </span>
  </div>;
};

export default ImageSlider;
