import PageIllustration from "@/components/page-illustration";
import { siteContent } from "@/components/site-content";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <p
              className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700"
              data-aos="zoom-y-out"
            >
              EU Enterprise IT Services
            </p>
            <h1
              className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={100}
            >
              {siteContent.heroHeadline}
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={200}
              >
                {siteContent.heroSubheadline}
              </p>
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="/contact/#consultation"
                >
                  <span className="relative inline-flex items-center">
                    Get Started
                    <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
                <a
                  className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                  href="/contact/"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div
            className="mx-auto grid max-w-5xl gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-lg shadow-black/[0.04] sm:grid-cols-2 lg:grid-cols-4"
            data-aos="zoom-y-out"
            data-aos-delay={450}
          >
            <div className="rounded-lg bg-blue-50 p-4 text-left">
              <h3 className="text-sm font-semibold text-gray-900">Scalable Solutions</h3>
              <p className="mt-1 text-sm text-gray-600">Architecture built for growth, not rework.</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 text-left">
              <h3 className="text-sm font-semibold text-gray-900">GDPR-ready Delivery</h3>
              <p className="mt-1 text-sm text-gray-600">Security and compliance designed in from day one.</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 text-left">
              <h3 className="text-sm font-semibold text-gray-900">Cost Efficiency</h3>
              <p className="mt-1 text-sm text-gray-600">Automation-first execution with measurable ROI.</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 text-left">
              <h3 className="text-sm font-semibold text-gray-900">24/7 Support</h3>
              <p className="mt-1 text-sm text-gray-600">Round-the-clock operations for business continuity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
