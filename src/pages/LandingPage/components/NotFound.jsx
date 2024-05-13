import * as React from 'react';
import './style.scss'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        backgroundImage:'linear-gradient(180deg, #CEE5FD, #FFF)',
        margin:'0 auto',
        width:'100%',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
        
      }}
    >
     <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent:'center',
          alignItems: 'center',
          pt: { xs: 12, sm: 12 },
          pb: { xs: 5, sm: 3 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>


          <Typography
            variant="h1"
            sx={{
              display:"flex",
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            4
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: 'primary.main',
              }}
            >
            0
            </Typography>
            4
          </Typography>
          <Typography
            variant="h1"
            sx={{
              display:"flex",
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: 'primary.main',
              }}
            >
              Page Not Found <br/>
            </Typography>
            </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}