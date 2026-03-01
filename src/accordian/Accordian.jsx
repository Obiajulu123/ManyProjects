 import { useState } from 'react'
import data from './data'
 
 const Accordian = () => {
  const [selected, setSelected] = useState(null)

    const handleSingleSelection = (currentId)=>{
           console.log(currentId)
           setSelected(currentId)
    }
    

   return (
     <div className='wrapper'>
       <div className="accordian">
        {
          data && data.length > 0 ? data.map((dataitem)=>{
             return <div className="item" key={dataitem.id}>
                      <div onClick={()=>handleSingleSelection(dataitem.id)} className="title">
                          <h3>{dataitem.question}</h3>
                          <span>+</span>
                      </div>
                      {
                        selected === dataitem.id ? <div className="content">
                            {dataitem.answer}
                        </div>:null
                      }
             </div>
          }):<div></div>
        }
       </div>
     </div>
   )
 }
 
 export default Accordian
 