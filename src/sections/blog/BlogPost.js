import React from 'react';

export default class BlogPost extends React.Component{
    componentDidMount() {
        const iframeElement = this.refs.blogPost;
        const document = iframeElement.contentDocument;
        document.body.innerHTML = this.props.content
    }
    
    render() {
        return (
            <iframe ref="blogPost" title="Blog Post" />
        )
    }
}