import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Section from '../Section';
import ToolCard from './ToolCard';
import { TOOLS } from '../../data/skills';

export default function TechSkills() {
  return (
    <Section id="tech" title="Tech & Skills" titleAlign="center">
      <Stack spacing={6}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            <span style={{ display: 'block', textAlign: 'center', color: 'rgba(17,24,39,0.7)', fontSize: 18, lineHeight: 1.7 }}>
              Powered by industry-leading design software to bring your vision to life with precision, creativity, and
              professional excellence in every project.
            </span>
          </Box>
        </Box>
        {/* Ensure the grid aligns with the section container and stays centered */}
        <Box sx={{ ml: { xs: -2, sm: -3, md: 0 }, mr: { xs: -2, sm: -3, md: 0 } }}>
      <Box sx={{ maxWidth: 1320, mx: 'auto', px: { xs: 2, sm: 3, md: 3, lg: 0 } }}>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            justifyContent: 'center',
            gridTemplateColumns: {
        xs: 'repeat(2, minmax(160px, 1fr))',
        sm: 'repeat(3, minmax(180px, 1fr))',
        md: 'repeat(4, minmax(200px, 1fr))',
        lg: 'repeat(6, minmax(200px, 1fr))', // ⬅️ six across = one row on desktop
      },
          }}
        >
          {TOOLS.map((t) => (
            <ToolCard key={t.id} title={t.title} subtitle={t.subtitle} img={t.img} gradient={t.gradient} />
          ))}
        </Box>
        </Box>
                </Box>
        {/* Banner line */}
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', px: 4, py: 2, borderRadius: 10, bgcolor: 'rgba(60,45,122,0.06)', boxShadow: '0 0 0 0 rgba(119,67,153,0.0)', animation: 'pulseGlow 1800ms ease-in-out infinite' }}>
            <span style={{ color: '#3C2D7A', fontWeight: 600 }}>✨ Mastering visual storytelling through expert design craftsmanship</span>
          </Box>
        </Box>

        {/* Three feature blips */}
        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
          {[{
            t: 'Creative Excellence', s: 'Transforming ideas into stunning visual narratives', bg: 'linear-gradient(135deg, rgba(60,45,122,0.06), rgba(119,67,153,0.06))'
          },{
            t: 'Technical Precision', s: 'Professional-grade tools for flawless execution', bg: 'linear-gradient(135deg, rgba(119,67,153,0.06), rgba(0,154,144,0.06))'
          },{
            t: 'Design Innovation', s: 'Modern solutions for contemporary design challenges', bg: 'linear-gradient(135deg, rgba(0,154,144,0.06), rgba(60,45,122,0.06))'
          }].map((b, i) => (
            <Box key={i} sx={{ p: 3, borderRadius: 3, textAlign: 'center', background: b.bg, transition: 'transform 250ms ease, box-shadow 250ms ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
              <Box component="h4" sx={{ m: 0, fontSize: 22, fontWeight: 800, color: 'primary.main', mb: 1 }}>{b.t}</Box>
              <Box sx={{ color: 'text.secondary' }}>{b.s}</Box>
            </Box>
          ))}
        </Box>
        

        <style>{`
          @keyframes pulseGlow { 0% { box-shadow: 0 0 0 0 rgba(119,67,153,0.0);} 50% { box-shadow: 0 0 0 8px rgba(119,67,153,0.07);} 100% { box-shadow: 0 0 0 0 rgba(119,67,153,0.0);} }
        `}</style>
      </Stack>
    </Section>
  );
}
