import { Box, type BoxProps, Button } from '@mui/material';

interface DisplayCardProps extends BoxProps {
  useCardPadding?: boolean;
  buttonText: string;
  buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonColor?:
    | 'inherit'
    | 'secondary'
    | 'primary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
}

export const DisplayCard = (props: DisplayCardProps): JSX.Element => {
  const {
    useCardPadding = false,
    children,
    buttonText,
    paddingX,
    paddingY,
    buttonColor,
    buttonOnClick,
    ...attr
  } = props;

  return (
    <Box {...attr}>
      <Box
        display={'flex'}
        alignItems='center'
        justifyContent={'center'}
        flexDirection='column'
        marginX={useCardPadding ? '2rem' : paddingX}
        marginY={useCardPadding ? '4rem' : paddingY}
      >
        {children}
        <Button
          size='large'
          variant='contained'
          onClick={(x) => {
            if (buttonOnClick !== undefined) buttonOnClick(x);
          }}
          color={buttonColor}
          sx={{
            borderRadius: '2rem',
            paddingX: '2rem',
            paddingY: '1rem',
            marginTop: '4rem',
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};
