 import React, { Component } from 'react';

 export default class Content extends Component {
   render() {
     return (<div ref={div => { this.content = div; }} />);
   }
}
