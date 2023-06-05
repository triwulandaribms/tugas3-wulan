import React from "react";

function CardProduct (props){
    function Click (){
        return (
            alert(`Product ${props.id} ${props.productName} dengan harga ${props.productPrice} merupakan produk dengan kualitas terbaik`)
        )
    }
    return (
        <div onClick={Click} style={{
            padding:"10px",
            display:"inline-flex",
            flexWrap: "wrap",
        }}>
            <div style={{
                height: "50%",
                width: "100px",
                backgroundColor: "#424240",
                color: "white",
                borderRadius: "15px",
                padding: "50px",
            }}>
            <img src={props.urllmage} alt="gambar" style={{
                width:"110%", 
                height:"150px",
            }}/>
            <p>{props.id}</p>
            <p>{props.productName}</p>
            <p>{props.productPrice}</p>
            </div>
        </div>
    )
}

export default CardProduct;
