import React, {useState, useContext} from "react"

import {CardContext} from "./cardContext"

export default function LikeButton(props) {
    //const [action, setAction] = useState(props.action)
    const {toggleLike, removeLiked} = useContext(CardContext)
    //console.log(action, 'action')
    //console.log(props.action, 'props action')

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