"use client";
import ConnectButton from "@/components/ConnectButton";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useAccountEffect } from "wagmi";
export default function Home() {
  const [connected, setConnected] = React.useState(false);
  useAccountEffect({
    onConnect(data) {
      console.log("Connected!", data);
      setConnected(true);
    },
    onDisconnect() {
      console.log("Disconnected!");
    },
  });
  useEffect(() => {
    if (connected) redirect("/home");
  }, [connected]);
  return (
    <div className="h-full">
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-rowjustify-center items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center items-center overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Unlock&nbsp;
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Honest Feedback Anonymously&nbsp;
            </span>
            with
            <br /> Anon Insight
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            Empowering Genuine Feedback, Protected by Cutting-Edge ZK Proofs.
          </p>
          <div className="flex items-center justify-between pt-4">
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
}
