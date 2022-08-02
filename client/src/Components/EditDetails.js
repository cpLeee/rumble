import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function EditDetails({user}) {
    const {name, profession, city, background, id} = user
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined"
      sx={{paddingBottom: '2px', 
    paddingTop: '2px', borderColor:'#fb526b', color: '#fb526b'}}
      onClick={handleClickOpen}> Edit Me
      <img 
              className= "edit-btn" src="https://cdn-images-1.medium.com/max/800/1*qM0PL1osixzpHZCCGOStwg.png" />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Make Changes Below
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={name}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="city"
            label={city}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="profession"
            label={profession}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="background"
            label={background}
            type="text"
            fullWidth
            variant="standard"
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditDetails; 
