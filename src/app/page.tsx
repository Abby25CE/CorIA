import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4">
          <span className="text-orange bg-orange/20 px-4 py-2 rounded-full text-sm ">
            An AI powered sales assistant chatbot
          </span>
          <Image
            src="/images/corina-ai-logo.png"
            alt="LOGO"
            width={500}
            height={100}
            className="max-w-lg object-contain"
          />
          <p className="text-center max-w-[500px]">
            Your AI powered sales assistant! Embed Corinna AI into any website
            with just a snippet of code
          </p>
          <Button className="bg-orange font-bold text-white px-4">
            Start For Free
          </Button>
          <Image
            src="/images/iphonecorinna.png"
            alt="LOGO"
            width={400}
            height={100}
            className="max-w-lg object-contain"
          />
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 mt-10">
        <h2 className="text-4xl text-center">Choose what fits you right</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Our straightforwarrd pricing plans are tailored to meet your needs. if{" "}
          {"you're"} not ready to commityou can get started for free.
        </p>
      </section>
      <div className="flex justify-center gap-4 flex-wrap mt-6">
        you, 1 second ago • Uncommitted changes
      </div>
    </main>
  );
}
