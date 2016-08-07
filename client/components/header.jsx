import React, {Component} from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('Header willMount.');
    }

    render() {
        return (
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <a className="navbar-brand">ShortenMyLink </a>
                </div>
            </nav>
        );
    }
}

export default Header;