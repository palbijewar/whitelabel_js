import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useStyles from './breadCrumb-jss';

const Breadcrumbs = (props) => {
  const { classes, cx } = useStyles();
  const {
    theme,
    separator,
    location
  } = props;

  let parts = location.pathname.split('/');
  const place = parts[parts.length - 1];
  parts = parts.slice(1, parts.length - 1);

  return (
    <section className={cx(theme === 'dark' ? classes.dark : classes.light, classes.breadcrumbs)}>
      <p>
        
      </p>
    </section>
  );
};

Breadcrumbs.propTypes = {

  location: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
  separator: PropTypes.string.isRequired,
};

export default Breadcrumbs;
