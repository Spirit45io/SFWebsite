import { DisplayCard, Row } from '@components';
import { scrollTo } from '@libs/scrollTo';

const TestingBoxOne = (): JSX.Element => {
  return (
    <DisplayCard
      useCardPadding
      buttonText='Join Us'
      buttonColor='secondary'
      flexBasis={'50%'}
      onClick={() => { scrollTo({ id: 'shoutout', ref: null }); }}
    >
      Testing One
    </DisplayCard>
  );
};

const TestingBoxTwo = (): JSX.Element => {
  return (
    <DisplayCard
      useCardPadding
      buttonText='XXX'
      buttonColor='secondary'
      flexBasis={'50%'}
      onClick={() => { scrollTo({ id: 'shoutout', ref: null }); }}
    >
      Testing Two
    </DisplayCard>
  );
};

export const About = (): JSX.Element => {
  return (
    <Row minHeight='50vh' id={'about'}>
      <TestingBoxOne />
      <TestingBoxTwo />
    </Row>
  );
};
