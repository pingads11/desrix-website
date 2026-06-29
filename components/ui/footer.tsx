import Link from "next/link";
import Logo from "./logo";
import { siteContent } from "@/components/site-content";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid gap-10 py-10 sm:grid-cols-12 md:py-14 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          <div className="space-y-3 sm:col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="text-sm font-semibold text-gray-900">
                {siteContent.companyName}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Trusted EU IT partner for cloud, DevOps, AI, and scalable support
              operations.
            </p>
            <p className="text-sm text-gray-600">
              {siteContent.contact.address}
              <br />
              <a className="text-blue-600" href={`mailto:${siteContent.contact.email}`}>
                {siteContent.contact.email}
              </a>
              {" | "}
              <a className="text-blue-600" href={`tel:${siteContent.contact.phone.replace(/\s+/g, "")}`}>
                {siteContent.contact.phone}
              </a>
            </p>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-gray-600 hover:text-gray-900" href="/">Home</Link></li>
              <li><Link className="text-gray-600 hover:text-gray-900" href="/services/">Services</Link></li>
              <li><Link className="text-gray-600 hover:text-gray-900" href="/case-studies/">Case Studies</Link></li>
              <li><Link className="text-gray-600 hover:text-gray-900" href="/about/">About</Link></li>
              <li><Link className="text-gray-600 hover:text-gray-900" href="/blog/">Blog</Link></li>
              <li><Link className="text-gray-600 hover:text-gray-900" href="/contact/">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h3 className="text-sm font-semibold">Service Focus</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {siteContent.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 sm:col-span-12 md:col-span-6 lg:col-span-3">
            <h3 className="text-sm font-semibold">Newsletter</h3>
            <p className="text-sm text-gray-600">
              Receive practical cloud and AI growth insights once a month.
            </p>
            <form
              className="space-y-2"
              action="https://formsubmit.co/hello@desrix.eu"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Website Newsletter Signup" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="https://desrix.lv/newsletter-thank-you/"
              />
              <label htmlFor="newsletter-email" className="sr-only">
                Work email
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                placeholder="Work email"
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-blue-500 focus:ring-2"
              />
              <button
                type="submit"
                className="btn-sm w-full bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to receive operational and product updates from DesRIX.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-gray-200 py-5 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {siteContent.companyName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-gray-800" href="/privacy-policy/">Privacy Policy</Link>
            <span>GDPR-ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
