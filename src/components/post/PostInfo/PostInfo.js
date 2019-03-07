import React from 'react';
import styles from './PostInfo.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import moment from 'moment';

const cx = classNames.bind(styles);


const PostInfo = ({publishedDate, title, tags}) => (
    <div className={cx('post-info')}>
        <div className={cx('info')}>
            <h1>{title}</h1>
            <div className={cx('tags')}>
                {
                    // 나는 스트링으로 올려서그래 
                    tags && [...new Set(tags.split(',').map(tag => tag.trim()))].map (
                        tag => <Link key={tag} to={`/tag/${tag}`}> #{tag}</Link>
                    )
                }
            </div>
            <div className={cx('date')}>{moment(publishedDate).format('ll')}</div>
        </div>
    </div>
)

export default PostInfo;