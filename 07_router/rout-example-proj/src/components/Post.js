import React, { Component } from 'react';

import { connect } from 'react-redux'; // Import wrapper function to receive props from (newer code)
// import axios from 'axios'; // Grab and display post content from route //this import belongs to the dunny jsom place holder

//actions:
import { deletePost } from '../actions/postActions';

class Post extends Component {
    /** Previous code, usin json place holder dummy content: */
    // state = {
    //     post: null
    // }

    // componentDidMount() {
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     .then(res => {
    //         this.setState({
    //             post: res.data
    //         })
    //         console.log(res);
    //     });
    // }
    /**End of previous dummy code */

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        const post = this.props.post ?  (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete post
                    </button>
                </div>
            </div>
        ) : (<div className="center">Loading post. . .</div>
        )
        return(
            <div className="container">
                { post }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;

    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    // let id = ownProps.match.params.post_id;

    return {
        deletePost: (id) => {dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)