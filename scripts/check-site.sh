#!/usr/bin/env bash
set -euo pipefail

SITE_URL="${SITE_URL:-https://desrix.lv}"

paths=(
  "/"
  "/services/"
  "/case-studies/"
  "/about/"
  "/blog/"
  "/contact/"
  "/privacy-policy/"
  "/contact/thank-you/"
  "/newsletter-thank-you/"
)

echo "Health check for ${SITE_URL}"

for path in "${paths[@]}"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "${SITE_URL}${path}")
  echo "${path} -> ${code}"
  if [[ "${code}" != "200" ]]; then
    echo "Health check failed: ${path} returned ${code}" >&2
    exit 1
  fi
done

title=$(curl -s "${SITE_URL}/" | grep -o '<title>[^<]*' | head -n 1 || true)
if [[ -n "${title}" ]]; then
  echo "${title}"
fi

echo "Health check passed."
