import { Typography, TypographyProps } from '@mui/material';
// import styles from '@assets/styles/styles.module.css';

export const Logo = (props: TypographyProps): JSX.Element => {
  return (
    <Typography fontFamily={'Bungee, sans-serif'} fontWeight='600' {...props}>
      SP45
    </Typography>
  );
};
