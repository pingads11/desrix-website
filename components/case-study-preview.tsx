import Link from "next/link";

const cases = [
  {
    title: "Retail Platform Modernization",
    result: "Release cycle reduced from 14 days to 48 hours",
    summary:
      "Migrated monolith services to cloud-native workloads with CI/CD and IaC governance.",
  },
  {
    title: "AI Support Automation",
    result: "37% reduction in repetitive ticket load",
    summary:
      "Introduced AI agents for tier-1 triage and multilingual customer workflows.",
  },
  {
    title: "BPO Operations Scale-up",
    result: "24/7 multilingual support launched in 30 days",
    summary:
      "Designed and integrated contact center operations with CRM and QA monitoring.",
  },
];

export default function CaseStudyPreview() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Outcomes that matter
            </h2>
            <p className="mt-2 text-gray-600">
              Real delivery stories focused on reliability, cost, and growth.
            </p>
          </div>
          <Link href="/case-studies/" className="hidden text-sm font-semibold text-blue-700 md:block">
            See all case studies -&gt;
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-blue-700">{item.result}</p>
              <p className="mt-3 text-sm text-gray-700">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
