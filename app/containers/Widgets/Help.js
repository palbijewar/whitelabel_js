import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Help() {
  return (
    <Box sx={{ textAlign: 'center', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Need Help?
      </Typography>
      <Typography variant="body1" display="flex" alignItems="center" justifyContent="center" gap={1}>
        <PhoneIcon />
        <Link href="tel:+1234567890" underline="hover">
          +918920400946
        </Link>
      </Typography>
      <Typography variant="body1" display="flex" alignItems="center" justifyContent="center" gap={1} mt={1}>
        <EmailIcon />
        <Link href="mailto:support@example.com" underline="hover">
        care@finbytechnovation.com
        </Link>
      </Typography>
    </Box>
  );
}

export default Help;
