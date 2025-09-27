import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  id: string;
  title?: string;
  children: React.ReactNode;
  maxWidth?: 'lg' | 'md' | 'sm' | 'xl' | false;
  titleAlign?: 'left' | 'center' | 'right';
};

export default function Section({ id, title, children, maxWidth = 'lg', titleAlign = 'left' }: Props) {
  return (
    <Box id={id} component="section" sx={{ py: { xs: 6, md: 10 }, scrollMarginTop: { xs: '72px', md: '88px' } }}>
      <Container maxWidth={maxWidth}>
        {title && (
          <Typography component="h2" variant="h4" sx={{ mb: 4, color: 'primary.main', fontWeight: 800, textAlign: titleAlign }}>
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
}
