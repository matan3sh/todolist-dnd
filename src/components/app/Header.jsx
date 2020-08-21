import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const Header = ({ list }) => {
  return (
    <div className='header'>
      <div>
        <i className='fas fa-long-arrow-alt-left'></i>
      </div>
      <div className='date'>
        <p>
          <Moment format='dddd, MMM Do YY'>{Date.now()}</Moment>
        </p>
        <span>{list?.length} tasks</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.mainApp.list,
});

export default connect(mapStateToProps, null)(Header);
