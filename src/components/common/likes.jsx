import React, { Component } from 'react'

class Likes extends Component {
    state = { onclick:false} 
    render() { 
        return (<i onClick={this.handleClass} className={this.state.onclick?'fa fa-heart':"fa fa-heart-o"} aria-hidden="true"></i>

);
    }

handleClass=()=>{
    let onclick= !(this.state.onclick);
    this.setState({onclick});
    console.log(onclick);

}

}
 
export default Likes;