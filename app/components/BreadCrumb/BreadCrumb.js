import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './breadCrumb-jss';

const Breadcrumbs = (props) => {
  const { classes, cx } = useStyles();
  const {
    theme,
  } = props;

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
