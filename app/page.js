"use client";
import { useEffect, useState } from "react";
import { getBlogWebsite } from "@/lib/api";
import RichContent from "@/components/RichContent";import "./globals.css";

export default function Website() {
  const [website, setWebsite] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getBlogWebsite();
      console.log("we fetching data");
      console.log(`trying to see website data${data}`);
      console.log(data);  
      if (data) {
        setWebsite(data);
      }
    }
    fetchData();
  }, []);

  if (!website) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{website.fields.title}</h1>
      <RichContent content={website.fields.allContent} />
    </div>
  );
}