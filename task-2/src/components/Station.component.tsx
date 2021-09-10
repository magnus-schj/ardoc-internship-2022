import React, { FC } from "react";
import { InfoData, StatusData } from "../interfaces";

interface Props {
  info: InfoData;
  status: StatusData;
}

const Station: FC<Props> = ({ info, status }) => {
  return (
    <div>
      <h1>{info.name}</h1>
      <h2>{info.address}</h2>
      <h2>Sykler ledige: {status.num_bikes_available}</h2>
      <h2>Plasser ledige: {status.num_docks_available}</h2>
    </div>
  );
};

export default Station;
