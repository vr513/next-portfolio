// pages/api/updateLikes.js
import { createClient } from "@sanity/client";

export default async function handler(req, res) {
  // Check if the request method is POST
  if (req.method === "POST") {
    // Sanity client configuration
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DB,
      token: process.env.SANITY_PROJECT_TOKEN, // Make sure to keep this token secure
      useCdn: false, // Set to true for production,
      apiVersion: "2023-12-01",
    });

    // Extract blog ID and new likes count from the request body
    const { blogId } = JSON.parse(req.body);

    try {
      const result = await client.patch(blogId).inc({ likes: 1 }).commit();

      res.status(200).send({ success: true, updatedBlog: result });
    } catch (error) {
      console.error("Error updating likesCount:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
