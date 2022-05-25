import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


import Layout from "./Components/Layout";
import Card from './Components/CommonComponents/Card'
function App() {
  return (
    <div className="App">
     



<BrowserRouter>
         
<Layout/>
  </BrowserRouter>,


    </div>
  );
}

export default App;
