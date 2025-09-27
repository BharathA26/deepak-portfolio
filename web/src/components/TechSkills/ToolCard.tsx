import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = {
  title: string;
  subtitle: string;
  img?: string;
  gradient?: string;
};

export default function ToolCard({ title, subtitle, img, gradient }: Props) {
  return (
    <Card
      elevation={8}
      sx={{
        height: '100%',
        borderRadius: 1,
        overflow: 'hidden',
        background: gradient || undefined,
        position: 'relative',
        transform: 'translateY(0) scale(1)',
        transition: 'transform 280ms ease, box-shadow 280ms ease',
        '&:hover': {
          transform: 'translateY(-6px) scale(1.015)',
          boxShadow: '0 24px 48px rgba(16,24,40,0.25)',
        },
        '&:hover .ping': {
          opacity: 1,
          transform: 'translate(0,0)',
        },
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 12px 24px rgba(16,24,40,0.15)',
      }}
    >
      <CardContent sx={{ textAlign: 'center', color: '#fff', minHeight: { xs: 220, sm: 240 }, py: 4 }}>
        <Box
          sx={{
            width: 64,
            height: 64,
            mx: 'auto',
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {img ? (
            <img
              src={img}
              alt={`${title} logo`}
              style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
            />
          ) : null}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 900, color: '#fff', letterSpacing: 0.2 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.95, mt: 1, color: '#fff', minHeight: 40 }}>
          {subtitle}
        </Typography>
      </CardContent>
      <Box
        className="ping"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          width: 12,
          height: 12,
          bgcolor: 'warning.main',
          background: 'linear-gradient(90deg,#f59e0b,#f97316)',
          borderRadius: '50%',
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          opacity: 0,
          transform: 'translate(8px,-8px)',
          transition: 'all 300ms ease',
        }}
      />
    </Card>
  );
}
