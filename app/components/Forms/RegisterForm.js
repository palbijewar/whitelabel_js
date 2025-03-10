import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Icon from '@mui/material/Icon';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { injectIntl, FormattedMessage } from 'react-intl';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Cookies from 'js-cookie';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import MessagesForm from './MessagesForm';
import messages from './messages';
import useStyles from './user-jss';
import { signUpUser, loginService } from '../../middlewares/interceptors';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  mobile: yup.string().required('Phone number is required'),
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup
    .string()
    .required('Re-type Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} />; // eslint-disable-line
});

function RegisterForm(props) {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const mdUp = useMediaQuery(theme => theme.breakpoints.up('md'));

  const { link, intl, messagesAuth, closeMsg } = props;

  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setServerMessage(null);

      try {
        const signupResponse = await signUpUser({
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          user_type: 'regular', 
          password: values.password,
        });

        if (signupResponse?.status === 'success') {
          const loginResponse = await loginService({
            username: values.email,
            password: values.password,
          });

          Cookies.set('access_token', loginResponse.access_token, { expires: 7 });

          setServerMessage({ type: 'success', text: 'Registration successful! Redirecting...' });

          setTimeout(() => navigate('/dashboard'), 2000);
        } else {
          throw new Error(signupResponse?.message || 'Signup failed. Please try again.');
        }
      } catch (error) {
        setServerMessage({
          type: 'error',
          text: error.response?.data?.message || 'Registration failed. Try again.',
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Paper className={classes.sideWrap}>
      {!mdUp && (
        <div className={classes.headLogo}>
          <NavLink to="/" className={classes.brand}>
            <img src={logo} alt={brand.name} />
            {brand.name}
          </NavLink>
        </div>
      )}
      <div className={classes.topBar}>
        <Typography variant="h4" className={classes.title}>
          <FormattedMessage {...messages.register} />
        </Typography>
        <Button size="small" className={classes.buttonLink} component={LinkBtn} to={link}>
          <Icon className={cx(classes.icon, classes.signArrow)}>arrow_forward</Icon>
          <FormattedMessage {...messages.toAccount} />
        </Button>
      </div>

      {/* ✅ Show API response messages */}
      {serverMessage && (
        <MessagesForm
          variant={serverMessage.type}
          className={classes.msgUser}
          message={serverMessage.text}
          onClose={() => setServerMessage(null)}
        />
      )}

      <section>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <FormControl variant="standard" className={classes.formControl}>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="standard"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl variant="standard" className={classes.formControl}>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="standard"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl variant="standard" className={classes.formControl}>
              <TextField
                id="mobile"
                name="mobile"
                label="Phone Number"
                variant="standard"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
                className={classes.field}
              />
            </FormControl>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" className={classes.formControl}>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  variant="standard"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  className={classes.field}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" className={classes.formControl}>
                <TextField
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  type="password"
                  label="Re-type Password"
                  variant="standard"
                  value={formik.values.passwordConfirmation}
                  onChange={formik.handleChange}
                  error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                  helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                  className={classes.field}
                />
              </FormControl>
            </Grid>
          </Grid>

          <div className={classes.btnArea}>
            <Button variant="contained" fullWidth disabled={loading} color="primary" type="submit">
              {loading ? <CircularProgress size={24} className={classes.buttonProgress} /> : 'Sign Up'}
              {!loading && <ArrowForward className={cx(classes.rightIcon, classes.iconSmall, classes.signArrow)} />}
            </Button>
          </div>
        </form>
      </section>
    </Paper>
  );
}

RegisterForm.propTypes = {
  intl: PropTypes.object.isRequired,
  messagesAuth: PropTypes.string,
  closeMsg: PropTypes.func,
  loading: PropTypes.bool,
  submitForm: PropTypes.func.isRequired,
  googleAuth: PropTypes.func,
  twitterAuth: PropTypes.func,
  githubAuth: PropTypes.func,
  link: PropTypes.string,
};

RegisterForm.defaultProps = {
  messagesAuth: null,
  loading: false,
  closeMsg: () => {},
  googleAuth: () => {},
  twitterAuth: () => {},
  link: '#'
};

export default injectIntl(RegisterForm);
