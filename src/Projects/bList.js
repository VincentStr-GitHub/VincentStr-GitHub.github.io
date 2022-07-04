import React from "react";


const BList = (props) => {
    const outArr = props.listArr.map(e => <li>{e}</li>)

    return (outArr)
}

export default BList