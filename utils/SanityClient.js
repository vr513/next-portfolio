import { createClient } from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DB,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-12-01", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export const getSanityImage = (asset) => {
  const imageProps = useNextSanityImage(client, asset);
  return imageProps;
};
