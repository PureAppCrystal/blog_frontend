import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
//
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            <Header/>
            <main>
                {children}
            </main>아아하하하하
            <Footer/>
        </div>
    )
};

export default PageTemplate;