import React, {useContext} from "react"

import CommunityCard from "./CommunityCard"
import {CardContext} from "./cardContext"

export default function Likes() {
    const {isLiked} = useContext(CardContext)

    if ({isLiked} === true) {
        return (
            <CommunityCard />
        )
    }
}