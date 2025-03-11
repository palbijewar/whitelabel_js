import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { TextField, Button, Container, Paper, Typography, MenuItem } from '@mui/material';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      pan: '',
      dematNumber: '',
      depository: '',
      mobile: '',
      errors: {}
    };
  }

  validateForm = () => {
    const { fullName, pan, dematNumber, depository, mobile } = this.state;
    let errors = {};
    let isValid = true;

    if (!fullName.trim()) {
      errors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (!pan.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)) {
      errors.pan = 'Invalid PAN format (e.g., ABCDE1234F)';
      isValid = false;
    }

    if (dematNumber.length < 8 || dematNumber.length > 16) {
      errors.dematNumber = 'Demat Account Number must be between 8-16 digits';
      isValid = false;
    }

    if (!depository) {
      errors.depository = 'Depository is required';
      isValid = false;
    }

    if (!mobile.match(/^[6-9]\d{9}$/)) {
      errors.mobile = 'Invalid mobile number (10 digits required)';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      console.log('Demat Account Data:', this.state);
      alert('Form submitted successfully!');
    }
  };

  render() {
    const { intl } = this.props;
    const { errors } = this.state;
    const title = `${brand.name} - UI Elements`;
    const description = brand.desc;

    return (
      <Container maxWidth="sm">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>

        <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
          <Typography variant="h5" gutterBottom>
            Demat Account Details
          </Typography>

          <form onSubmit={this.handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              margin="normal"
              name="fullName"
              onChange={this.handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
            />

            <TextField
              fullWidth
              label="PAN Number"
              variant="outlined"
              margin="normal"
              name="pan"
              onChange={this.handleChange}
              error={!!errors.pan}
              helperText={errors.pan}
            />

            <TextField
              fullWidth
              label="Demat Account Number"
              variant="outlined"
              margin="normal"
              name="dematNumber"
              onChange={this.handleChange}
              error={!!errors.dematNumber}
              helperText={errors.dematNumber}
            />

            <TextField
              select
              fullWidth
              label="Depository"
              variant="outlined"
              margin="normal"
              name="depository"
              onChange={this.handleChange}
              error={!!errors.depository}
              helperText={errors.depository}
            >
              <MenuItem value="NSDL">NSDL</MenuItem>
              <MenuItem value="CDSL">CDSL</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Mobile Number"
              variant="outlined"
              margin="normal"
              name="mobile"
              onChange={this.handleChange}
              error={!!errors.mobile}
              helperText={errors.mobile}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    );
  }
}

Cards.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(Cards);
