import React from "react";
import "./Footer.css";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  VolumeDown,
  PlaylistPlay,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLeft">
        <p>Album and song details</p>
      </div>
      <div className="footerCenter">
        <Shuffle className="footerGreen" />
        <SkipPrevious className="footerIcon" />
        <PlayCircleOutline fontSize="large" className="footerGreen" />
        <SkipNext className="footerIcon" />
        <Repeat className="footerGreen" />
      </div>
      <div className="footerRight">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider area-aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
