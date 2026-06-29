export const metadata = {
  title: "Privacy Policy",
  description: "Privacy and cookie policy for DesRIX services.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-16 pt-32 sm:px-6 md:pt-40">
      <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-gray-700">
        DesRIX handles data with GDPR-aligned principles. We collect only the information required to
        respond to inquiries, provide services, and improve platform reliability.
      </p>

      <div className="mt-8 space-y-5 text-gray-700">
        <article>
          <h2 className="text-xl font-semibold text-gray-900">Data We Process</h2>
          <p className="mt-2">Contact details submitted through forms, basic analytics preferences, and service-related communication records.</p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-gray-900">How We Use Data</h2>
          <p className="mt-2">To answer inquiries, deliver contracted services, provide support, and maintain security and compliance obligations.</p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-gray-900">Your Rights</h2>
          <p className="mt-2">You can request access, correction, or deletion of personal data by contacting info@desrix.lv.</p>
        </article>
      </div>
    </section>
  );
}
