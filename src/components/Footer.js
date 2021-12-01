import React from "react"
import { Link } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import useStyles from "../css/useStyles"

const Footer = () => {
  const classes = useStyles()
  return (
    <Box className={classes.footer}>
      <Box className={classes.footerContainer}>
        <Box className={classes.footerItems}>
          <Typography variant='h4' fontWeight='bold'>
            Vicky Stores
          </Typography>
          <Box className={classes.footerSocials}>
            <i class='fab fa-facebook-f'></i>
            <i class='fab fa-twitter'></i>
            <i class='fab fa-instagram'></i>
            <i class='fab fa-youtube'></i>
          </Box>
        </Box>
        <Box className={classes.footerItems}>
          <Typography variant='subtitle1' fontWeight='bold'>
            Company
          </Typography>
          <Link className={classes.footerItemsLinks}>About</Link>
          <Link className={classes.footerItemsLinks}>Contact</Link>
          <Link className={classes.footerItemsLinks}>Blog</Link>
          <Link className={classes.footerItemsLinks}>Careers</Link>
        </Box>
        <Box className={classes.footerItems}>
          <Typography variant='subtitle1' fontWeight='bold'>
            Resources
          </Typography>
          <Link className={classes.footerItemsLinks}>API Reference</Link>
          <Link className={classes.footerItemsLinks}>Terms & Conditions</Link>
          <Link className={classes.footerItemsLinks}>FAQs</Link>
          <Link className={classes.footerItemsLinks}>Privacy & Security</Link>
        </Box>
        <Box className={classes.footerItems}>
          <Typography variant='subtitle1' fontWeight='bold'>
            About Vicky Stores
          </Typography>
          <Typography variant='subtitle2'>
            Vicky Stores your number one online fashion store in Nigeria.
            Finding quality clothes, footwears and jewelries has never been made
            so easy online, with Vicky Stores you don’t need to worry about
            getting value for your money, with our money back guarantee you can
            trust we would deliver what you order in good time.
          </Typography>
        </Box>
      </Box>
      <hr />
      <Box className={classes.footerCopyright}>
        <Typography variant='subtitle2'>
          Copyright &copy; 2021 || Designed by
          <a href='https://seyeonigbinde.vercel.app/'> Stevens Design Tech.</a>
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
