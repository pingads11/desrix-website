export const metadata = {
  title: "About",
  description:
    "Learn about DesRIX mission, leadership, and EU-first compliance-driven delivery model.",
};

const team = [
  {
    name: "Amina Kovacs",
    role: "Head of Cloud & DevOps",
    expertise: "Cloud architecture, SRE, and release engineering",
  },
  {
    name: "Lukas Berg",
    role: "Director of AI Solutions",
    expertise: "Agentic automation, AI support systems, and MLOps",
  },
  {
    name: "Elina Markova",
    role: "Operations Lead",
    expertise: "BPO service design, multilingual support, and QA",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 md:pt-40">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">About DesRIX</h1>
        <p className="mt-4 text-lg text-gray-600">
          We help European companies modernize operations through practical cloud engineering,
          resilient DevOps, and intelligent automation.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Mission</h2>
          <p className="mt-2 text-gray-700">
            Deliver reliable, scalable, and secure IT services that turn strategy into measurable outcomes.
          </p>
        </article>
        <article className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Vision</h2>
          <p className="mt-2 text-gray-700">
            Be the preferred EU technology partner for cloud-native growth and AI-enabled operations.
          </p>
        </article>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-gray-900">Leadership Team</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {team.map((member) => (
          <article key={member.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-blue-700">{member.role}</p>
            <p className="mt-2 text-sm text-gray-700">{member.expertise}</p>
          </article>
        ))}
      </div>

      <article className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-xl font-semibold text-gray-900">Compliance & Security</h2>
        <p className="mt-2 text-gray-700">
          Our delivery model is GDPR-ready with security controls integrated across infrastructure,
          software delivery, and support operations.
        </p>
      </article>
    </section>
  );
}
