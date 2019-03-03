import React from 'react';
import styles from './PreviewPane.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);



const PreviewPane = () => (
    <div className={cx('post-body')}>
        <div className={cx('paper')}>
            내용
        </div>
     
    </div>
)

export default PreviewPane;