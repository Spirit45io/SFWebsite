import { Box, type BoxProps } from '@mui/material';

interface ImageBoxProps extends BoxProps {
  src: string;
}

export const RowImageBox = (props: ImageBoxProps): JSX.Element => {
  return (
    <Box
      {...props}
      sx={{
        backgroundImage: `url(${props.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    />
  );
};
