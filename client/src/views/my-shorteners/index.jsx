import React, { useContext } from "react";
import AppContext from "../../context/appContext";
import { Table } from "../../components";
import tableConfig from "./table-config";
import "./styles.scss";

function MyShorteners() {
  const state = useContext(AppContext);
  const { links = [] } = state;
  return (
    <div className="view view__container">
      <div className="my-shorteners">
        <p className="my-shorteners__table-explanation">
          In this table you can see your shorteners
        </p>
        <div className="my-shorteners__table-container">
          <Table.Table
            columns={tableConfig}
            rows={links}
            renderItem={(...props) => Table.Item(props)}
            keyExtractor={row => row.id.toString()}
          />
        </div>
      </div>
    </div>
  );
}

export default MyShorteners;
