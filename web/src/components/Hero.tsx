import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Section from './Section';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

export default function Hero() {
  const scrollTo = (id: string) => () => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - (window.innerWidth < 900 ? 64 : 72);
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <Section id="hero">
      <Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ minHeight: { xs: '100vh', md: '100vh' } }}>
        <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Box sx={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateX(0)' : 'translateX(-24px)', transition: 'opacity 600ms ease, transform 600ms ease' }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 900, color: 'primary.main', mb: 2 }}>
            Hi, I’m Deepak
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
            Creative and detail-oriented Graphic Designer with 4+ years of experience crafting branding, marketing campaigns,
            social media content, and print media assets. Proficient in Adobe Creative Suite (Photoshop, Illustrator, InDesign)
            and UI/UX basics with Figma, with expertise in typography, layout design, and visual concepts. Demonstrated ability
            to deliver high-impact designs that enhance brand identity and engagement. Skilled in managing multiple projects
            with precision and meeting deadlines without compromising creativity.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Button
              component="a"
              href={encodeURI('/assets/resume/Resume.pdf')}
              download
              variant="contained"
              color="secondary"
            >
              Download Resume
            </Button>
          </Box>
          <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <IconButton
              aria-label="Instagram"
              component="a"
              href="https://www.instagram.com/pixel.grafx_/?utm_source=qr&igsh=MWtkM253bHFvcWl4OA%3D%3D#"
              target="_blank"
              rel="noopener"
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                color: '#fff',
                background: 'linear-gradient(45deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)',
                boxShadow: '0 10px 24px rgba(0,0,0,0.15)',
              }}
            >
              <InstagramIcon fontSize="medium" />
            </IconButton>
            <IconButton
              aria-label="Email"
              component="a"
              href="mailto:pdeepakppm@gmail.com"
              rel="noopener"
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                color: '#fff',
                bgcolor: 'accent.main',
                boxShadow: '0 10px 24px rgba(0,0,0,0.15)',
                '&:hover': { bgcolor:'accent.main'},
              }}
            >
              <EmailIcon fontSize="medium" />
            </IconButton>
            <IconButton
              aria-label="WhatsApp"
              component="a"
              href="https://wa.me/qr/KBB5CS7QADKPP1"
              target="_blank"
              rel="noopener"
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                color: '#fff',
                bgcolor: '#25D366',
                boxShadow: '0 10px 24px rgba(0,0,0,0.15)',
               '&:hover': { bgcolor:'#25D366'},
              }}
            >
              <WhatsAppIcon fontSize="medium" />
            </IconButton>
          </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              width: '100%',
              aspectRatio: '1 / 1',
              borderRadius: '50%',
              border: '6px solid',
              borderColor: 'accent.main',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.default',
              mx: 'auto',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 700ms ease 120ms, transform 700ms ease 120ms',
            }}
          >
            <img
              src="/assets/logo-mark.png"
              alt="Avatar of Deepak"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
