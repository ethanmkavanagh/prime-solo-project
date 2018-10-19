import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">Prime Solo Project</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {props.user.id && (
        <>
          <Link className="nav-link" to="/info">
            Info Page
          </Link>
          <LogOutButton className="nav-link"/>
        </>
      )}
      <Link className="nav-link" to="/about">
        About
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
