import React, { useState, useEffect } from "react";
import { Address, AddressInput, Contract, Meta, Footer, HomeFaq } from "../components";
import { List, Card, Button } from "antd";
import { useContractReader } from "eth-hooks";
import { useEventListener } from "eth-hooks/events";
import { Web3Consumer } from "../helpers/Web3Context";
import Head from "next/head";
import Icon from "../assets/icon.svg";
import Gitcoin from "../assets/gitcoin.svg";
import Github from "../assets/github.svg";
import { Collapse } from "antd";

const { Panel } = Collapse;

function Home({ web3 }) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to the Bounty Party!
            </h1>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Active Bounties
              </button>
            </div>
          </div>
        </div>
      </section>
      <HomeFaq />
      <Footer />
    </div>
  );
}

export default Web3Consumer(Home);
