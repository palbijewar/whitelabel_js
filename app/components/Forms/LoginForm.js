import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
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
import { getUserDetails, loginService } from '../../middlewares/interceptors';

import { loginUser } from '../../redux/modules/auth';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) {
  return <NavLink to={props.to} {...props} />;
});

function LoginForm(props) {
  const { classes, cx } = useStyles();
  const dispatch = useDispatch();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const navigate = useNavigate();
  const { link } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState(null);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setServerMessage(null);
      try {
        const response = await loginService({
          username: values.email,
          password: values.password,
        });
        console.log('API Response:', response);
        const accessToken = response?.data?.data?.access_token || response?.data?.access_token;
        if (!accessToken) {
          throw new Error('Token missing in response');
        }
        Cookies.set('access_token', accessToken, { expires: 7 });
        const user = await getUserDetails();
        dispatch(
          loginUser(user.data)
        );
        navigate('/app/dashboard');
      } catch (error) {
        console.error('Login error:', error);
        setServerMessage({
          type: 'error',
          text: error.response?.data?.message || 'Invalid credentials',
        });
      } finally {
        setLoading(false);
      }
    }

  });

  return (
    <Paper className={classes.sideWrap}>
      {!mdUp && (
        <div className={classes.headLogo}>
          <NavLink to="/" className={classes.brand}>
            {brand.name}
          </NavLink>
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
                        size="large"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
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
  link: '#',
};

export default injectIntl(LoginForm);
