import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import LinkCreate from './components/link_create';


class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('App willMount.');
    }

    render() {
        return (
            <div>
                <Header />
                <LinkCreate />
            </div>
        );
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.reactContainer'));
});