import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { getAppVersion } from '../../../lib/config';

const Footer = () => {
  return (
    <Paper
      component="footer"
      sx={{
        position: 'fixed',
        width: '100%',
        bottom: 0,
        bgcolor: 'transparent',
        boxShadow: 'none',
        transition: 'none',
        padding: '10px',
      }}
    >
      <Typography sx={{ color: 'primary.main', textAlign: 'center' }}>version {getAppVersion()}</Typography>
    </Paper>
  );
};

export default Footer;
