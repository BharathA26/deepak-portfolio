import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechSkills from './components/TechSkills/TechSkills';
import Gallery from './components/Gallery/Gallery';
import Experience from './components/Experience';
// Removed About and Contact sections per request
import Footer from './components/Footer';
import { theme } from './theme';
import useScrollSpy from './hooks/useScrollSpy';
import './index.css';

export type MenuItem = { label: string; to: string; variant?: 'button' };

const MENU: MenuItem[] = [
  { label: 'Hero', to: '#hero' },
  { label: 'Gallery', to: '#gallery' },
  { label: 'Tech & Skill', to: '#tech' },
  { label: 'Experience', to: '#experience' },
];

function App() {
  const sectionIds = ['hero', 'gallery', 'tech', 'experience'];
  const activeId = useScrollSpy(sectionIds, {
    rootMargin: '-80px 0px -60% 0px',
    threshold: [0, 0.25, 0.5, 0.75, 1],
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar name="Deepak" menu={MENU} activeId={activeId} />
      <Box component="main" id="main">
        <Hero />
        <Gallery />
        <TechSkills />
        <Experience />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
