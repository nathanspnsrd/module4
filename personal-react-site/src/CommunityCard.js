import React from "react"

import LikeButton from "./LikeButton"

export default function CommunityCard({community: {title, logo, description}}) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={logo} />
            <p>{description}</p>
            <LikeButton />
        </div>
    ) 
}