import { Typography } from '@mui/material';
import { Hero as HeroComponent, Row } from '@components';

const IconCaption = (): JSX.Element => {
  return <Typography variant='caption'>Learn More</Typography>;
};

export const Hero = (): JSX.Element => {
  // const { primary } = useTheme().palette;

  return (
    <HeroComponent
      bgColor={'rgba(200,123,43,1)'}
      color='white'
      iconCaption={<IconCaption />}
    >
      <Row id='HeroHome' flexDirection={'column'}>
        {/* <Logo variant='h1' fontSize={['4rem', '6rem', '8rem']} /> */}
        <Typography variant='subtitle1' fontSize={['0.9rem', '1.4rem']}>
          Smashing Feathers
        </Typography>
      </Row>
    </HeroComponent>
  );
};
