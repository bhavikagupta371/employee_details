import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Typography } from '@mui/material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height:'80%',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ContentModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <button className='button' onClick={handleOpen}>Read More</button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        
          <Box sx={style}>
          
          <Typography id="transition-modal-title" variant="h6" component="h2" >
             Bret
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
             UserName: Leanne Graham
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            email: Sincere@april.biz
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            address:
       street: Kulas Light,
      suite: Apt. 556,
       city: Gwenborough,
      zipcode: 92998-3874,
            </Typography>
            <Typography id="transition-modal-descriptiosx" sx={{ mt: 2 }}>
            phone: 1-770-736-8031 x56442,
            </Typography>
            <Typography id="transition-modal-descriptiosx" sx={{ mt: 2 }}>
            website: hildegard.org
            </Typography>
            <Typography id="transition-modal-descriptiosx" sx={{ mt: 2 }}>
            company name: Romaguera-Crona         
               </Typography>

            
           
          </Box>
    
        </Fade>
      </Modal>
    </div>
  );
}