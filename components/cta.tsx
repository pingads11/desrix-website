export default function Cta() {
  return (
    <section id="consultation">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 px-6 py-12 text-center shadow-xl md:px-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Main Offer
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-100 md:text-4xl">
            Launch your IT infrastructure in 30 days
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Start with a free consultation and get a practical, phased roadmap for cloud migration,
            DevOps acceleration, and AI-enabled operations.
          </p>
          <div className="mx-auto mt-8 flex max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <a
              className="btn bg-linear-to-t from-blue-600 to-blue-500 text-white shadow-sm hover:brightness-110"
              href="/contact/#consultation"
            >
              Request a Consultation
            </a>
            <a className="btn bg-white text-gray-900 shadow-sm hover:bg-gray-100" href="/services/">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
