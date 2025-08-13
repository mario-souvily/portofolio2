import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mariosouvily.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split("T")[0], // YYYY-MM-DD
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Si un jour j'ajoute d'autres pages :
    // {
    //   url: `${baseUrl}/projets`,
    //   lastModified: new Date().toISOString().split("T")[0],
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ];
}
