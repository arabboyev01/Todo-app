import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from './components/Home';
import Service from './components/Service';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
