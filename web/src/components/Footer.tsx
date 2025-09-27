import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadIcon from '@mui/icons-material/Download';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Footer() {
  const [showTop, setShowTop] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: '#fff', mt: 8, pt: 6, pb: 3, position: 'relative' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Deepak</Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
              Graphic Designer focused on branding, print, and digital assets — turning ideas into clear, compelling visuals.
            </Typography>
            <Button
              component="a"
              href={encodeURI('/assets/resume/Resume.pdf')}
              download
              variant="outlined"
              color="inherit"
              sx={{ borderColor: 'rgba(255,255,255,0.6)', color: '#fff', '&:hover': { borderColor: '#fff' } }}
            >
              Download Resume
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>Quick Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Hero</a>
              <a href="#gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Gallery</a>
              <a href="#tech" style={{ color: 'inherit', textDecoration: 'none' }}>Tech & Skills</a>
              <a href="#experience" style={{ color: 'inherit', textDecoration: 'none' }}>Experience</a>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>Connect</Typography>
            <Box>
              <IconButton color="inherit" component="a" href="https://www.instagram.com/pixel.grafx_/?utm_source=qr&igsh=MWtkM253bHFvcWl4OA%3D%3D#" target="_blank" rel="noopener" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" component="a" href="https://wa.me/qr/KBB5CS7QADKPP1" target="_blank" rel="noopener" aria-label="WhatsApp">
                <WhatsAppIcon />
              </IconButton>
              <IconButton color="inherit" component="a" href="https://linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
            <Box sx={{ mt: 1, display: 'grid', rowGap: 0.75 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <a href="tel:9003726520" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.95 }}>9003726520</a>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" />
                <a href="mailto:pdeepakppm@gmail.com" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.95 }}>pdeepakppm@gmail.com</a>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Typography variant="body2" sx={{ opacity: 0.95, textAlign: 'center', display: 'block', fontSize: { xs: 14, md: 16 } }}>
            © 2025 Designed and developed by webeez.in. All rights reserved.
          </Typography>
        </Box>
      </Container>

      {showTop && (
        <IconButton
          aria-label="Back to top"
          onClick={scrollTop}
          sx={{ position: 'fixed', bottom: 24, right: 24, bgcolor: 'secondary.main', color: 'primary.contrastText', '&:hover': { bgcolor: 'secondary.dark' } }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </Box>
  );
}
