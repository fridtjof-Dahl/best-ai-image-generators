export default function BlogIndex() {
  const articles = [
    {
      title: "Best AI Image Generator Free 2025: 10 Tools We Actually Tested",
      slug: "best-ai-image-generator-free",
      description: "We tested 20+ free AI image generators to find the absolute best.",
    },
    {
      title: "DALL-E 3 vs Midjourney: Which AI Image Generator Should You Use?",
      slug: "dalle3-vs-midjourney",
      description: "Head-to-head comparison of two market leaders.",
    },
    {
      title: "Best Free AI Image Generators (No Credit Card Required)",
      slug: "free-ai-image-generators",
      description: "Budget-friendly options for beginners.",
    },
    {
      title: "Stable Diffusion Beginner's Guide",
      slug: "stable-diffusion-guide",
      description: "Tutorial + setup guide for running locally.",
    },
    {
      title: "Adobe Firefly Review",
      slug: "adobe-firefly-review",
      description: "Product review and capabilities breakdown.",
    },
  ];

  return (
    <main style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>AI Image Generator Blog</h1>
      <p>Comprehensive guides and reviews of the best AI image generators.</p>
      
      <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
        {articles.map((article) => (
          <article key={article.slug} style={{ 
            border: "1px solid #ccc", 
            padding: "15px", 
            borderRadius: "8px" 
          }}>
            <h2><a href={`/blog/${article.slug}`}>{article.title}</a></h2>
            <p>{article.description}</p>
            <a href={`/blog/${article.slug}`}>Read more →</a>
          </article>
        ))}
      </div>
    </main>
  );
}
