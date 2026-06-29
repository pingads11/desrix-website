#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${DEPLOY_DIR:-}" ]]; then
  echo "DEPLOY_DIR is required (example: DEPLOY_DIR=~/domains/desrix.lv/public_html)" >&2
  exit 1
fi

target_dir="${DEPLOY_DIR%/}"
project_root=$(pwd)

if [[ ! -d "${target_dir}" ]]; then
  echo "Target directory does not exist: ${target_dir}" >&2
  exit 1
fi

if [[ "${ALLOW_SAME_DIR_DEPLOY:-0}" != "1" && "$(cd "${target_dir}" && pwd -P)" == "$(cd "${project_root}" && pwd -P)" ]]; then
  echo "Refusing in-place deploy from project root to itself." >&2
  echo "Run this from a separate repo path and point DEPLOY_DIR at public_html, or set ALLOW_SAME_DIR_DEPLOY=1." >&2
  exit 1
fi

if [[ "${SKIP_BUILD:-0}" == "1" ]]; then
  echo "Skipping build (SKIP_BUILD=1). Using existing out/."
else
  echo "Building static site..."
  npm run build
fi

echo "Syncing out/ to ${target_dir} ..."
staging_dir=$(mktemp -d)
cleanup() {
  rm -rf "${staging_dir}"
}
trap cleanup EXIT

# Stage artifacts first so rsync --delete cannot mutate the source during transfer.
rsync -a out/ "${staging_dir}/"
rsync -a --delete "${staging_dir}/" "${target_dir}/"

echo "Running post-deploy health check..."
SITE_URL="${SITE_URL:-https://desrix.lv}" bash scripts/check-site.sh

echo "Static deploy complete."
