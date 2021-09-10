import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox.component";
import StationList from "./components/StationList.component";
import { StationInfo, StationStatus } from "./types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem",
  },
});

const App = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [stationInfo, setStationInfo] = useState<null | StationInfo>(null);
  const [stationStatus, setStationStatus] = useState<null | StationStatus>(
    null
  );
  useEffect(() => {
    const fetchData = async () => {
      // -----------------------------------------------------------------------------
      const infoResponse = await fetch(
        "http://gbfs.urbansharing.com/oslobysykkel.no/station_information.json"
      );
      const data1JSON = await infoResponse.json();
      setStationInfo(data1JSON);
      // -----------------------------------------------------------------------------
      const statusResponse = await fetch(
        "https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json"
      );
      const data2JSON = await statusResponse.json();
      setStationStatus(data2JSON);
      // -----------------------------------------------------------------------------
    };
    fetchData();
  }, []);

  //makes sure all data is loaded
  const allLoaded = stationInfo && stationStatus;
  if (!allLoaded) return <h1>Laster...</h1>;

  // decides whitch stations should be filtered out
  const filteredStations = stationInfo.data.stations.filter((station) =>
    station.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className={classes.root}>
      <Typography variant="h3" color="initial">
        Bysykkel app
      </Typography>
      <SearchBox value={searchValue} setValue={setSearchValue} />
      <StationList
        info={filteredStations}
        status={stationStatus.data.stations}
      />
    </div>
  );
};

export default App;
