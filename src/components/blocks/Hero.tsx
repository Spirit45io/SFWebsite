import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useScrollBy } from 'react-use-window-scroll';
import { type Rect, useRect } from 'react-use-rect';

interface HeroProps {
  children: React.ReactNode;
  bgColor: string;
  bgImage: string;
  color?: string;
  banner?: React.ReactNode;
  iconCaption?: React.ReactNode;
}

export const Hero = (props: HeroProps): JSX.Element => {
  const [rect, setRect] = React.useState<Rect | null>(null);
  const [scrolling, setScrolling] = React.useState<number>(0);
  const [currentY, setCurrentY] = React.useState<number>(0);
  const [rectRef] = useRect(setRect);
  const scrollBy = useScrollBy();

  React.useEffect(() => {
    const onScroll = (event: Event): void => {
      const target = event.target as Document;
      setScrolling(target?.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);
    setCurrentY(window.scrollY);
    return () => { window.removeEventListener('scroll', onScroll); };
  }, [scrolling]);

  return (
    <Box
      width='full'
      bgcolor={props.bgColor}
      height='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      alignItems='center'
      color={props.color ?? 'inherit'}
      ref={rectRef}
    >
      <Box
        sx={{
          backgroundImage: 'url("https://pixabay.com/photos/workspace-coffee-laptop-macbook-1280538/")',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%'
        }}  
      />

      <Box>{props.banner}</Box>
      {props.children}
      <Box
        marginBottom='1.2rem'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        {props.iconCaption}
        <div>
          <IconButton
            sx={{
              border: '2px solid rgba(255,255,255,0.8)',
            }}
            title='clickToNextComponent'
            onClick={() =>
              { scrollBy({
                top: rect !== null ? rect.height - currentY : 500 - currentY,
                left: 0,
                behavior: 'smooth',
              }); }
            }
          >
            <ExpandMore />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};
