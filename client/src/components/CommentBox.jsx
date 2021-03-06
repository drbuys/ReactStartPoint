var React = require('react');
var CommentList = require('./CommentList.jsx');
var CommentForm = require('./CommentForm.jsx');

var sampleData = [
    {id: 1, author: "Keith", text: "Boom!Boom!"},
    {id: 2, author: "Rick", text: "Very Cool..."},
    {id: 3, author: "Kat", text: "How do you do!?!?"}
];

var CommentBox = React.createClass({
    getInitialState: function () {
        return { data: sampleData };
    },

    handleCommentSubmit: function(comment){
        comment.id = Date.now();
        var newComments = this.state.data.concat([comment]);
        this.setState({data: newComments});
    },

    handleCommentDelete: function(comment){
        for(var com in this.state.data){
            if(this.state.data[com].text == comment.text){
                this.state.data.splice(com,1);
                this.setState({data: this.state.data});
                break;
            }
        }
    },

    render: function () {
        return (
        <div>
            Hello, I am a CommentBox.
            <CommentList data={this.state.data} onCommentDelete={this.handleCommentDelete}/>
            <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        </div>
        );
    }
});

module.exports = CommentBox;

// how would you delete a comment?????
