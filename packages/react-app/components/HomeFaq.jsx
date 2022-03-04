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
    description: "A member of the project team will review the Pull Request",
  },
];

export default function HomeFaq() {
  return (
    <div className="p-10 bg-white">
      <div className="text-center mb-4">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">📝 Faq</h1>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <Collapse style={{ border: 0 }}>
        {faqs.map(item => (
          <Panel
            header={item.header}
            key={item.header}
            extra={<PlusOutlined style={{ color: "#8C65F7" }} />}
            showArrow={false}
            style={{ backgroundColor: "white", borderColor: "#8C65F7" }}
          >
            {item.description}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}
