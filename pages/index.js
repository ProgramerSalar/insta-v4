
import Head from "next/head";
import React from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home(){
  return(
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instagram</title>
      </Head>

      {/* Header  */}
      <Header/>

      {/* feed  */}
      <Feed/>


      {/* Model  */}
    </div>
  )
}