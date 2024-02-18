import ConnectButton from "@/components/ConnectButton";
import Link from "next/link";
import React from "react";

function page() {
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
          />
          <h2 className="text-xl py-2">Enter Sindri Api Key</h2>
          <input
            type="text"
            className="w-4/5 py-2 rounded-md my-2 bg-transparent border-2 text-white"
          />
          <button className="bg-slate-900 text-xl p-2 rounded-md m-2 hover:bg-slate-700">
            Genrate From
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
