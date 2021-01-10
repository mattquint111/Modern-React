import React, { Component } from 'react'

class Random extends Component {
    state = {
        number: 1
    }

    handleRandomNumberClick = () => {
        let randomNumber = Math.floor((Math.random() * 10) + 1)
        this.setState({
            number: randomNumber
        })
    }

    render() {
        return (
            <div>
                <h1>Number is {this.state.number}</h1>
                {this.state.number === 7 ?
                    <h1>YOU WIN!!!</h1> :
                    <button onClick={this.handleRandomNumberClick}>Random Number</button>
                }
            </div>
        )
    }
}

export default Random