import React, { FC } from "react";
import { InfoData, StatusData } from "../types";
import { makeStyles } from "@material-ui/core/styles";
import Station from "./Station.component";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

interface Props {
  info: InfoData[];
  status: StatusData[];
}
const StationList: FC<Props> = ({ info, status }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {info.map((station) => {
        const correctStatus = status.find(
          (stationStatus) => stationStatus.station_id === station.station_id
        );
        if (!correctStatus) return null;
        return (
          <Station
            info={station}
            status={correctStatus}
            key={station.station_id}
          />
        );
      })}
    </div>
  );
};

export default StationList;
