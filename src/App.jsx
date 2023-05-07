import Hero from "./components/Hero"
import Nabvbar from "./components/Nabvbar"
import Offers from "./components/Offers"
import Plan from "./components/Plan"
import Rooms from "./components/Rooms"
import ImageSlider from './components/ImageSlider'
import Footer from "./components/Footer"

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Nabvbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  )
}

export default App
