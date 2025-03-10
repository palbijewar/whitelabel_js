import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate, NavLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Icon from '@mui/material/Icon';
import CircularProgress from '@mui/material/CircularProgress';
import { injectIntl, FormattedMessage } from 'react-intl';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Cookies from 'js-cookie';
import brand from 'enl-api/dummy/brand';
import MessagesForm from './MessagesForm';
import messages from './messages';
import useStyles from './user-jss';
import { loginService } from '../../middlewares/interceptors';

const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} />; // eslint-disable-line
});

function LoginForm(props) {
  const { classes, cx } = useStyles();
  const mdUp = useMediaQuery(theme => theme.breakpoints.up('md'));

  const { link, intl, messagesAuth, closeMsg } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState(null);

  const handleClickShowPassword = () => {
    setShowPassword(show => !show);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setServerMessage(null);

      try {
        const data = await loginService({
          username: values.username,
          password: values.password
        });

        setServerMessage({ type: 'success', text: 'Login successful!' });

        Cookies.set('access_token', data.token, { expires: 1 });
        setTimeout(() => Navigate('/dashboard'), 2000);
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'Invalid credentials';
        setServerMessage({ type: 'error', text: errorMessage });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Paper className={classes.sideWrap}>
      {!mdUp && (
        <div className={classes.headLogo}>
          <NavLink to="/" className={classes.brand}>{brand.name}</NavLink>
        </div>
      )}
      <div className={classes.topBar}>
        <Typography variant="h4" className={classes.title}>
          <FormattedMessage {...messages.login} />
        </Typography>
        <Button size="small" className={classes.buttonLink} component={LinkBtn} to={link}>
          <Icon className={cx(classes.icon, classes.signArrow)}>arrow_forward</Icon>
          <FormattedMessage {...messages.createNewAccount} />
        </Button>
      </div>

      {serverMessage && (
        <MessagesForm
          variant={serverMessage.type}
          className={classes.msgUser}
          message={serverMessage.text}
          onClose={() => setServerMessage(null)}
        />
      )}

      <section className={classes.pageFormSideWrap}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <FormControl variant="standard" className={classes.formControl}>
              <TextField
                id="username"
                name="username"
                label="Username"
                variant="standard"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl variant="standard" className={classes.formControl}>
              <TextField
                id="password"
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="standard"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                className={classes.field}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        size="large">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
          </div>
          <div className={classes.optArea}>
            <Button size="small" component={LinkBtn} to="/reset-password" className={classes.buttonLink}>
              <FormattedMessage {...messages.loginForgotPassword} />
            </Button>
          </div>
          <div className={classes.btnArea}>
            <Button variant="contained" disabled={loading} fullWidth color="primary" size="large" type="submit">
              {loading ? <CircularProgress size={24} className={classes.buttonProgress} /> : 'Login'}
              {!loading && <ArrowForward className={cx(classes.rightIcon, classes.iconSmall, classes.signArrow)} />}
            </Button>
          </div>
        </form>
      </section>
    </Paper>
  );
}

LoginForm.propTypes = {
  intl: PropTypes.object.isRequired,
  messagesAuth: PropTypes.string,
  loading: PropTypes.bool,
  closeMsg: PropTypes.func,
  submitForm: PropTypes.func.isRequired,
  link: PropTypes.string,
};

LoginForm.defaultProps = {
  messagesAuth: null,
  loading: false,
  closeMsg: () => {},
  link: '#'
};

export default injectIntl(LoginForm);
