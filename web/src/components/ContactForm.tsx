import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Section from './Section';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to proceed' }),
  }),
  // Honeypot
  company: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [snack, setSnack] = React.useState<{ open: boolean; success: boolean; msg: string }>({ open: false, success: true, msg: '' });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    if (data.company) return; // bot
    // Simulate async submission. Replace with Formspree/Netlify or API
    await new Promise((r) => setTimeout(r, 800));
    setSnack({ open: true, success: true, msg: 'Thanks! I will get back to you soon.' });
    reset();
  };

  return (
    <Section id="contact" title="Contact Us">
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Contact form" noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" fullWidth {...register('name')} error={!!errors.name} helperText={errors.name?.message} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" type="email" fullWidth {...register('email')} error={!!errors.email} helperText={errors.email?.message} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Phone (optional)" fullWidth {...register('phone')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Subject" fullWidth {...register('subject')} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Message" fullWidth multiline minRows={4} {...register('message')} error={!!errors.message} helperText={errors.message?.message} />
          </Grid>
          {/* Honeypot */}
          <input type="text" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" {...register('company')} />
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox {...register('consent')} />} label="I consent to be contacted about my inquiry." />
            {errors.consent && (
              <div role="alert" style={{ color: '#d32f2f', fontSize: 12, marginTop: 4 }}>{errors.consent.message}</div>
            )}
          </Grid>
          <Grid item xs={12}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </Button>
              <Button component="a" href="https://wa.me/0000000000" target="_blank" rel="noopener" startIcon={<WhatsAppIcon />}>
                WhatsApp
              </Button>
              <Button component="a" href="mailto:hello@example.com" startIcon={<EmailIcon />}>
                Email me
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnack((s) => ({ ...s, open: false }))} severity={snack.success ? 'success' : 'error'} variant="filled">
          {snack.msg}
        </Alert>
      </Snackbar>
    </Section>
  );
}

