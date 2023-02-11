import React from "react";
import type { HeroValidation } from "../../types";

const List = (props: {list: HeroValidation[]}) => {
    console.log("cock", props.list)
    return <div className="cock">{props.list.map(item => 
        <div key={item.name}>{item.name}</div>
    )}</div>
}

export default List;
