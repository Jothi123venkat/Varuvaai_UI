import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { logo } from '../Assets/logo';
import { useForm, Controller } from 'react-hook-form';
import ModalTimer from './ModalTimer'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs(props) {
  const { handleSubmit, control, setValue } = useForm();
  const [open, setOpen] = React.useState(true);
  const{loading,setLoading}=React.useState(false)

  const [otp, setOtp] = React.useState(new Array(4).fill(''));
 
  const{number,setOpen1,open1}=props;
 
  const handleClickOpen = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setValue(`otp[${index}]`, element.value);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // const handleClear = () => {
  //   setOtp(new Array(4).fill(''));
  // };

  const onSubmit = (data) => {
    // Your validation logic goes here
    console.log('Entered OTP:', data.otp.join(''));
    handleClose();
    alert('Login Successfull')
    setOtp(false)
    setOpen1(false)

  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 0, width: '451px', height: '80px' }} id="customized-dialog-title">
          <img src={logo} alt="img" style={{marginTop:"20px",}} />
        </DialogTitle>
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
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <>
            <div className="row">
              <div className="col text-center">
                <h2>Mobile Number  Verification</h2>
                <p>Please enter the OTP from Your registered mobile number <br /> <span style={{color:"darkgreen"}}>{`+91  ${number}`}</span> </p>

                {Array.from({ length: 4 }, (_, index) => (
                  <Controller
                    key={index}
                    name={`otp[${index}]`}
                    control={control}
                    defaultValue=""
                    rules={{
                      required: 'Please enter a digit',
                      pattern: {
                        value: /^\d+$/,
                        message: 'Only digits are allowed',
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <>
                      <input
                        className="otp-field"
                        type="text"
                        name={`otp[${index}]`}
                        maxLength="1"
                        {...field}
                        value={field.value}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                        style={{ width: '25px', borderColor: fieldState?.invalid ? 'red' : '' }}
                      />
                     
                    </>
                    )}
                  />
                

                ))}
                 

                
                <p>
                <ModalTimer/>
                {/* {loading?(<ModalTimer/>):"hi"} */}
          
                  <Button className="btn btn-primary" onClick={handleSubmit(onSubmit)} style={{marginTop:"20px",background:"blue",color:"white" }}
                  >
                    Verify OTP
                  </Button>
                </p>
              </div>
            </div>
          </>
        </DialogContent>
        <DialogActions></DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
