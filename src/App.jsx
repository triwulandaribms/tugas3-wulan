import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App (){
  return (
    <div style= {{
      width:'100vw',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
    }}> 
      <Header/>
        {<Dashboard/>}
    </div>
  )
}

export default App;