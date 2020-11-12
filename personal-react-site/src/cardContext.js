import React, {Component} from "react"

const CardContext = React.createContext()

class CardContextProvider extends Component {
    state = {
        title: "Welcome to spnsrd!",
        logo: "https://i.imgur.com/0yes2pD.png",
        description: "Please select the communities you love.",
        _id: "",
        action: "Like",
        isLiked: false,
        communities: [],
        likedCommunities: [],
    }


    //Fetchs communities and adds the objects to a new array   
    getCommunity = () => {
        fetch("https://admin.spnsrd.com/api/community/list")
            .then(response => response.json())
            .then(response => {
                this.setState({communities: response.data})
            })
    }

    setCommunity = newCommunity => {
        let {title, logo, description, isLiked, _id, action} = newCommunity
        this.setState({title, logo, description, isLiked, _id, action})
    }

    
    //Allows a user to like and unlike specific communities
    toggleLike = () => {
        this.setState(prevState => {
            let {title, logo, description, _id, isLiked, action} = prevState
            const commun = prevState.isLiked ? prevState.likedCommunities.filter(com => com._id !== prevState._id) : [...prevState.likedCommunities, {title, logo, description, isLiked, _id, action}]
            return {
                isLiked: prevState.isLiked === false ? true : false,
                action: prevState.isLiked === false ? "Unlike" : "Like",
                likedCommunities: commun,
            }
        })
    }

    removeLiked = _id => {
        this.setState(prevState => {
            return {
                likedCommunities: prevState.likedCommunities.filter(com => com._id !== _id)
            }
        })
    }


    render() {
        return (
            <CardContext.Provider value={{...this.state, removeLiked: this.removeLiked, setCommunity: this.setCommunity, getCommunity: this.getCommunity, toggleLike: this.toggleLike}}>
                {this.props.children}
            </CardContext.Provider>
        )
    }
} 

export {CardContextProvider, CardContext}