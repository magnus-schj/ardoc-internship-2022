import React, { useState, useEffect } from "react";
import StationList from "./components/StationList.component";
import { StationInfo, StationStatus } from "./interfaces";

const App = () => {
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

  const allLoaded = stationInfo && stationStatus;
  if (!allLoaded) return <h1>Laster...</h1>;
  return (
    <div className="App">
      <StationList
        info={stationInfo.data.stations}
        status={stationStatus.data.stations}
      />
    </div>
  );
};

export default App;
