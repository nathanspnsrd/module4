import React, {useEffect, useContext} from "react"

import CommunityCard from "./CommunityCard"
import {CardContext} from "./cardContext"

export default function Home() {
    const {communities, title, logo, description, isLiked, getCommunity, setCommunity} = useContext(CardContext)

    useEffect(() => {
        getCommunity()
    }, [])

    function handleButtonClick(event) {
        event.preventDefault()

        const randomIndex = Math.floor(Math.random() * communities.length)
        const randCommunity = communities[randomIndex]
        setCommunity({title: randCommunity?.title, logo: randCommunity?.logo, description: randCommunity?.description, isLiked: false})
    }
    
    return (
        <div>
            <CommunityCard community={{title, logo, description, isLiked}}/>
            <button onClick={handleButtonClick}>Explore Different Communities</button>
        </div>
    )
}
