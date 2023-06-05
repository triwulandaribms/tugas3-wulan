import React from "react";

function Header (){
    const nama = "Tri Wulandari";

    return (
        <header style={{
            backgroundColor: "brown",
            width: "100%",
            height: "60px",
            textAlign:"left",
            fontFamily:"sans-serif",
            fontWeight:"bold",
            fontSize:"20px",
            color:"white",
            paddingTop:"15px",
            position:"fixed",
            top:"0"
        }}>
            {nama}
        </header>
    )
}

export default Header;