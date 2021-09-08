import { useState } from "react";
import './App.css'


function App() {

  const [data,setData] = useState([7,6,4,4,5]);


  function quickSort(arr,low,high){
   
  }


  function sort(){

      quickSort(data,0,data.length-1);
  }

  return (
    <div className="App">
      <div className="array">
        {
          data.map(element=>(
          <div className="element-container">
              {element}
          </div>
          ))
        }
      </div>

        <button className='sort-button' onClick={sort}>sort</button>
      
    </div>
  );
}

export default App;
