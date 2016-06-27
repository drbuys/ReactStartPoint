var React = require('react');

var CommentForm = React.createClass({
    getInitialState: function(){
        return {author:'', text:''};
        },

    handleAuthorChange: function(e){
        this.setState( { author: e.target.value } )
    },

    handleTextChange: function(e){
        this.setState( { text: e.target.value } )
    },

    handleSubmit: function(e) {
        e.preventDefault();
        this.props.onCommentSubmit({author: this.state.author, text: this.state.text})
        this.setState({author:'', text:''});
        // var form = document.getElementById("myForm");
        // form.reset();
    },

    render: function () {
        return (
            <form onSubmit={this.handleSubmit} id="myForm">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Say Something"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input
                    type="submit"
                    value="Do it..."
                />
            </form>
        );
    }
});

module.exports = CommentForm;
