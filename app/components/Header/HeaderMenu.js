import React, {
  Fragment,
  useState,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { NavLink, Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import logo from 'enl-images/logo.svg';
import brand from 'enl-api/dummy/brand';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import link from 'enl-api/ui/link';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import AccountCircle from '@mui/icons-material/AccountCircle';
import dummy from 'enl-api/dummy/dummyContents';
import MenuIcon from '@mui/icons-material/Menu';
import InvertColors from '@mui/icons-material/InvertColorsOutlined';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import SelectLanguage from '../SelectLanguage';
import SidebarContent from '../Sidebar/SidebarContent';
import DropListMenu from './DropListMenu';
import MegaMenu from './MegaMenu';
import UserMenu from './UserMenu';
import useStyles from './header-jss';
import SearchUi from '../Search/SearchUi';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <Link to={props.to} {...props} />; // eslint-disable-line
});

function HeaderMenu(props) { // eslint-disable-line
  const {
    changeMode, type, dataMenu,
    history, mode,
    toggleDrawerOpen, openMobileNav,
    isLogin, userAttr, signOut,
    loadTransition, logoLink,
  } = props;
  const { classes, cx } = useStyles();
  const lgUp = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery(theme => theme.breakpoints.down('lg'));

  const [status, setStatus] = useState(dummy.user.status);
  const [anchorEl, setAnchorEl] = useState(null);
  const [fixed, setFixed] = useState(false);

  // Initial menu ui
  let flagFixedMenu = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixedMenu = (scroll > 64);
    if (flagFixedMenu !== newFlagFixedMenu) {
      setFixed(newFlagFixedMenu);
      flagFixedMenu = newFlagFixedMenu;
    }
  };

  const turnMode = newMode => {
    if (newMode === 'light') {
      changeMode('dark');
    } else {
      changeMode('light');
    }
  };

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeStatus = newStatus => {
    setStatus(newStatus);
    handleClose();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      className={
        cx(
          classes.appBar,
          classes.attachedbar,
          fixed ? classes.fixed : ''
        )
      }
    >
      <div className={classes.appMenu}>
        {!lgUp && (
          <Box display="flex" alignItems="center">
            <IconButton
              className={classes.menuButton}
              aria-label="Menu"
              onClick={toggleDrawerOpen}
              size="large">
              <MenuIcon />
            </IconButton>
          </Box>
        )}
        {!lgDown && (
          <>
            <NavLink to={logoLink} className={classes.brand}>
              <img src={logo} alt={brand.name} />
              {brand.name}
            </NavLink>
            <div className={classes.headerProperties}>
              <div className={cx(classes.headerAction, classes.invert)}>
                <Tooltip title="Turn Dark/Light" placement="bottom">
                  <IconButton className={classes.button} onClick={() => turnMode(mode)} size="large">
                    <InvertColors />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </>
        )}
        <Toolbar>
          <SelectLanguage />
          {isLogin
            ? <UserMenu signOut={signOut} avatar={userAttr.avatar} />
            : (
              <Button
                color="primary"
                className={classes.buttonTop}
                component={LinkBtn}
                to={link.login}
                variant="contained"
              >
                <AccountCircle />
                <FormattedMessage {...messages.login} />
              </Button>
            )
          }
        </Toolbar>
      </div>
      {!lgDown && (
        <Fragment>
          { type === 'mega-menu' ? <MegaMenu dataMenu={dataMenu} /> : <DropListMenu dataMenu={dataMenu} />}
        </Fragment>
      )}
      {!lgUp && (
        <SwipeableDrawer
          onClose={toggleDrawerOpen}
          onOpen={toggleDrawerOpen}
          open={!openMobileNav}
          anchor="left"
        >
          <div className={classes.swipeDrawerPaper}>
            <SidebarContent
              drawerPaper
              leftSidebar
              toggleDrawerOpen={toggleDrawerOpen}
              loadTransition={loadTransition}
              dataMenu={dataMenu}
              status={status}
              anchorEl={anchorEl}
              openMenuStatus={handleOpen}
              closeMenuStatus={handleClose}
              changeStatus={handleChangeStatus}
              isLogin={isLogin}
              userAttr={userAttr}
            />
          </div>
        </SwipeableDrawer>
      )}
    </AppBar>
  );
}

HeaderMenu.propTypes = {
  type: PropTypes.string.isRequired,
  dataMenu: PropTypes.array.isRequired,
  openMobileNav: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  userAttr: PropTypes.object.isRequired,
  changeMode: PropTypes.func.isRequired,
  openGuide: PropTypes.func.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  logoLink: PropTypes.string,
  isLogin: PropTypes.bool
};

HeaderMenu.defaultProps = {
  isLogin: false,
  logoLink: '/',
};

export default injectIntl(HeaderMenu);
