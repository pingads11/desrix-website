export const metadata = {
  title: "Case Studies",
  description:
    "Selected delivery outcomes across cloud, DevOps, AI automation, and BPO operations.",
};

const caseStudies = [
  {
    title: "Retail Platform Modernization",
    sector: "E-commerce",
    challenge:
      "Frequent production incidents and a slow release process limited growth in peak periods.",
    solution:
      "Re-architected workloads on managed cloud services, implemented CI/CD guardrails, and introduced infrastructure as code standards.",
    impact: [
      "Release cycle reduced from 14 days to 48 hours",
      "Production incident volume reduced by 42%",
      "Infrastructure cost optimized by 18%",
    ],
  },
  {
    title: "AI Support Automation",
    sector: "SaaS",
    challenge:
      "Support teams were overloaded with repetitive inquiries, increasing response times.",
    solution:
      "Designed agentic AI assistants for tier-1 triage, workflow automation, and multilingual intent handling.",
    impact: [
      "37% reduction in repetitive tickets",
      "First response time improved by 54%",
      "24/7 self-service support coverage achieved",
    ],
  },
  {
    title: "BPO Operations Scale-up",
    sector: "Professional Services",
    challenge:
      "The client needed a fast multi-language support setup across EU markets.",
    solution:
      "Deployed inbound/outbound operations, CRM integration, QA scorecards, and operational reporting.",
    impact: [
      "24/7 multilingual support live in 30 days",
      "Customer satisfaction increased by 21%",
      "Service-level adherence sustained above 98%",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 md:pt-40">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Case Studies</h1>
        <p className="mt-4 text-lg text-gray-600">
          Proof of delivery through measurable outcomes across cloud, automation, and operations.
        </p>
      </div>

      <div className="mt-10 grid gap-5">
        {caseStudies.map((item) => (
          <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm shadow-black/[0.03]">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">{item.sector}</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">{item.title}</h2>
            <p className="mt-4 text-sm text-gray-700"><strong>Challenge:</strong> {item.challenge}</p>
            <p className="mt-3 text-sm text-gray-700"><strong>Solution:</strong> {item.solution}</p>
            <div className="mt-4 rounded-lg bg-blue-50 p-4">
              <p className="text-sm font-semibold text-gray-900">Business impact</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                {item.impact.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
