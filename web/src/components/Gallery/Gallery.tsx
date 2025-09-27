import * as React from 'react';
import { Box, Stack, Chip, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Section from '../Section';
import Lightbox from './Lightbox';
import { GALLERY, GALLERY_TAGS } from '../../data/gallery';

// Types inferred from data module
type Tag = (typeof GALLERY_TAGS)[number];

// Keyframes for marquee-style infinite scroll
const marquee = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* move by half because content is duplicated */
`;

export default function Gallery() {
  const theme = useTheme();
  const accent = theme.palette.secondary?.main || '#3c2d7a';

  // filters + state
  const [tag, setTag] = React.useState<Tag>('poster');
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const items = React.useMemo(
    () => (tag === 'all' ? GALLERY : GALLERY.filter((g) => g.tags?.includes(tag))),
    [tag]
  );

  // Dynamic animation duration based on content width (keeps consistent px/sec)
  const stripRef = React.useRef<HTMLDivElement | null>(null);
  const [duration, setDuration] = React.useState<string>('40s');

  React.useEffect(() => {
    // Wait for next tick so images can report dimensions (best-effort)
    const id = window.requestAnimationFrame(() => {
      const el = stripRef.current;
      if (!el) return;
      const halfWidth = el.scrollWidth / 2; // because list is duplicated
      const speedPxPerSec = 60; // tune this value for global speed
      const secs = Math.max(halfWidth / speedPxPerSec, 10);
      setDuration(`${secs}s`);
    });
    return () => cancelAnimationFrame(id);
  }, [items]);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  // Optional: manual nudge controls by toggling a paused state
  const [paused, setPaused] = React.useState(false);

  return (
    <Section id="gallery" title="Gallery" titleAlign="center">
      <Box sx={{ width: '100%', mb: 2 }}>
        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          <Typography color="text.secondary" sx={{ textAlign: 'center', fontSize: { xs: 16, md: 18 }, lineHeight: 1.7, m: 0 }}>
            Curated work across posters, branding, logos and product mockups — a quick look at recent projects and visual
            explorations.
          </Typography>
        </Box>
      </Box>

      {/* Filters */}
      <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" sx={{ mb: 4 }}>
        {GALLERY_TAGS.map((t) => {
          const active = t === tag;
          return (
            <Chip
              key={t}
              label={t === 'all' ? 'All' : t}
              onClick={() => setTag(t)}
              color={active ? 'secondary' : 'default'}
              variant={active ? 'filled' : 'outlined'}
              sx={{ borderRadius: 999, fontWeight: active ? 700 : 500, px: 1.5 }}
            />
          );
        })}
      </Stack>

      {/* Marquee container — no overflowX/Y, infinite auto-scroll, pause on hover */}
      <Box
        className="group"
        sx={{
          position: 'relative',
          overflow: 'hidden', // ✅ remove overflowX/overflowY scrollbars
          px: 2,
          pb: 2,
          // Pause on hover (the user's request): when the container is hovered, pause inner strip
          '&:hover .marquee': {
            animationPlayState: 'paused', // ✅ .group:hover pauses animation
          },
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Moving strip — render items twice for a seamless loop */}
        <Box
          ref={stripRef}
          className="marquee"
          sx={{
            display: 'flex',
            gap: 3,
            width: 'max-content',
            willChange: 'transform',
            animation: `${marquee} linear infinite`,
            animationDuration: duration,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {[...items, ...items].map((item, i) => (
            <Box
              key={`${item.id}-${i < items.length ? 'a' : 'b'}`}
              onClick={() => openAt(i % items.length)}
              sx={{
                minWidth: 300,
                borderRadius: 1,
                overflow: 'hidden',
                boxShadow: 4,
                cursor: 'pointer',
                backgroundColor: 'background.paper',
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block' }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Optional: keep arrows to temporarily pause/resume (no scrolling) */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        <IconButton
          onClick={() => setPaused((p) => !p)}
          sx={{ border: '1px solid', borderColor: 'divider' }}
          aria-label={paused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
        >
          {paused ? <ArrowForwardIosIcon fontSize="small" /> : <ArrowBackIosNewIcon fontSize="small" />}
        </IconButton>
      </Stack>

      <Lightbox items={items} index={index} open={open} onClose={() => setOpen(false)} onIndexChange={setIndex} />
    </Section>
  );
}
