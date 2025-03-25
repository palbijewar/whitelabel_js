import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock } from 'enl-components';
import { injectIntl } from 'react-intl';
import {
  Button, TextField, Stack, CircularProgress
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import messages from './messages';

function UpdateUser(props) {
  const { intl } = props;
  const title = brand.name + ' - Edit Profile';
  const description = brand.desc;
  const location = useLocation();
  const { name, email, phone } = location.state || {};

  const [formData, setFormData] = useState({
    name,
    email,
    phone
  });

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      navigate('/app/pages/user-profile');
    } catch (error) {
      console.error('Update error:', error);
    } finally {
      setLoading(false);
    }
    // Send `formData` to backend API here
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <PapperBlock
        title={intl.formatMessage(messages.editProfileTitle || { id: 'user.edit.title', defaultMessage: 'Edit Profile' })}
        icon="account_circle"
        desc={intl.formatMessage(messages.editProfileDesc || { id: 'user.edit.desc', defaultMessage: 'Update your basic information' })}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Name"
              fullWidth
              value={formData.name}
              onChange={handleChange('name')}
              variant="outlined"
              required
            />
            <TextField
              label="Email"
              fullWidth
              value={formData.email}
              onChange={handleChange('email')}
              variant="outlined"
              required
            />
            <TextField
              label="Phone Number"
              fullWidth
              value={formData.phone}
              onChange={handleChange('phone')}
              variant="outlined"
              required
            />
            <Button variant="contained" color="primary" type="submit" disabled={loading}
              startIcon={loading && <CircularProgress size={20} />}>
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </Stack>
        </form>
      </PapperBlock>
    </div>
  );
}

UpdateUser.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(UpdateUser);
