import React, {useContext} from "react"

import CommunityCard from "./CommunityCard"
import {CardContext} from "./cardContext"

export default function Likes() {
    const {likedCommunities} = useContext(CardContext)

    return (
        <div>
            {likedCommunities.map((community) => <CommunityCard community={community} type='liked' />) }
        </div>
    )
}