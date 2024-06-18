import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/movieSlice";
import VideoPlayer from "./VideoPlayer";
import "./VideoPlayer.css";

export default function MovieDialog() {
  const dispatch = useDispatch();
  const { open, id } = useSelector((store) => store.movie);

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="fullScreenDialog"
      >
        <DialogContent className="fullScreenContent">
          <VideoPlayer Id={id} />
        </DialogContent>
        <DialogActions className="dialogActions">
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
