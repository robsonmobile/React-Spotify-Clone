import React, { useContext, useEffect } from "react";
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
import { Context } from "../../context/Context";

const Footer = ({ spotify }) => {
  const { token, item, playing, dispatch } = useContext(Context);

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {

      dispatch({
        type: "SET_PLAYING",
        payload: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        payload: r.item,
      });
    });
  }, [spotify]);

  return (
    <div className="footer">
      <div className="footerLeft">
        <img className="footerAlbumLogo" alt="" />
        <div className="footerSongInfo">
          <h4>Yeah</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footerCenter">
        <Shuffle className="footerGreen" />
        <SkipPrevious className="footerIcon" />
        <PlayCircleOutline fontSize="large" className="footerIcon" />
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
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
