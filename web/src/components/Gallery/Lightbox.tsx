import React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GalleryItem } from '../../data/gallery';

type Props = {
  items: GalleryItem[];
  index: number;
  open: boolean;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export default function Lightbox({ items, index, open, onClose, onIndexChange }: Props) {
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') onIndexChange((index + 1) % items.length);
      if (e.key === 'ArrowLeft') onIndexChange((index - 1 + items.length) % items.length);
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, index, items.length, onIndexChange]);

  const item = items[index];
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" aria-labelledby="lightbox-title">
      <Box sx={{ position: 'relative', bgcolor: 'black' }}>
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8, color: 'white', zIndex: 2 }} aria-label="Close">
          <CloseIcon />
        </IconButton>
        <IconButton
          onClick={() => onIndexChange((index - 1 + items.length) % items.length)}
          sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', color: 'white', zIndex: 2 }}
          aria-label="Previous"
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={() => onIndexChange((index + 1) % items.length)}
          sx={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', color: 'white', zIndex: 2 }}
          aria-label="Next"
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'black' }}>
          <img src={item.src} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography id="lightbox-title" variant="subtitle1">
          {item.caption || item.alt}
        </Typography>
      </Box>
    </Dialog>
  );
}

