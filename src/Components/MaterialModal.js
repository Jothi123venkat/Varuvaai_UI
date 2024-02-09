import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { logo } from "../Assets/logo";
import Modalotp from './ModalOtp';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const { control, handleSubmit, formState, setValue } = useForm();
  const [open1, setOpen1] = React.useState(false);
  const [Otp, setOtp] = React.useState(false);
  const [number, setNumber] = React.useState('');

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen1(false);
   
  };

  const handleOtpOpen = () => {
    handleSubmit(onSubmit)();
    setOtp(false)
  };

  const handleOtpClose = () => {
    setOtp(false);
    setOpen1(false)
  };

  const onSubmit = (data) => {
    setNumber(data.phnum); 
    setOtp(true);  
    console.log(data.phnum);
  };

  

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} sx={{ color: "black" }}>
        Login/signup
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open1}
        >
          <DialogTitle
            sx={{ m: 3, p: 1, width: "400px" }}
            id="customized-dialog-title"
          >
            <img src={logo} alt="img" />
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <h5>Sign in</h5>
            <h5>
              Phone Number <span style={{ color: "red" }}>*</span>
            </h5>
            <Controller
              name="phnum"
              control={control}
              defaultValue=""
              rules={{
                required: "Mobile Number is required",
                maxLength: {
                  value: 10,
                  message: "Only 10 Numbers Allowed",
                },
              }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    fullWidth
                    label="Mobile Number"
                    type="number"
                    error={!!formState.errors.phnum}
                  />
                  {formState.errors.phnum && (
                    <p style={{ color: "red" }}>
                      {formState.errors.phnum.message}
                    </p>
                  )}
                </>
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus type="submit" onClick={handleOtpOpen}   >
              Send OTP
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </form>

      {Otp === true &&  (
        <Modalotp
          open1={Otp}
          onClose={handleOtpClose}
          number={number}
          setOpen1={setOpen1}

        />
      )}
    </React.Fragment>
  );
}
