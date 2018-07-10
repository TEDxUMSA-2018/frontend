import React from 'react';
import ReactQuill from 'react-quill';
import moment from 'moment';
import 'react-quill/dist/quill.snow.css';
import BlogPost from '../BlogPost';

import {SectionTitle} from '../../../common';
import {database} from '../../../firebase';

moment.locale('es');
class BlogAdmin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentSection: 'list',

            title: '',
            body: '',
            published: true,
            posts: {}
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.iframeElement = React.createRef();
    }

    componentDidMount(){
        database.on('value', snapshot => {
            this.setState({
                posts: snapshot.val() ? snapshot.val() : []
            })
        });
    }
    render() {
        const {currentSection} = this.state;
        return (
            <React.Fragment>
                <SectionTitle 
                    title="Blog Admin"
                    background="pink"
                />
                <div className="container">
                    <div className="columns">
                        { this._get_sidebar() }
                        <div className="column is-9">
                            { currentSection === 'list'
                                ? this._get_list()
                                : currentSection === 'form'
                                    ? this._get_form()
                                    : this._get_tags()
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    // DOM
    _get_sidebar = () => (
        <div className="column is-3">
            <aside className="menu">
                <p className="menu-label">Posts del blog</p>
                <ul className="menu-list">
                    <li onClick={() => this.onChangeSelectedSection('list')}>
                        <a className={`${this.state.currentSection === 'list' ? 'is-active' : ''}`}>Lista</a>
                    </li>
                    <li onClick={() => this.onChangeSelectedSection('form')}>
                        <a className={`${this.state.currentSection === 'form' ? 'is-active' : ''}`}>Crear entrada</a>
                    </li>
                    <li onClick={() => this.onChangeSelectedSection('tag')}>
                        <a className={`${this.state.currentSection === 'tag' ? 'is-active' : ''}`}>Tags</a>
                    </li>
                </ul>
            </aside>
        </div>
    );

    _get_list = () => {
        return (
            <table className="table" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(this.state.posts).map((post, index) => {
                        const currentPost = this.state.posts[post];
                        return (
                            <tr key={`post-${index}`}>
                                <td>{currentPost.title}</td>
                                <td>{currentPost.publishedDate ? moment(currentPost.publishedDate).format("DD MMM YYYY, HH:MM") : '-'}</td>
                                <td>{currentPost.published ? 'Publicado' : 'Borrador'}</td>
                                <td>
                                    <div className="buttons has-addons">
                                        <a className="button is-small" onClick={() => this.onEditPost(currentPost)}>
                                            <span className="icon is-small"><i className="fas fa-edit"></i></span>
                                        </a>
                                        <a className="button is-small">
                                            <span className="icon is-small"><i className="fas fa-trash"></i></span>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        );
                    } )}   
                </tbody>
            </table>
        );
    };

    _get_form = () => (
        <React.Fragment>
            <div className="field">
                <label className="label">Título</label>
                <div className="control">
                    <input onChange={this.onInputChange} className="input" type="text" />
                </div>
            </div>
            <div className="field">
                <label className="label">Contenido</label>
                <div className="control">
                    <ReactQuill
                        modules={BlogAdmin.modules}
                        formats={BlogAdmin.formats}
                        value={this.state.body}
                        placeholder="Body" 
                        onChange={this.onEditorChange} 
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Publicar</label>
                <div className="control">
                    <div className="select">
                    <select name="published" onChange={this.onPublishedChanged}>
                        <option value='published'>Publicar post</option>
                        <option value='draft'>Guardar borrador</option>
                    </select>
                    </div>
                </div>
            </div>
            <div className="field is-grouped is-grouped-right">
                <div className="control">
                    <button onClick={this.handleSubmit} className="button is-link">Guardar</button>
                </div>
                <div className="control">
                    <button className="button is-text">Cancelar</button>
                </div>
            </div>
        </React.Fragment>
    )

    _get_tags = () => (
        <div>
            TAGS
        </div>
    )

    // 
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

    onPublishedChanged = event => {
        this.setState({
            published: event.target.value === 'published'
        });
    }

    onChangeSelectedSection = sectionSelected => {
        const { currentSection } = this.state;
        if(currentSection !== sectionSelected) {
            this.setState({
                currentSection: sectionSelected
            });
        }
    }

    onEditPost = post => {
        this.setState({
            
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("state", this.state);
        const post = {
            title: this.state.title,
            body: this.state.body,
            published: this.state.published,
            publishedDate: this.state.published ? moment().format() : null
        }
        database.push(post);
        this.setState({
            title: '',
            body: '',
            published: true
        });
    }
}

BlogAdmin.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ 'size': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'video'],
        ['clean']
    ]
};

BlogAdmin.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'color',
    'background',
    'align',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'clean'
];

export default BlogAdmin;