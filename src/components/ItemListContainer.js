import React from "react";
import ItemCount from "./ItemCount"

let catalogoStyle={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

function ItemListContainer ({MENSAJE}){
    return (<div style={catalogoStyle}>
        <h1 style={{marginBottom: 50+"px"}}>{MENSAJE}</h1>
        <ItemCount stock="5" initial="1"/>
        </div>
    )
}


export default ItemListContainer;