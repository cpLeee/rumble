import React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function EditDetails({ editUser, handleUpdate }) {
    // const { name, profession, city, background, profile_url, id } = editUser
   

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //MY CHANGE 

    // const [current, setCurrent]= useState(0)

    const [name, setName] = useState(editUser.name)
    const [profession, setProfession] = useState(editUser.profession)
    const [city, setCity] = useState(editUser.city)
    const [background, setBackground]= useState(editUser.background)

    
    function handleUserSubmit(e) {
        e.preventDefault();
        e.target.reset();
        fetch(`http://localhost:4000/users/${editUser.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: name, profession: profession, city: city, background: background, user_id: editUser.id }),
        })
          .then((r) => r.json())
          .then((updatedUser) => {
            handleUpdate(updatedUser);
          });
      }
    

    return (
        <div>
            <Button variant="outlined"
                sx={{
                    paddingBottom: '2px',
                    marginTop: '10px',
                    paddingTop: '2px', borderColor: '#fb526b', color: '#fb526b', marginRight: '4px'
                }}
                onClick={handleClickOpen}> Edit My Information
                <img
                    className="edit-btn" src="https://cdn-images-1.medium.com/max/800/1*qM0PL1osixzpHZCCGOStwg.png" />
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>User Profile</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Make Changes Below
                    </DialogContentText>
                    <form onSubmit= {handleUserSubmit} id="userform">
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label= {name}
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="city"
                        label={city}
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="profession"
                        label={profession}
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setProfession(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="background"
                        label= {background}
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setBackground(e.target.value)}
                    />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" form="userform" onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditDetails; 
