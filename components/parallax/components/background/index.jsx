 import React, { Component } from 'react';

 export default class Background extends Component {
   render() {
     return (<div className = {this.props.className} ref={div => { this.background = div; }} />);
   }
}
