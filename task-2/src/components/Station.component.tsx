import React, { FC } from "react";
import { InfoData, StatusData } from "../types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem",
    padding: "0.5rem",
    background: theme.palette.primary.light,
  },
}));

interface Props {
  info: InfoData;
  status: StatusData;
}

const Station: FC<Props> = ({ info, status }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>{info.name}</h1>
      <h2>{info.address}</h2>
      <h2>Sykler ledige: {status.num_bikes_available}</h2>
      <h2>Plasser ledige: {status.num_docks_available}</h2>
    </div>
  );
};

export default Station;
