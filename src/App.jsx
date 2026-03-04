//  import Accordian from './accordian/Accordiantwo'
import './App.css'
import ImageSlider from './image-slider'
// import RandomColor from './random-color'
// import StarRating from './star-ratings'
// import Accordian from './accordian/Accordian'

function App() {

  return (
    <>
      {/* <Accordian /> */}
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit ={"10"} />
    </>
  )
}

export default App
