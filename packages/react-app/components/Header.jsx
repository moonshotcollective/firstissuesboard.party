import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="#" target="_blank" rel="noopener noreferrer">
      <PageHeader title="🚀🌙 First Issues Board" subTitle="Find tasks to work on" style={{ cursor: "pointer" }} />
    </a>
  );
}
