import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Web3Consumer } from "../helpers/Web3Context";
import { get, includes, isEmpty } from "lodash";

function DetailedView(data) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1>{get(data, "project_url")}</h1>
    </div>
  );
}

export default Web3Consumer(DetailedView);
