import { useState, useEffect } from 'react';
import { Box, type BoxProps, IconButton } from '@mui/material';
import { random } from 'lodash';
import styles from '@assets/styles/custom.module.css';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { CloseFullscreen } from '@mui/icons-material';

interface PolaroidProps {
  src: string[];
  caption: string[];
}

interface PolaroidWrapperProps extends BoxProps {
  caption: string;
}

const PolaroidWrapper = (props : PolaroidWrapperProps): JSX.Element => {
  const {children, ...attr} = props;

  return <Box {...attr}>{children}</Box>;
};

export const Polaroid = (props: PolaroidProps): JSX.Element => {
  const [isGalleryShown, setShowGallery] = useState(false);
  const {src, caption, ...attr} = props;

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setShowGallery(false);
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  const handleGalleryClose = ():void => {
    setShowGallery(false);
  };

  if (isGalleryShown) {
    return (
      <Carousel
        images={src.map((image) => ({ src: image }))}
        isMaximized
        hasThumbnails={false}
        hasMediaButtonAtMax={false}
        minIcon={
          <IconButton onClick={handleGalleryClose}>
            <CloseFullscreen />
          </IconButton>
        }
      />
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        height: '34rem',
        zIndex: 0,
        marginTop: '2rem',
      }}
      onClick={() => { setShowGallery(true); }}
    >
      {src.map((value: string, index: number) => (
        <PolaroidWrapper
          className={styles.polaroid}
          {...attr}
          caption={caption[index]}
          sx={{
            userSelect: 'none',
            transform: `rotate(${random(index * 20) + random(20)}deg) translate(${random(
              index * 29
            )}%, 1%)`,
            zIndex: index,
            position: 'absolute',
            top: 0,
            left: '2rem',
          }}
          key={`${caption[index]}-${index}`}
        >
          <img src={value} alt={caption[index]} title={caption[index]} />
        </PolaroidWrapper>
      ))}
    </div>
  );
};