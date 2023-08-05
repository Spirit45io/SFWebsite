import type React from 'react';

interface MailToProps {
  email: string;
  subject: string;
  margin: string;
  children?: React.ReactNode;
}

export const MailTo = (props: MailToProps): JSX.Element => {
  return (
    <a
      href={`mailto:${props.email}?subject=${props.subject}`}
      style={{
        marginLeft: props.margin,
        marginRight: props.margin,
        fontWeight: 600,
      }}
    >
      {props.children ?? props.email}
    </a>
  );
};
