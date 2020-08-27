import React from 'react';
import { cx } from 'emotion';

const Container = function ({ children, className, style = {} }) {
    return (
        <div style={style} className={cx('layout-container', className)}>
            {children}
        </div>
    );
};
export default Container;
