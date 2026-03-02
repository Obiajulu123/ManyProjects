import { useEffect, useState } from "react"

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#ff0055')


    const handleColorUtility=(length)=>{
        return Math.floor(Math.random()*length)
    }
    const handleCreateRandomHexColor = ()=>{
        const hex =[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor =" #";

        for(let i=0; i<6; i++){
            hexColor += hex[handleColorUtility(hex.length)]
        }

        console.log(hexColor)
        setColor(hexColor)
    }
    const handleCreateRandomRgbColor = ()=>{
         const r = handleColorUtility(255);
         const g = handleColorUtility(255);
         const b = handleColorUtility(255);

         setColor(`rgb(${r},${g},${b})`)
    }

    // useEffect(()=>{
    //     if(typeOfColor === 'hex')handleCreateRandomHexColor()
    //     else handleCreateRandomRgbColor()
    // },[typeOfColor])


  return (
    <div style={{ 
        width:"100vw",
        height:"100vh",
        background:color,
    }}>
      <button onClick={()=>setTypeOfColor('hex')}>Create Hex Color</button>
      <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
        <div style={
            {
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"#fff",
                fontSize:"30px",
                marginTop:"50px"
            }
        }>
            <h3>{typeOfColor === 'rgb' ? 'RGB COLOR' : 'HEX COLOR'}</h3>
            <h1>{color}</h1>
        </div>
    </div>
  )
}

export default RandomColor
