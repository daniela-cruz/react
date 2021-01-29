import React, { Component } from 'react';

import { Link } from 'react-router-dom'; // Wrap the title of each post with a link tag
import { connect } from 'react-redux';
// import axios from 'axios';//Routing by using axios libs using jsonplaceholder

//Logo:
import Pokeball from '../pokeball.png';

class Home extends Component {
    /* Previous code for importing posts from json placeholder: */
    // state = {
    //     posts: [ ] //No posts before this component mounts
    // }
    // componentDidMount() {
    //     //Getting data from json placeholder pool as an example here:
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     /*
    //     * Since .get is an asyncronious function, we need the '.then' function followed:
    //     */
    //     .then(res => {
    //         console.log(res);
    //         this.setState({
                
    //             /*
    //             * fetching posts from the url above into the res (response) variable. 
    //             * Also, we're slicing only 10 out od the 100 posts available in this example!
    //             */
    //             posts: res.data.slice(0,9) 
    //         })
    //     });
    // }
    /* End of previous code */
    render() {
        const { posts } = this.props;
        /* Check if there's any data inside the posts array:  */
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A logo"/>
                        <div className="card-content">
                            <Link to={'/' + post.id /* link of the post we clicked on its title*/}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet. </div>
        );
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                <p>
                    {postList}
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home);