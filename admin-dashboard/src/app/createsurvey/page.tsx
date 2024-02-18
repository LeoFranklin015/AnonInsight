"use client";
import ConnectButton from "@/components/ConnectButton";
import Link from "next/link";
import React, { useState } from "react";
import { getAccount } from "@wagmi/core";
import { config } from "../../config";
function Page() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formid, setFormid] = useState("");
  const [circuitId, setCircuitId] = useState("");
  const [sindrikey, setSindriKey] = useState("");
  const [regex, setRegex] = useState("");
  const account = getAccount(config);
  const address = account?.address;
  const handleGenerateForm = async () => {
    console.log(sindrikey, regex, address);
    setLoading(true);
    const response = await fetch(
      "https://anoninsight.onrender.com/circuit_id",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          regex: regex,
          apiKey: sindrikey,
          walletAddress: address,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    setCircuitId(data.circuit_id);
    setFormid(data.form_id);
    setLoading(false);
    setSuccess(true);
  };
  return (
    <div className="h-full overflow-hidden">
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center gap-4 over">
        <div className="flex w-4/5 justify-between">
          <div>
            <h1 className="text-3xl p-2 b-2">Create Form</h1>
          </div>
          <div>
            <ConnectButton />
          </div>
        </div>
        <div className="w-fit border-2 border-dashed rounded-md p-10 flex-col justify-center text-center">
          <h2 className="text-xl py-2">Enter Regular Expression</h2>
          <input
            type="text"
            className="w-4/5 py-2 rounded-md my-2 bg-transparent border-2 text-white"
            onChange={(e) => setRegex(e.target.value)}
          />
          <h2 className="text-xl py-2">Enter Sindri Api Key</h2>
          <input
            type="text"
            className="w-4/5 py-2 rounded-md my-2 bg-transparent border-2 text-white"
            onChange={(e) => setSindriKey(e.target.value)}
          />
          <button
            className={
              success
                ? " bg-green-700 text-xl p-2 rounded-md m-2 cursor-not-allowed"
                : "bg-slate-900 text-xl p-2 rounded-md m-2 hover:bg-slate-700"
            }
            onClick={handleGenerateForm}
          >
            {success ? "Form generated" : "Generate From"}
          </button>
          {success && (
            <h2 className="text-xl py-2 text-green-700">Form ID:{formid}</h2>
          )}
          {success && (
            <h2 className="text-xl py-2 text-green-700">
              Circuit ID:{circuitId}
            </h2>
          )}
          <Link href={"/home"}>
            <button className="bg-slate-900 text-xl p-2 rounded-md m-2 hover:bg-slate-700">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
