import React from 'react';
import styles from './EditorHeader.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);



const EditorHeader = () => (
    <div className={cx('post-body')}>
        <div className={cx('paper')}>
            내용
        </div>
     
    </div>
)

export default EditorHeader;