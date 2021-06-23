import Box from  './Components/Jumbotron/Jumbotron';
import Works from '../src/Components/works/Works';
import Gallery from '../src/Components/Gallery/Gallery';
import Buy from "./Components/Purchase/Buy";
import Pandemic from './Components/Pandemic/Pandemic';

function App(){
  return(
      <div>
        <Box />
        <Works />
        <Gallery />
        <Buy />
        <Pandemic />
      </div>

  )
}
export default App;
