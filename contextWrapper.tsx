import React, { Component } from 'react';
export const StoreContext = React.createContext()

class ContextWrapper extends React.Component {
    constructor(){
        super()
        this.state={
            user: "",
            login: (name:string) => {
                this.setState({user: name})
            }
        }
    }

    render(){
        return(
            <StoreContext.Provider value={this.state}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}

export default ContextWrapper

