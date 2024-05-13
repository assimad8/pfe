import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

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
              flexDirection: 'column',
              justifyContent:'center',
              alignItems: 'center',
              pt: { xs: 12, sm: 12 },
              pb: { xs: 5, sm: 3 },
            }}
          >
            <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Connectez
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
              Mot de passe oublié?
              </Link>
            </Grid>
          </Grid>
        </Box>
          </Container>
        </Box>

  );
}