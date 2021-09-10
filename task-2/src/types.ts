export interface StationInfo {
  last_updated: number;
  ttl: number;
  version: string;
  data: Data;
}

interface Data {
  stations: InfoData[];
}

export interface InfoData {
  station_id: string;
  name: string;
  address: string;
  capacity: number;
  lat: number;
  long: number;
}
// ------------------------------------------------
export interface StationStatus {
  last_updated: string;
  ttl: number;
  version: string;
  data: Status;
}

export interface Status {
  stations: StatusData[];
}

export interface StatusData {
  is_installed: number;
  is_renting: number;
  is_returning: number;
  num_bikes_available: number;
  num_docks_available: number;
  last_reported: number;
  station_id: string;
}
