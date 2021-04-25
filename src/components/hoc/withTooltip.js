import React from 'react'
const withTooltip = (Component) => {
    class HOC extends React.Component {
        state = {
            showToolTip: false,
            content: ''
        }
        MoveIn = (e) =>  this.setState({showToolTip:true,content:e.target.innerText})
        MoveOut = (e) =>  this.setState({showToolTip:false,content:''})
        render() {
            return (
                <div onMouseMove={this.MoveIn} onMouseOut={this.MoveOut}>
                    <Component />
                </div>
            )
        }
    }
    return HOC
}

export default withTooltip;