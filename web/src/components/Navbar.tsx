import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import { MenuItem } from '../App';

type Props = {
  name: string;
  menu: MenuItem[];
  activeId: string | null;
  logoSrc?: string; // optional logo path
};

const APPBAR_HEIGHT = { xs: 64, md: 72 };

export default function Navbar({ name, menu, activeId, logoSrc = '/assets/logo-mark.png' }: Props) {
  const [open, setOpen] = React.useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  const handleNav = (to: string) => {
    const id = to.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - (window.innerWidth < 900 ? APPBAR_HEIGHT.xs : APPBAR_HEIGHT.md);
      window.scrollTo({ top: y, behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ py: 1, backdropFilter: trigger ? 'saturate(120%) blur(6px)' : 'none' }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            minHeight: { xs: APPBAR_HEIGHT.xs, md: APPBAR_HEIGHT.md },
            px: { xs: 1.5, md: 2 },
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'rgba(255,255,255,0.22)',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.2)',
            backgroundColor: 'rgba(60, 45, 122, 0.85)',
            color: 'common.white',
          }}
        >
          <Toolbar disableGutters sx={{ gap: 2, pr: 0, minHeight: 'unset', flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: { xs: 1, md: 0 } }}>
              <Box sx={{ width: 34, height: 34, borderRadius: '50%', overflow: 'hidden', display: 'inline-flex', border: '2px solid rgba(255,255,255,0.6)' }}>
                <img src={logoSrc} alt={`${name} logo`} width={34} height={34} style={{ display: 'block', objectFit: 'cover' }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                {name}
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto', alignItems: 'center', gap: 1 }}>
              {menu.map((item) => {
                if (item.variant === 'button') {
                  return (
                    <Button
                      key={item.label}
                  variant="contained"
                  color="secondary"
                      onClick={() => handleNav(item.to)}
                  sx={{ borderRadius: 2, boxShadow: 'none' }}
                      >
                        {item.label}
                      </Button>
                    );
                  }
                  const id = item.to.replace('#', '');
                  const isActive = activeId === id;
                  return (
                    <Button
                      key={item.label}
                color="inherit"
                      onClick={() => handleNav(item.to)}
                      sx={{
                        position: 'relative',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          left: 8,
                          right: 8,
                    bottom: 4,
                          height: 3,
                          borderRadius: 2,
                    bgcolor: isActive ? 'accent.main' : 'transparent',
                          transition: 'all 200ms ease',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <IconButton color="inherit" onClick={() => setOpen(true)} aria-label="open menu">
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 280 }} role="presentation" onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)}>
                  <List>
                    {menu.map((item) => (
                      <ListItem key={item.label} disablePadding>
                        <ListItemButton onClick={() => handleNav(item.to)}>
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}
