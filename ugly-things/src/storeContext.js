import React from "react"
import { v4 as uuidv4 } from 'uuid'

const {Provider, Consumer} = React.createContext()

class StoreContextProvider extends React.Component {
    state = {
        title: "",
        url: "",
        description: "",
        _id: "",
        completedSubmissions: [],
    }

    submitThing = (thing) => {
        this.setState(prevState => {
            thing._id = uuidv4()
            return {
                completedSubmissions: [thing, ...prevState.completedSubmissions]
            }
        })
    }
    

    editThing = (_id, updatedThing) => {
        this.setState(prevState => {  
            return {
                completedSubmissions: prevState.completedSubmissions.map(thing => thing._id !== _id ? thing : updatedThing)
            }
        })
    }

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
                    submitThing: this.submitThing,
                    editThing: this.editThing,
                    handleDelete: this.handleDelete
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {StoreContextProvider, Consumer as StoreContextConsumer}