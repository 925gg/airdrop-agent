import { fetchMetadata } from "frames.js/next";

export async function generateMetadata() {
  return {
    title: "Demo Page",
    isOpenFrame: true,
    accepts: { xmtp: "vNext" },
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL(
        "/frames",
        process.env.NEXT_PUBLIC_WEBSITE_URL
      )
    ),
  };
}

export default function Page() {
  return <span>My existing page</span>;
}
