import React from "react";
import { useFetch } from "../../../hooks";
import { Loader, Button, Table } from "../../../components";
import tableConfig from "./table-config";
import { ANALYTICS_URL } from "../../../config/constants";
import "./styles.scss";

function TrackShortener({ match, history }) {
  const shortenerId = match.params.shortenerId;
  const [loader, error, data] = useFetch(
    `${ANALYTICS_URL}/api/stats/${shortenerId}`
  );

  return (
    <div className="view view__container">
      {loader ? (
        <Loader />
      ) : error ? (
        <div className="error-display error-display__container">
          <div className="error-display__message">
            <p>{error.message}</p>
          </div>
          <div className="error-display__action">
            <Button onClick={history.goBack}>Try again</Button>
          </div>
        </div>
      ) : (
        <div className="track-details">
          <p className="track-details__hits">
            The number of views is: <span>{data.count}</span>
          </p>
          <p className="track-details__table-explanation">
            In this table you can see the last 5 hits in your shortener
          </p>
          <div className="track-details__table-container">
            <Table.Table
              columns={tableConfig}
              rows={data.views}
              renderItem={(...props) => Table.Item(props)}
              keyExtractor={row => row._id.toString()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TrackShortener;
