
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { relative } from 'path';
import { Button, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Modal, TextField } from '@mui/material';



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">

    </Typography>
  );
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  backdropFilter: 'blur(3px)',
  p: 4,
};


function getRandomNumber(min: any, max: any) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  while (numbersarr.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  numbersarr.push(randomNumber)
  return randomNumber

}
//{getRandomNumber(1,100)}
const numbersarr: any[] = [];



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // number of cards

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();





export default function Album() {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [bugDescription, setBugDescription] = useState('');


  // Funcția pentru deschiderea modalei și setarea proiectului selectat
  const handleOpen = (card: number) => {
    setSelectedCard(card);
    setOpen(true);
  };

  // Funcția pentru închiderea modalei
  const handleClose = () => setOpen(false);

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBugDescription(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Submitted Bug Description:', bugDescription);
    // Aici ai adăuga logica pentru trimiterea datelor la un server, de exemplu
    handleClose();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Report a bug
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              If you spot a bug simply click view on a project and submit a report. Thank you for your work !
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >

            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Project  {getRandomNumber(1, 100)}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center' }}>
                    <Button size="small" onClick={() => handleOpen(card)} >Review</Button>

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <Box sx={modalStyle}>
    <IconButton
      aria-label="close"
      onClick={handleClose}
      sx={{
        position: 'absolute',
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      
    </IconButton>
    <Box component="img"
      src="https://source.unsplash.com/random?wallpapers"
      sx={{ width: '100%', height: 'auto', my: 2 }}
    />
    <Typography id="modal-description" sx={{ mt: 2 }}>
      This is where you can write the bug you noticed.
    </Typography>
    <TextField
      fullWidth
      multiline
      rows={4}
      placeholder="Write your bug here"
      value={bugDescription}
      onChange={handleDescriptionChange}
      sx={{ mt: 2 }}
    />
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
      <Button onClick={handleClose} sx={{}}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  </Box>
</Modal>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Follow us on instagram and tiktok!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>


  );
}



