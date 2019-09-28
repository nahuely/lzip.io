import React from "react";
import "./styles.scss";

export const Item = ([row, columns]) => {
  const output = [];
  for (const [key, conf] of columns) {
    output.push(
      <div
        key={key}
        className="table__row-cell"
        style={{ width: `${conf.width}%` }}
      >
        <p
          title={`${row[conf.prop].toString()}`}
          style={{ textOverflow: "ellipsis" }}
        >
          {conf.render ? conf.render(row, conf) : row[conf.prop].toString()}
        </p>
      </div>
    );
  }
  return (
    <div className="table__row" key={row._id}>
      {output}
    </div>
  );
};

export const Table = ({ columns, rows, renderItem }) => {
  function renderHeader() {
    const elements = [];
    for (const [key, data] of columns) {
      elements.push(
        <div
          key={key}
          className="table__header-cell"
          style={{ width: `${data.width}%` }}
        >
          {data.title}
        </div>
      );
    }
    return elements;
  }

  function renderRows() {
    return rows.map(row => renderItem(row, columns));
  }

  return (
    <div className="table table__container">
      <div className="table__header">{renderHeader()}</div>
      <div className="table__rows">{renderRows()}</div>
    </div>
  );
};
