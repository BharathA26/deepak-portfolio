import React from 'react';
import Box from '@mui/material/Box';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" title="Experience" titleAlign="center">
      <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center', color: 'text.secondary', mb: 3 }}>
        A track record of delivering brand systems, campaign assets, and production‑ready designs across print and digital —
        collaborating with teams, meeting deadlines, and driving measurable results.
      </Box>
      <Box sx={{ display: 'grid', gap: { xs: 3, md: 4 }, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, alignItems: 'stretch' }}>
        <Box sx={{ p: { xs: 3, md: 4 }, borderRadius: '32px', bgcolor: 'background.paper', border: '1px solid', borderColor: 'rgba(17,24,39,0.08)', boxShadow: '0 12px 36px rgba(17,24,39,0.08)' }}>
          <Box sx={{ fontWeight: 900, fontSize: 20, color: 'text.primary', mb: 0.5 }}>Graphic Designer</Box>
          <Box sx={{ color: 'text.secondary', mb: 0.5 }}>GB Media Vision – Erode, Tamil Nadu</Box>
          <Box sx={{ color: 'text.secondary', fontStyle: 'italic', mb: 2 }}>Oct 2022 – Present</Box>
          <Box component="ul" sx={{ pl: 3, m: 0, color: 'text.secondary', lineHeight: 1.8, '& li': { mb: 1 } }}>
            <li>Developed logos, brochures, posters, banners, and marketing creatives across retail, education, and corporate sectors.</li>
            <li>Executed social media graphics and ad campaigns, boosting client engagement by up to 30%.</li>
            <li>Partnered with marketing teams to design brand‑aligned visuals for campaigns and launches.</li>
            <li>Delivered print‑ready artwork and coordinated with vendors to ensure premium‑quality output.</li>
            <li>Optimized workflow with reusable templates, reducing turnaround time by 15%.</li>
          </Box>
        </Box>
        <Box sx={{ p: { xs: 3, md: 4 }, borderRadius: '32px', bgcolor: 'background.paper', border: '1px solid', borderColor: 'rgba(17,24,39,0.08)', boxShadow: '0 12px 36px rgba(17,24,39,0.08)' }}>
          <Box sx={{ fontWeight: 900, fontSize: 20, color: 'text.primary', mb: 0.5 }}>Freelance Graphic Designer</Box>
          <Box sx={{ color: 'text.secondary', mb: 0.5 }}>Remote</Box>
          <Box sx={{ color: 'text.secondary', fontStyle: 'italic', mb: 2 }}>Jan 2020 – Sep 2022</Box>
          <Box component="ul" sx={{ pl: 3, m: 0, color: 'text.secondary', lineHeight: 1.8, '& li': { mb: 1 } }}>
            <li>Produced branding packages, packaging, and digital creatives for startups and SMEs.</li>
            <li>Designed digital marketing materials that expanded clients’ online visibility and followers.</li>
            <li>Secured long‑term collaborations by maintaining 100% client satisfaction and design excellence.</li>
            <li>Directed full project lifecycle from consultation and ideation to revisions and timely delivery.</li>
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
