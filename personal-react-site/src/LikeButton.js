import React, {useContext} from "react"

import {CardContext} from "./cardContext"

export default function LikeButton() {
    const {toggleLike, action} = useContext(CardContext)

    
    return (
        <button onClick={toggleLike}>{action} this community.</button>
    ) 
}