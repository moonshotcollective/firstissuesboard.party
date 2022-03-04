import React, { useState, useEffect } from "react";
import { Button, List, Card } from "antd";
import { Address, AddressInput, CardView, Footer } from "../components";
import { Web3Consumer } from "../helpers/Web3Context";
import dynamic from "next/dynamic";
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });
import { ipfs } from "../helpers";
import useSWR from "swr";

async function fetcher(...arg) {
  const res = await fetch(...arg);
  console.log("VIEW FETCH ", res);
  return res.json();
}

function Issues({ githubIssues }) {
  const [issues, setIssues] = useState([]);

  const { data, error } = useSWR("/api/github_issues", fetcher);

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-y-auto p-5">
        <div className="px-4" style={{ maxWidth: "1600px" }}>
          <div className="text-center mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Git Hub Issues</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {error && <div>failed to load {JSON.stringify(error)}</div>}
            {data && data.issues.map((item, i) => <CardView data={item} key={`${i}_${item.title}`} />)}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Web3Consumer(Issues);
