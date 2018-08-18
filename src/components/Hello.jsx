import React from 'react'

export default class Hello extends React.Component{
    constructor(){
        super()
        this.state = {
            react: 'Welcome React'
        }
    }

    render(){
        return(
            <div>
                <h1>{ this.state.react }</h1>
                <h2>Mudahnya belajar kalau dari scratch</h2>
            </div>
        )
    }
}