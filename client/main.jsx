import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import LinkCreate from './components/link_create';
import { Links } from '../imports/collections/links';
import LinkList from './components/link_list';


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
                <LinkList />
            </div>
        );
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.reactContainer'));
});