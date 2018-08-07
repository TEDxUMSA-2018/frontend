
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import BlogPost from './BlogPost';

import {SectionTitle} from '../../common';
import {database} from '../../firebase';

class Blog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
            posts: {}
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.iframeElement = React.createRef();
    }

    // componentDidMount(){
    //     database.on('value', snapshot => {
    //         this.setState({
    //             posts: snapshot.val()
    //         })
    //     });
    // }

    render() {
        return (
            <div className="blog-page">
                <SectionTitle 
                    title="Blog"
                    background="pink"
                />
                {this.getPost()}
            </div>
        );
    }

    getPost = () => {
        const { posts } = this.state;
        return Object.keys(posts).map((post, index) => {
            return (
                <BlogPost key={`post-${index}`} content={posts[post].body} />
            )
        })
    }

    onInputChange = event => {
        this.setState({
            title: event.target.value
        });
    }

    onEditorChange = event => {
        this.setState({
            body: event
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        database.push(post);
        this.setState({
            title: '',
            body: ''
        });
    }
}

export default Blog;