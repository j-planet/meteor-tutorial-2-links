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

    renderRows() {
        return this.props.links.map(link =>
            {
                const { url, clicks, token } = link;
                const shortLink = 'http://localhost:3000/' + token;
                return (
                    <tr key={token} >
                        <td>{url}</td>

                        <td>
                            <a href={shortLink}>{shortLink}</a>
                        </td>

                        <td>
                            { clicks }
                        </td>
                    </tr>
                );
            }
        )
    }

    render() {
        return (
            <table className="table">

                <thead>
                <tr>
                    <th>URL</th>
                    <th>Short</th>
                    <th>Num Clicks</th>
                </tr>
                </thead>

                <tbody>
                {this.renderRows()}
                </tbody>
            </table>
        );
    }
}

export default createContainer(() =>
    {
        Meteor.subscribe('links');

        return { links: Links.find({}).fetch() };
    }
    , LinkList);