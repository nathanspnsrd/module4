import React, {useState, useEffect, useContext} from "react"

import CommunityCard from "./CommunityCard"
import {CardContext} from "./cardContext"

export default function Home() {
    const [community, setCommunity] = useState({title: "", logo: "", description: ""})
    const [communities, setCommunities] = useState([])
    const {toggleLike, whenButtonClick} = useContext(CardContext)

    useEffect(() => {
        fetch("https://admin.spnsrd.com/api/community/list")
            .then(response => response.json())
            .then(response => {
                setCommunities(response.data)
            })
        }
    , [])

    function handleButtonClick(event) {
        event.preventDefault()

        const randomIndex = Math.floor(Math.random() * communities.length)
        const randCommunity = communities[randomIndex]
        setCommunity({community: randCommunity})
        whenButtonClick()
    }
    
    return (
        <div>
            <h1>Home</h1>
            <CommunityCard />
            <button onClick={toggleLike}>Like this Community</button>
            <button onClick={handleButtonClick}>See New Community</button>
        </div>
    )
}
