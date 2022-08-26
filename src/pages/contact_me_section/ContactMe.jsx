import React, {useState, useRef } from 'react';

import emailjs from '@emailjs/browser';

import {HiOutlineMail} from 'react-icons/hi';
import {BsTelephone} from 'react-icons/bs';
import {GiPositionMarker} from 'react-icons/gi';
import {FiGithub, FiTwitter, FiFacebook, FiLinkedin} from 'react-icons/fi'
import {IconButton, TextField, Button, Snackbar, Alert} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { useTranslation } from 'react-i18next';

const ContactMe = () => {
  const form = useRef();

  const [sendEmailInProgress, setSendEmailInProgress] = useState(false); 

  const {t} = useTranslation();

  const sendEmail = async (e) => {
    setInterval(30000);
    e.preventDefault();
    setSendEmailInProgress(true);
    emailjs.sendForm('service_ds83pii', 'template_evkdm2r', form.current, 'user_qVbNcZxyoTP4neSN2UZtB')
      .then((result) => {
          setOpenSuccessSnackbar(true);
      }, (error) => {
          setopenErrorSnackbar(true)
    });
    setSendEmailInProgress(false);
  };

  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [openErrorSnackbar, setopenErrorSnackbar] = useState(false);

  const handleCloseSuccessSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccessSnackbar(false);
  };

  const handleCloseErrorSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setopenErrorSnackbar(false);
  };

  return (
    <div 
      className='app__section sm:h-auto lg:h-screen items-center justify-center sm:pt-48 lg:pt-20'
      id='contact__me__section'
    >
      <h1
        className='sm:text-6xl lg:text-4xl opacity-80 mb-4 font-righteous'
      >
        {t("contact_me_section.title")}
      </h1>
      <div
        className='flex sm:flex-col-reverse lg:flex-row sm:w-11/12 lg:w-10/12  bg-white drop-shadow-md rounded-md'
      >
        <div
          className='bg-teal lg:w-1/3 h-full drop-shadow-md sm:rounded-b-md lg:rounded-l-md p-5'
        >
          <h2
            className='sm:text-4xl lg:text-xl opacity-70 text-light font-righteous'
          >
            {t("contact_me_section.other_ways")}
          </h2>
          <div>
            <div
              className='font-extralight items-center mt-10 text-light sm:text-4xl lg:text-base'
            >
              <IconButton
                color='light'
                className='sm:text-4xl lg:text-2xl'
              >
                <HiOutlineMail />
              </IconButton>
              harounatiambou.pro@gmail.com 
            </div>
            <div
              className='font-extralight items-center mt-10 text-light sm:text-4xl lg:text-base'
            >
              <IconButton
                color='light'
                className='sm:text-4xl lg:text-2xl'
              >
                <BsTelephone />
              </IconButton>
              +(216) 52-178-506 
            </div>
            <div
              className='font-extralight items-center mt-10 text-light sm:text-4xl lg:text-base flex'
            >
              <IconButton
                color='light'
                className='sm:text-4xl lg:text-2xl'
              >
                <GiPositionMarker />
              </IconButton>
              <div>
                90 Ave Mohamed V, Monastir 1002, Tunisia 
              </div>
            </div>
            <div
              className='flex items-center justify-around mt-20 px-28 mb-10'
            >
              <IconButton
                color='linkedin'
                className='sm:text-5xl lg:text-2xl' 
              >
                <FiLinkedin />
              </IconButton>
              <IconButton
                color='github' 
                className='sm:text-5xl lg:text-2xl'
              >
                <FiGithub />
              </IconButton>
              <IconButton
                color='twitter' 
                className='sm:text-5xl lg:text-2xl'
              >
                <FiTwitter />
              </IconButton>
              <IconButton
                color='facebook' 
                className='sm:text-5xl lg:text-2xl'
              >
                <FiFacebook />
              </IconButton>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='p-5 w-full'
        >
          <h2
            className='sm:text-4xl lg:text-xl opacity-70 text-dark font-righteous sm:rounded-t-md lg:rounded-r-md'
          >
            {t("contact_me_section.send_me_a_message")}
          </h2>
          <div
            className='w-full sm:px-20 lg:px-0 mt-5'
          >
            <div
              className='w-full grid sm:grid-cols-1 lg:grid-cols-2 sm:gap-10 lg:gap-5'
            >
            <TextField 
              fullWidth
              label={t("contact_me_section.firstName")}
              inputProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              InputLabelProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              name='firstName'
              required
            />
            <TextField 
              fullWidth
              label={t("contact_me_section.lastName")}
              inputProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              InputLabelProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              name='lastName'
              required
            />
            <TextField 
              fullWidth
              label={t("contact_me_section.email_address")}
              inputProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              InputLabelProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              name='email'
              required
              type='email'
            />
            <TextField 
              fullWidth
              label={t("contact_me_section.phoneNumber")}
              inputProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              InputLabelProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
              name='phoneNumber'
            />
            </div>
            <div
              className='w-full grid grid-cols-1 sm:gap-10 lg:gap-5 mt-5'
            >
              <TextField 
                fullWidth
                label={t("contact_me_section.subject")}
                inputProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
                InputLabelProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
                name='subject'
              />
              <TextField 
                fullWidth
                multiline
                rows={4}
                label={t("contact_me_section.message")}
                inputProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
                InputLabelProps={{sx:{fontFamily: "'Kanit', sans-serif"}}}
                name='message'
                required
              />
            </div>
          </div>
          <div
            className='mt-2 flex sm:justify-center lg:justify-end'
          >
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              sx={sendEmailInProgress ? {display: 'none'} : {display: 'block'}}
              className='font-kanit tracking-wider sm:w-2/4 sm:mt-5 lg:mt-0 lg:w-auto'
            > 
              {t("contact_me_section.send")}
            </Button>
            <LoadingButton
              loading
              variant="outlined"
              color='secondary'
              sx={sendEmailInProgress ? {display: 'block'} : {display: 'none'}}
              className='font-kanit tracking-wider sm:w-2/4 sm:mt-5 lg:mt-0 lg:w-auto'
            >
              {t("contact_me_section.send")}
            </LoadingButton>
          </div>
        </form>
      </div>
      <Snackbar 
        open={openSuccessSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSuccessSnackbar}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      >
        <Alert 
          onClose={handleCloseSuccessSnackbar} 
          severity="success" 
          sx={{ width: '15%%' }}
          className='font-kanit'
        >
          {t("contact_me_section.success_message")}
        </Alert>
      </Snackbar>
      <Snackbar 
        open={openErrorSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseErrorSnackbar}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      >
        <Alert 
          onClose={handleCloseErrorSnackbar} 
          severity="error" 
          sx={{ width: '15%' }}
          className='font-kanit'
        >
          {t("contact_me_section.error_message")}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default ContactMe