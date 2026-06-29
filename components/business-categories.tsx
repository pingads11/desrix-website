import Link from "next/link";
import { siteContent } from "@/components/site-content";

const cards = [
  {
    title: "DevOps Services",
    desc: "CI/CD pipelines, Infrastructure as Code, and reliable release engineering.",
  },
  {
    title: "Cloud Computing",
    desc: "AWS, Azure, and GCP migration, modernization, and secure operations.",
  },
  {
    title: "Call Center & BPO",
    desc: "Inbound/outbound operations, multilingual support, and CRM integration.",
  },
  {
    title: "Agentic AI",
    desc: "AI agents, chatbots, and workflow automation that reduce manual overhead.",
  },
  {
    title: "White-label Development",
    desc: "Brand-ready SaaS and custom application delivery for partner ecosystems.",
  },
];

export default function BusinessCategories() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Services built for enterprise outcomes
              </h2>
              <p className="mt-2 text-gray-600">
                End-to-end support across infrastructure, operations, and intelligent automation.
              </p>
            </div>
            <Link href="/services/" className="hidden text-sm font-semibold text-blue-600 md:block">
              View all services -&gt;
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm shadow-black/[0.03]"
                data-aos="zoom-y-out"
              >
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
              </article>
            ))}
            <article className="rounded-xl border border-dashed border-blue-300 bg-blue-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Free consultation</h3>
              <p className="mt-2 text-sm text-gray-700">
                Share your goals and we will deliver a custom IT roadmap aligned with EU market requirements.
              </p>
              <Link href="/contact/#consultation" className="mt-4 inline-block text-sm font-semibold text-blue-700">
                Request consultation -&gt;
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
