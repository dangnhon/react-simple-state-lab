import React, { component} from 'react'

export default class Cell extends React.Component {
    constructor(props) {
        super() 
        this.state = {
            color: props.value
        }
    }

    changeColor = () => {
        const newColor = '#333'
        this.setState({
            color: newColor
        })
    }

    render() {
        let initialProp = this.state.color
        return (
            <div onClick={this.changeColor} className="cell" style={{backgroundColor: initialProp}}></div>
        )
    }
} 