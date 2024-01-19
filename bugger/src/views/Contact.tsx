
//  import  '../css/contact.modules.css';
 
// export default function Contact(){


// return (
// <div >
// <div className="wrapper centered">
//   <article className="letter">
//     <div className="side">
//       <h1>Contact us</h1>
//       <p>
//         <textarea placeholder="Your message"></textarea>
//       </p>
//     </div>
//     <div className="side">
//       <p>
//         <input type="text" placeholder="Your name" />
//       </p>
//       <p>
//         <button id="sendLetter">Send</button>
//       </p>
     
//     </div>
//   </article>
//   <div className="envelope front"></div>
//   <div className="envelope back"></div>
// </div>
// <p className="result-message centered">Thank you for your message</p>


// </div>
  
// )
// }

import React from 'react';
import { Container, TextField, Button, Grid, Typography, Box } from '@mui/material';

const ContactPage = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default ContactPage;
