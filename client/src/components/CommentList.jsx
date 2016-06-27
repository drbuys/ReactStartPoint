var React = require('react');
var Comment = require('./Comment.jsx');

var CommentList = React.createClass({
    delCom: function(comment) {
        return this.props.onCommentDelete(comment);
    },

    render: function () {
        var commentArray = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author} text={comment.text} key={comment.id} deleteMe={this.delCom}/>
            );
        }.bind(this));

        return (
        <div>
            Hello, I am a CommentList.
            {commentArray}
        </div>
        );
    }
});

module.exports = CommentList;
