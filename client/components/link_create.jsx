import React, {Component} from 'react';


class LinkCreate extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('LinkCreate willMount.');
    }

    handleSubmit(event) {
        event.preventDefault();

        const url = this.refs.input.value;
        Meteor.call('links.insert', url);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Link to shorten</label>
                    <input ref="input" className="form-control" />
                </div>

                <button className="btn btn-primary"> Shorten! </button>
            </form>
        );
    }
}

export default LinkCreate;