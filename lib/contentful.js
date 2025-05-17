"use client";

import { createClient } from "contentful";

let client = null;

if (typeof window !== "undefined"){
    client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    });

}
export default client;