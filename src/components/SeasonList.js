import React from "react";
import { useParams } from "react-router-dom";

export default function SeasonList() {
  let { showId } = useParams();
  return <div>Season List for {showId}</div>;
}
