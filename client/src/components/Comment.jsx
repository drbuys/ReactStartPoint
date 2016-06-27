var React = require('react');

var Comment = React.createClass({

    handleClick: function(e) {
        var deleteComment = this.props.deleteMe({author: this.props.author, text: this.props.text});
        return deleteComment;
    },

    render: function () {
        return (
        <div>
            <h4> { this.props.author } </h4>
            { this.props.text }
            <input onClick={this.handleClick} type="submit" value="Delete"/>
        </div>
    );
    }
})

module.exports = Comment;
