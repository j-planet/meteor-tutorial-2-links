import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Links } from '../../imports/collections/links';


class LinkList extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('LinkList willMount.');
    }

    render() {
        return (
            <div>
                List of Links to click
            </div>
        );
    }
}

export default createContainer(() =>
    {
        Meteor.subscribe('links');

        return { links: Links.find({}).fetch() };
    }
    , LinkList);