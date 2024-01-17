import './App.css'
import AnyCarousel from './components/AnyCarousel';
import { Panels } from './components/Panels';


const image1 = 'https://http.cat/100.jpg';
const image2 = 'https://http.cat/101.jpg';

function App() {
  return (
    <>
      {/* <AnyCarousel opts={{loop: true, align: "start"}}>
        <img src={image1} />
        <img src={image2} />
      </AnyCarousel> */}
      <Panels />
    </>
  )
}

export default App
