---
title: "Data Import Dates"
domain: dataLoader
topic: data-import-dates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.197Z
estimatedTokens: 162
keywords: [Data, Import, Dates, Limits, importing, Loader]
---

# Data Import Dates

> Limits for importing data with Data Loader.

# Data Import Dates

Limits for importing data with Data Loader.

The following limits apply to data imported using Data Loader.

Only dates within a certain range are valid. The earliest valid date is 1700-01-01T00:00:00Z GMT, or just after midnight on January 1, 1700. The latest valid date is 4000-12-31T00:00:00Z GMT, or just after midnight on December 31, 4000. These values are offset by your time zone. For example, in the Pacific time zone, the earliest valid date is 1699-12-31T16:00:00, or 4:00 PM on December 31, 1699.

When using Data Loader version 28.0 and later, the maximum field size for imported CSV files is 32,000 characters.
