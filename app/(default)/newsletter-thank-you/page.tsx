export const metadata = {
  title: "Newsletter Subscription Confirmed",
  description: "Thank you for subscribing to DesRIX updates.",
};

export default function NewsletterThankYouPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-32 text-center sm:px-6 md:pt-40">
      <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
        Subscribed
      </p>
      <h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
        You are on the list
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Thank you for subscribing. We will send practical cloud and AI insights to your inbox.
      </p>
      <a
        href="/blog/"
        className="mt-8 inline-block rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
      >
        Read Our Latest Articles
      </a>
    </section>
  );
}
