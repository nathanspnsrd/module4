import React, {useState, useContext} from "react"

import {CardContext} from "./cardContext"

export default function LikeButton(props) {
    const {toggleLike, removeLiked} = useContext(CardContext)


    const handleLike = () => {
        if(props.type === 'main'){
            toggleLike()
        }else {
            removeLiked(props._id)
        }
    }

    return (
        <button onClick={handleLike}>{props.type === 'main' ? props.action : 'Unlike'} this community.</button>
    ) 
}