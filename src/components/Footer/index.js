import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Typography>
          <Link href="http://raysaavedra.github.io/">
            &copy; Copyright 2020, Ray Saavedra
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
