import React, { Component, Fragment } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h1>Welcome to Brandon's Recipe Site!</h1>
            </Fragment>
         );
    }
}
 
export default Header;