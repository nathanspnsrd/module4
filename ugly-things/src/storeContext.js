import React from "react"

const {Provider, Consumer} = React.createContext()

class StoreContextProvider extends React.Component {
    state = {
        title: "",
        url: "",
        description: "",
        completedSubmissions: []
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState(prevState => {
                let newSubmission = {title: prevState.title, url: prevState.url, description: prevState.description}
                return {
                    completedSubmissions: [newSubmission, ...prevState.completedSubmissions],
                    title: "", url:"", description:""
                }
        })
    }
 
    render() {
        return (
            <Provider value={{ 
                    ...this.state,
                    handleSubmit: this.handleSubmit,
                    handleChange: this.handleChange
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {StoreContextProvider, Consumer as StoreContextConsumer}