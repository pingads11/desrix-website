export default function FeaturesPlanet() {
  const benefits = [
    {
      title: "Scalable Delivery",
      text: "Architecture and delivery processes designed for sustained growth and high availability.",
    },
    {
      title: "EU Compliance",
      text: "GDPR-ready operating models, secure data handling, and policy-backed governance.",
    },
    {
      title: "Cloud Security",
      text: "Security-by-design implementation across identity, network, and workload layers.",
    },
    {
      title: "Cost Optimization",
      text: "Right-sized infrastructure, automation, and FinOps insights to control spend.",
    },
    {
      title: "24/7 Operations",
      text: "Always-on monitoring, incident handling, and responsive support teams.",
    },
    {
      title: "Outcome Focus",
      text: "Every engagement is tied to measurable KPIs, delivery timelines, and business value.",
    },
  ];

  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Why EU businesses choose DesRIX
            </h2>
            <p className="mt-3 text-gray-400">
              We combine engineering depth, operational discipline, and practical automation to keep your business moving.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-gray-800 bg-gray-950 p-6"
                data-aos="zoom-y-out"
              >
                <h3 className="text-base font-semibold text-gray-100">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
