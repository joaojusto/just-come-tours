import React from 'react';
import classNames from 'classnames';

import '../css/Grid';

const Grid = ({ children, offset }) => {
  const className = classNames({
    Grid,
    'Grid--1ColumnOffset': offset == 1,
    [`Grid--${offset}ColumnsOffset`]: offset > 0 && offset >= 2
  });

  return <div className={className}>{children}</div>;
};

export default Grid;

export const GridColumn = ({ children, size, background, left, right }) => {
  const className = classNames({
    'Grid-column': !background && size == 1,
    'Grid-backgroundColumn': background && size == 1,
    [`Grid-${size}columns`]: !background && size >= 2,
    [`Grid-${size}BackgroundColumns`]: background && size >= 2,
    [`left-${left}Columns`]: background && left,
    [`right-${right}Columns`]: background && right,
  });

  return <div className={className}>{children}</div>;
}
