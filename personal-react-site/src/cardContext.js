import React, {Component} from "react"

const CardContext = React.createContext()

class CardContextProvider extends Component {
    state = {
        title: "",
        logo: "",
        description: "",
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
                action: prevState.isLiked === false ? action = "Unlike" : action = "Like",
                likedCommunities: commun,
            }
        })
    }


    render() {
        return (
            <CardContext.Provider value={{...this.state, chagneButton: this.changeButton, setCommunity: this.setCommunity, getCommunity: this.getCommunity, toggleLike: this.toggleLike}}>
                {this.props.children}
            </CardContext.Provider>
        )
    }
} 

export {CardContextProvider, CardContext}