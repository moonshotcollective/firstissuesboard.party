import React from "react";

import { PlusOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

const { Panel } = Collapse;

const faqs = [
  {
    header: "What is this Site?",
    description: "Users are able to see new issues on active Moonshot Collective Projects",
  },
  {
    header: "Who can submit pull requests on these projects?",
    description: "Anyone looking to contribute to Moonshot Collective Projects",
  },
  {
    header: "How are the Pull Requests Approved?",
    description: "A member of the project team will review the Pull Request. Reply to the comments on github.",
  },
  {
    header: "Contribution Guideline",
    description: (
      <ul className="list-disc p-2">
        <li>Fork the Project Repository</li>
        <li>Find an issue with the label Good First Issue</li>
        <li>Push a Pull Request to the Forked Repository</li>
      </ul>
    ),
  },
];

export default function HomeFaq() {
  return (
    <div className="p-10 bg-gray-100">
      <Collapse style={{ border: 0 }}>
        {faqs.map(item => (
          <Panel
            header={item.header}
            key={item.header}
            extra={<PlusOutlined style={{ color: "blue" }} />}
            showArrow={false}
          >
            {item.description}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}
