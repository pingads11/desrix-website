import { siteContent } from "@/components/site-content";

export const metadata = {
  title: "Contact",
  description: "Request a consultation with DesRIX for cloud, AI, and scalable IT services.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 md:pt-40">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Tell us about your goals and we will prepare a custom IT roadmap.
          </p>

          <div className="mt-6 space-y-2 text-sm text-gray-700">
            <p><strong>Email:</strong> <a className="text-blue-600" href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a></p>
            <p><strong>Phone:</strong> <a className="text-blue-600" href={`tel:${siteContent.contact.phone.replace(/\s+/g, "")}`}>{siteContent.contact.phone}</a></p>
            <p><strong>Office:</strong> {siteContent.contact.address}</p>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
            <iframe
              src={siteContent.contact.mapEmbed}
              width="100%"
              height="300"
              loading="lazy"
              title="DesRIX Office Map"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div id="consultation" className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Request a Consultation</h2>
          <p className="mt-2 text-sm text-gray-600">We usually reply within one business day.</p>
          <form
            className="mt-5 space-y-4"
            action="https://formsubmit.co/hello@desrix.eu"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Website Consultation Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://desrix.lv/contact/thank-you/"
            />
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <input id="name" name="name" required className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="company">Company</label>
              <input id="company" name="company" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2" />
            </div>
            <button type="submit" className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 text-white shadow-sm hover:brightness-110">
              Request a Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
