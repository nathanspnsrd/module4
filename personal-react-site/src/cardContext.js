import React, {Component} from "react"

const CardContext = React.createContext()

class CardContextProvider extends Component {
    state = {
        title: "",
        logo: "",
        description: "",
        isLiked: false
    }

    whenButtonClick = () => {
        this.setState(prevState => {
            return {
                title: prevState.title,
                logo: prevState.logo,
                description: prevState.description
            }
        })
    }

    toggleLike = () => {
        this.setState(prevState => {
            return {
                isLiked: prevState.isLiked === false ? true : false
            }
        })
        console.log(this.state)
    }

    render() {
        return (
            <CardContext.Provider value={{title: this.state.title, logo: this.state.logo, description: this.state.description, isLiked: this.state.isLiked, toggleLike: this.toggleLike, whenButtonClick: this.whenButtonClick}}>
                {this.props.children}
            </CardContext.Provider>
        )
    }
} 

export {CardContextProvider, CardContext}