import * as React from 'react';
import { Box, type BoxProps } from '@mui/material';
import { setHideOnMobile } from '@libs/setHideOnMobile';


interface RowProps extends BoxProps {
  hideOnMobile?: number[];
  children: React.ReactElement | React.ReactElement[];
  id: string;
}

export const Row = ({ id, children, hideOnMobile, justifyContent, ...attr }: RowProps): JSX.Element => {
  const editedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      key: `${id}-${index}`,
    });
  });

  return (
    <div id={id}>
      <Box
        paddingX={['1rem', '3rem']}
        {...attr}
        display='flex'
        flexWrap='wrap'
        justifyContent={editedChildren.length === 1 ? 'center' : justifyContent}
      >
        {hideOnMobile !== undefined && Array.isArray(editedChildren)
          ? setHideOnMobile(editedChildren, hideOnMobile)
          : editedChildren}
      </Box>
    </div>
  );
};