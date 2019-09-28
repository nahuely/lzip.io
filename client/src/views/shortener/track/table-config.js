import React from "react";

export default new Map([
  [
    "referer",
    {
      title: "referer",
      prop: "referer",
      render: (data, conf) => (
        <a href={data.referer.toString()} target="_blank">
          {data.referer}
        </a>
      ),
      width: 33
    }
  ],
  ["browser", { title: "browser", prop: "browser", width: 33 }],
  [
    "success",
    {
      title: "success",
      prop: "success",
      width: 33,
      render: data => (
        <span style={{ color: data.success ? "green" : "red" }}>
          {data.success.toString()}
        </span>
      )
    }
  ]
]);
