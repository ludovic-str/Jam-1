import React from "react";
import type { HeroValidation } from "../../types";
import "./styles.css";

const List = (props: {list: HeroValidation[]}) => {
    return <div className="test">{props.list.map(item => 
        <div className={item.isValid ? 'element_valid' : 'element_invalid'} key={item.name}>{item.name}</div>
    )}</div>
}

export default List;
