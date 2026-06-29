export const metadata = {
  title: "Consultation Request Received",
  description: "Your consultation request has been sent to the DesRIX team.",
};

export default function ContactThankYouPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-32 text-center sm:px-6 md:pt-40">
      <p className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
        Submitted
      </p>
      <h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
        Thank you for reaching out
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Your request has been sent successfully. Our team will contact you shortly with next steps.
      </p>
      <a
        href="/services/"
        className="mt-8 inline-block rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
      >
        Explore Services
      </a>
    </section>
  );
}
