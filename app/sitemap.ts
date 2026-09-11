import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mariosouvily.com";

  const lastModified = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/jardin/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/chemin/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
