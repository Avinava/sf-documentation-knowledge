#!/bin/bash
set -e
domains=("apex-reference" "apex-guide" "rest-api" "metadata-api" "tooling-api" "lwc" "field-service" "service-cloud")
for d in "${domains[@]}"; do
  echo "========================================"
  echo ">>> Collecting $d"
  npm run collect -- -d "$d"
  echo ">>> Processing $d"
  npm run process -- -d "$d"
done
echo ">>> Generating final knowledge base"
npm run generate
echo ">>> DONE"
