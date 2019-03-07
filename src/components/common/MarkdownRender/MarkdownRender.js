import React, { Component } from 'react';
import styles from './MarkdownRender.scss';
import classNames from 'classnames/bind'
//
import marked from 'marked';
//
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';

const cx = classNames.bind(styles);

class MarkdownRender extends Component {
    state ={
        html: ''
    }

    constructor(props) {
        super(props);
        const { markdown } = props;
        // 서버사이드 렌더링에서도 마크다운 처리가 되도록 생성자 쪽에서도 구현
        this.state = {
            html: markdown ? marked(props.markdown, { breaks: true, sanitize: true}) : ''
        }
    }

    renderMarkdown =() =>{
        const {markdown } = this.props;
        //마크다운이 존재하지 않는다면 공백
        if(!markdown) {
            this.setState({html:''});
            return;
        }

        this.setState({
            html: marked(markdown, {
                break: true,    // dlfqks dpsxjfh to wnf dlqfur
                sanitize: true  //마크다운 내부 html 무시
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        //markdown 값이 변경되면 renderMarkdown 을 호출합니다.
        if(prevProps.markdown !== this.props.markdown ) {
            this.renderMarkdown();
        }

        // state가 바뀌면 코드 하이라이팅
        if(prevState.html !== this.state.html) {
            Prism.highlightAll();
        }
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        const { html } = this.state;

        // React에서 html을 렌더링하려면 객체를 만들어 내부에 __html 값을 설정해야한다.
        const markup = {
            __html: html
        }

        return (
            <div
                className={cx('markdown-render')} 
                dangerouslySetInnerHTML={markup}
            >

            </div>
        )
    }

    
}

export default MarkdownRender;