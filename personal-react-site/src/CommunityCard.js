import React, {useContext} from "react"

import {CardContext} from "./cardContext"

export default function CommunityCard() {
    const {title, logo, description} = useContext(CardContext)
    return (
        <div>
            <h2>{title}</h2>
            <img src={`${logo}`} />
            <p>{description}</p>
        </div>
    ) 
}