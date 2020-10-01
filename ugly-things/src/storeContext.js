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
        this.setState({title: "", url:"", description:""})

        let newSubmission = {title: this.state.title, url: this.state.url, description: this.state.description}

        this.setState(prevState => ({
                completedSubmissions: [newSubmission, ...prevState.completedSubmissions]
        }))
    }
 
    render() {
        return (
            <Provider value={{}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {StoreContextProvider, Consumer as StoreContextConsumer}