import React from "react";
import data from "./data";
import Tours  from "./components/Tours";
import { useState } from "react";

const App=()=>  {

  
const [ tours , setTours] = useState(data);

//removes tour with the given ID
function removeTour(id){
 const newTours= tours.filter(tour => tour.id !== id);
    setTours(newTours);
}

if (tours.length===0 ){
  return(
    <div className="refresh">
      <h2>No Tours Left</h2>
      <button  className="btn-white" onClick={()=>{setTours(data)}}>
        Refresh
      </button>
    </div>
  )
  
}

  return(

    <div className="app">
    <Tours tours={tours} removeTour={removeTour}></Tours>
    {/* we are passing tours data and remove tour function */}
  </div>
    );
};

export default App;
