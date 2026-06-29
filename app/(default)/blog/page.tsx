export const metadata = {
  title: "Blog",
  description:
    "Insights on DevOps, cloud, AI automation, and operational excellence for EU businesses.",
};

const posts = [
  {
    title: "How EU Teams Cut Deployment Risk with CI/CD Guardrails",
    category: "DevOps",
    date: "June 2026",
    summary:
      "A practical framework for release quality, rollback strategy, and secure pipeline ownership.",
  },
  {
    title: "Cloud Migration Playbook for Mid-Market Enterprises",
    category: "Cloud",
    date: "June 2026",
    summary:
      "Step-by-step migration sequencing to reduce downtime and keep governance intact.",
  },
  {
    title: "Where Agentic AI Delivers Immediate ROI in Support Ops",
    category: "AI",
    date: "May 2026",
    summary:
      "A realistic adoption approach for AI agents in customer service and back-office workflows.",
  },
];

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 md:pt-40">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Blog</h1>
        <p className="mt-4 text-lg text-gray-600">
          Perspectives and practical guides for enterprise teams building modern IT capabilities.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">{post.category}</p>
            <h2 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h2>
            <p className="mt-2 text-sm text-gray-500">{post.date}</p>
            <p className="mt-3 text-sm text-gray-700">{post.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
