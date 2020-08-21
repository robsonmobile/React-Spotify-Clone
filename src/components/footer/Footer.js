import React, { useContext, useEffect } from "react";
import "./Footer.css";
import {
  PlayCircleOutline,
  PauseCircleOutline,
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
      console.log(r)
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

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        payload: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        payload: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        payload: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        payload: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        payload: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        payload: true,
      });
    });
  };

  return (
    <div className="footer">
      <div className="footerLeft">
        <img
          src={item?.album.images[0].url}
          className="footerAlbumLogo"
          alt={item?.name}
        />
        {item ? (
          <div className="footerSongInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footerSongInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
      <div className="footerCenter">
        <Shuffle className="footerGreen" />
        <SkipPrevious onClick={skipPrevious} className="footerIcon" />
        {playing ? (
          <PauseCircleOutline
            onClick={handlePlayPause}
            fontSize="large"
            className="footerIcon"
          />
        ) : (
          <PlayCircleOutline
            onClick={handlePlayPause}
            fontSize="large"
            className="footerIcon"
          />
        )}
        <SkipNext onClick={skipNext} className="footerIcon" />
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
