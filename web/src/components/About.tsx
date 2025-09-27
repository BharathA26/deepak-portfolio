import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Section from './Section';
import DownloadIcon from '@mui/icons-material/Download';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={3}>
          <Avatar alt="Deepak avatar" src="/assets/portrait.svg" sx={{ width: 160, height: 160 }} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Stack spacing={2}>
            <Typography>
              I’m Deepak, a multidisciplinary designer with a passion for crafting clear, engaging visual stories. Over the
              past few years, I’ve worked across branding, editorial design, and digital interfaces—helping brands express
              their personality with clarity and consistency. I combine strategic thinking with refined aesthetics to
              produce designs that not only look great, but also serve real business goals.
            </Typography>
            <Typography>
              My toolkit includes Photoshop, Illustrator, CorelDraw, InDesign, and Figma, along with modern web tools like
              React, TypeScript, and Material UI. Whether it’s a logo system, a product landing page, or a print-ready
              brochure, I bring a meticulous approach to typography, color, layout, and accessibility. I’m always learning
              and iterating—pushing each project forward with thoughtful feedback, rapid prototyping, and collaborative
              energy.
            </Typography>
            <Typography>
              When I’m not designing, you’ll find me exploring new tools, experimenting with layouts, or sketching ideas
              for the next project. If you’re looking for someone to bring structure and style to your brand or product,
              I’d love to chat.
            </Typography>
            <div>
              <Button component="a" href="/assets/resume/Deepak-Resume.txt" download variant="outlined" startIcon={<DownloadIcon />}>
                Download Resume
              </Button>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}

