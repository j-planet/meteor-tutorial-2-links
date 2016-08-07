import React, {Component} from 'react';


class LinkCreate extends Component {

    constructor(props) {
        super(props);

        this.state = { error: '' };
    }

    componentWillMount() {
        console.log('LinkCreate willMount.');
    }

    handleSubmit(event) {
        event.preventDefault();

        const url = this.refs.input.value;

        // set error message with a call back to sets the state
        Meteor.call('links.insert', url, (err) => {
            this.setState({error: err ? 'Enter a valid URL.' : '' });
            if (!err) this.refs.input.value = '';
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Link to shorten</label>
                    <input ref="input" className="form-control" />
                </div>
                <div className="text-danger">{this.state.error}</div>
                <button className="btn btn-primary"> Shorten! </button>
            </form>
        );
    }
}

export default LinkCreate;