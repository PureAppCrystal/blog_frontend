import React from 'react';
import styles from './PostBody.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);



const PostBody = () => (
    <div className={cx('post-body')}>
        <div className={cx('paper')}>
            내용
        </div>
     
    </div>
)

export default PostBody;