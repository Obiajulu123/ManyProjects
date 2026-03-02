  import { useState } from 'react'
import data from './data'
 import './style.css'
 
 const Accordian = () => {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] =useState(false)
  const [multiple, setMultiple] = useState([])

    const handleSingleSelection = (currentId)=>{
           console.log(currentId)
           setSelected(currentId === selected ? null : currentId)
    }

    const handleMultiSelection = (currentId)=>{
        let cpyMultiple = [...multiple]

        const findIndexOfCureentId = cpyMultiple.indexOf(currentId)
        console.log(findIndexOfCureentId)
        if(findIndexOfCureentId === -1)cpyMultiple.push(currentId)
            else cpyMultiple.splice(findIndexOfCureentId, 1)
        setMultiple(cpyMultiple)
    }
    console.log(selected, multiple)
    

   return (
     <div className='wrapper'>
        <button onClick={()=>setEnableMultiSelection((prev)=>!prev)}>Enable Multiple Selection</button>
       <div className="accordian">
        {
          data && data.length > 0 ? data.map((dataitem)=>{
             return <div className="item" key={dataitem.id}>
                      <div onClick={enableMultiSelection?()=>handleMultiSelection(dataitem.id):()=>handleSingleSelection(dataitem.id)} className="title">
                          <h3>{dataitem.question}</h3>
                          <span>+</span>
                      </div>
                      {/* {
                        selected === dataitem.id || multiple.indexOf(dataitem.id) !== -1 ? <div className="content">
                            {dataitem.answer}
                        </div>:null
                      } */}
                      {/* //ANOTHER EXAMPLE */}

                      {
                        enableMultiSelection ? multiple.indexOf(dataitem.id) !== -1 && (
                            <div className="content">{dataitem.answer}</div>
                        ) : selected === dataitem.id &&  (
                            <div className="content">{dataitem.answer}</div>)
                      }
             </div>
          }):<div></div>
        }
       </div>
     </div>
   )
 }
 
 export default Accordian
 