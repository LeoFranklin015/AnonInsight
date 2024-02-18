"use client";
import ConnectButton from "@/components/ConnectButton";
import Link from "next/link";
import React, { useEffect } from "react";

function Page({ params }: { params: { id: string } }) {
  const ratings = [
    { rating: 3, comment: "Great service!" },
    { rating: 5, comment: "Excellent experience!" },
    { rating: 4, comment: "Very satisfied!" },
  ];
  const [formid, setFormid] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    console.log("wok");
    setFormid(params.id as string);
    setLoading(false);
  }, [params.id]);
  return (
    <div className="h-full overflow-hidden">
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center gap-4 over">
        <div className="w-4/5 p-3 flex justify-center items-center">
          <h1 className="text-3xl p-2 b-2">
            Form ID :<span className="text-white">{formid}</span>
          </h1>
        </div>
        <div className="flex w-4/5 justify-between">
          <div>
            <h1 className="text-3xl p-2 b-2">Your Ratings</h1>
          </div>
          <div>
            <ConnectButton />
          </div>

          <Link href={"/home"}>
            <button className="bg-slate-700 text-xl p-2 rounded-md hover:bg-slate-600">
              Back
            </button>
          </Link>
        </div>
        {ratings.map(({ rating, comment }, index) => (
          <div
            key={index}
            className="w-4/5 bg-slate-700 rounded-md p-3 flex justify-between"
          >
            <div>
              <div className="flex gap-2">
                <h2 className="text-xl">
                  <span className="text-white">{index + 1}</span>
                </h2>
                <h2 className="text-xl">
                  Rating :
                  <span className="text-white">
                    {[...Array(rating)].map((_, index) => (
                      <span key={index} className="star">
                        &#9733;
                      </span>
                    ))}
                  </span>
                </h2>
              </div>
              <h2 className="text-xl">
                Comment : <span className="text-white">{comment}</span>
              </h2>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
