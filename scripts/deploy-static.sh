#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${DEPLOY_DIR:-}" ]]; then
  echo "DEPLOY_DIR is required (example: DEPLOY_DIR=~/domains/desrix.lv/public_html)" >&2
  exit 1
fi

target_dir="${DEPLOY_DIR%/}"

if [[ ! -d "${target_dir}" ]]; then
  echo "Target directory does not exist: ${target_dir}" >&2
  exit 1
fi

echo "Building static site..."
npm run build

echo "Syncing out/ to ${target_dir} ..."
rsync -a --delete out/ "${target_dir}/"

echo "Running post-deploy health check..."
SITE_URL="${SITE_URL:-https://desrix.lv}" bash scripts/check-site.sh

echo "Static deploy complete."
