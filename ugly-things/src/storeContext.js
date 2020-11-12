import React from "react"
import { v4 as uuidv4 } from 'uuid'

const {Provider, Consumer} = React.createContext()

class StoreContextProvider extends React.Component {
    state = {
        title: "",
        url: "",
        description: "",
        _id: "",
        completedSubmissions: []
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState(prevState => {
            let newSubmission = {title: prevState.title, url: prevState.url, description: prevState.description, _id: uuidv4()}
            return {
                completedSubmissions: [newSubmission, ...prevState.completedSubmissions],
                title: "", url: "", description: "", _id: ""
            }
        })

    }

    // //This
    // handleEdit = _id => {
    //     this.setState({title, url, description})
    // }

    // //Or this
    // handleEdit = _id => {
    //     this.setState(prevState => {
    //         let {title, url, description} = prevState
    //         return {

    //         }
    //     })
    // }

    handleDelete = _id => {
        this.setState(prevState => {
            return {
                completedSubmissions: prevState.completedSubmissions.filter(thing => thing._id !== _id)
            }
        })
        
    }
 
    render() {
        return (
            <Provider value={{ 
                    ...this.state,
                    handleSubmit: this.handleSubmit,
                    handleChange: this.handleChange,
                    handleEdit: this.handleEdit,
                    handleDelete: this.handleDelete
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {StoreContextProvider, Consumer as StoreContextConsumer}