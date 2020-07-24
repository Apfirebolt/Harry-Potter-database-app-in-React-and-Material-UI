import React from 'react';
import PropTypes from 'prop-types';

import './mainStyles.scss';

export default function PaginationComponent(props) {
  let loopIterator = () => {
    return (
      <ul>
        {Array.from(Array(props.pageTotal), (e, i) => {
          return <li key={i} value={i+1} onClick={props.changePageNumber}>{i+1}</li>
        })}
      </ul>
    )

  }
  return (
    <React.Fragment>
      <div className="pagination_container">
        {loopIterator()}
      </div>
    </React.Fragment>
  );
}

PaginationComponent.propTypes = {
  pageTotal: PropTypes.number.isRequired,
  changePageNumber: PropTypes.func.isRequired
};
