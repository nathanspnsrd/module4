import React from "react"

import LikeButton from "./LikeButton"

export default function CommunityCard({community: {title, logo, description, action, _id}, type}) {
    
    return (
        <div>
            <h2>{title}</h2>
            <img src={logo} />
            <p>{description}</p>
            <LikeButton action={action} type={type} _id={_id} />
        </div>
    ) 
}