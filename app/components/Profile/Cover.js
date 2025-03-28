import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import Info from '@mui/icons-material/Info';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { injectIntl } from 'react-intl';
// import messages from './messages';
import { useNavigate } from 'react-router-dom';
import useStyles from './cover-jss';

const optionsOpt = ['Edit Profile'];

const ITEM_HEIGHT = 48;

function Cover(props) {
  const [anchorElOpt, setAnchorElOpt] = useState(null);

  const handleClickOpt = (event) => {
    setAnchorElOpt(event.currentTarget);
  };

  const navigate = useNavigate();

  const { classes } = useStyles();
  const {
    avatar, name, email, mobile, desc, coverImg
  } = props;

  const handleCloseOpt = (option) => {
    setAnchorElOpt(null);
    switch (option) {
      case 'Edit Profile':
        navigate('/app/pages/edit-profile', {
          state: {
            name,
            email,
            phone: mobile,
          },
        });
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={classes.cover}
      style={{ backgroundImage: `url(${coverImg})` }}
    >
      <div className={classes.opt}>
        <IconButton className={classes.button} aria-label="Delete" size="large">
          <Info />
        </IconButton>
        <IconButton
          aria-label="More"
          aria-owns={anchorElOpt ? 'long-menu' : null}
          aria-haspopup="true"
          className={classes.button}
          onClick={handleClickOpt}
          size="large"
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorElOpt}
          open={Boolean(anchorElOpt)}
          onClose={handleCloseOpt}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {optionsOpt.map((option) => (
            <MenuItem
              key={option}
              selected={option === 'Edit Profile'}
              onClick={() => handleCloseOpt(option)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div className={classes.content}>
        <Avatar alt={name} src={avatar} className={classes.avatar} />
        <Typography variant="h4" className={classes.name} gutterBottom>
          {name}
          <VerifiedUser className={classes.verified} />
        </Typography>
        <Typography className={classes.subheading} gutterBottom>
          {desc}
        </Typography>
        <Typography className={classes.name} gutterBottom>
          {email}
        </Typography>
        <Typography className={classes.name} gutterBottom>
          {mobile}
        </Typography>
        {/* <Button className={classes.button} size="large" variant="contained" color="secondary">
          <FormattedMessage {...messages.add_to_connection} />
        </Button> */}
      </div>
    </div>
  );
}

Cover.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  email: PropTypes.string,
  mobile: PropTypes.string,
};

export default injectIntl(Cover);
