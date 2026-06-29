export const metadata = {
  title: "Services",
  description:
    "DevOps, cloud, BPO, agentic AI, and white-label engineering services for European businesses.",
};

const serviceSections = [
  {
    title: "DevOps Services",
    points: [
      "CI/CD pipeline design and release automation",
      "Infrastructure as Code for repeatable environments",
      "Kubernetes and containerization enablement",
    ],
  },
  {
    title: "Cloud Computing",
    points: [
      "AWS, Azure, and GCP solution architecture",
      "Migration and application modernization",
      "Cloud security hardening and governance",
    ],
  },
  {
    title: "Call Center & BPO Services",
    points: [
      "Inbound and outbound customer operations",
      "Multilingual support coverage",
      "CRM and workflow integration",
    ],
  },
  {
    title: "Agentic AI Solutions",
    points: [
      "AI agents for process automation",
      "Chatbots and workflow orchestration",
      "AI-powered customer support operations",
    ],
  },
  {
    title: "White-label Application Development",
    points: [
      "SaaS product engineering for partners",
      "Customization and integration services",
      "Brand-ready delivery for reseller channels",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 md:pt-40">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Services</h1>
        <p className="mt-4 text-lg text-gray-600">
          End-to-end delivery across infrastructure, operations, and intelligent automation.
        </p>
      </div>

      <div className="mt-10 grid gap-5">
        {serviceSections.map((section) => (
          <article key={section.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm shadow-black/[0.03]">
            <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div id="consultation" className="mt-12 rounded-xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="text-2xl font-bold text-gray-900">Flagship Offer</h3>
        <p className="mt-2 text-gray-700">Launch your IT infrastructure in 30 days with a custom implementation roadmap.</p>
        <a href="/contact/" className="mt-4 inline-block text-sm font-semibold text-blue-700">
          Request a consultation -&gt;
        </a>
      </div>
    </section>
  );
}
