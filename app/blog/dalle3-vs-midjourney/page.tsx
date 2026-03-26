export const metadata = {
  title: "DALL-E 3 vs Midjourney 2026 | Komplett sammenligning",
  description: "Detaljert sammenligning av DALL-E 3 og Midjourney. Se hvilken som er best for dine behov.",
};

export default function Article() {
  return (
    <article style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "2.5em", marginBottom: "10px" }}>DALL-E 3 vs Midjourney: Hvem vinner i 2026?</h1>
      <p style={{ fontSize: "1.1em", color: "#666", marginBottom: "20px" }}>
        To AI-bildegeneratorer i direkte konkurranse. Vi tester realistisk, kunstig, og kompleks stil.
      </p>

      <div style={{ background: "#fff3cd", padding: "20px", borderRadius: "8px", marginBottom: "30px" }}>
        <strong>Kort svar:</strong> DALL-E 3 er best for foto-realistiske bilder. Midjourney er best for kunstnerisk stil. For de fleste: DALL-E 3 + Copilot er lettere start.
      </div>

      <section style={{ marginBottom: "40px" }}>
        <h2>Head-to-Head: 5 test-kategorier</h2>
        
        <div style={{ marginBottom: "30px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h3>Kategori 1: Foto-realisme</h3>
          <p><strong>Vinner: DALL-E 3</strong></p>
          <p>DALL-E 3 genererer mer naturlig lysing, tekstur, og anatomi. Midjourney er mer stylisert.</p>
        </div>

        <div style={{ marginBottom: "30px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h3>Kategori 2: Kunstnerisk stil</h3>
          <p><strong>Vinner: Midjourney</strong></p>
          <p>Midjourney har bedre kontroll på kunstneriske stiler, abstracte uttrykk, og unike estetikk.</p>
        </div>

        <div style={{ marginBottom: "30px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h3>Kategori 3: Pris</h3>
          <p><strong>Vinner: DALL-E 3 (via Copilot)</strong></p>
          <p>Copilot + DALL-E 3 starter gratis. Midjourney: $10/mnd minimum.</p>
        </div>
      </section>

      <section style={{ padding: "20px", background: "#f0f7ff", borderRadius: "8px", marginBottom: "40px" }}>
        <h3 style={{ marginTop: 0 }}>Anbefaling</h3>
        <p><strong>Velg DALL-E 3 hvis:</strong> Du vil realisme, enkle prompts, og lavt budget.</p>
        <p><strong>Velg Midjourney hvis:</strong> Du trenger kunstnerisk kontroll og tilbrer tid på prompting.</p>
      </section>

      <nav style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #ddd" }}>
        <ul style={{ marginLeft: "20px" }}>
          <li><a href="/blog/beste-gratis-ai-bildegenerator/" style={{ color: "#2563eb" }}>← Tilbake: Beste gratis AI-bildegeneratorer</a></li>
        </ul>
      </nav>
    </article>
  );
}
