"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "desrix-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-4xl rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
      <p className="text-sm text-gray-700">
        We use cookies to improve your experience and maintain GDPR-compliant
        analytics preferences. Read our{" "}
        <Link className="text-blue-600 underline" href="/privacy-policy/">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-3 flex justify-end gap-2">
        <button
          type="button"
          onClick={acceptAll}
          className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
}
