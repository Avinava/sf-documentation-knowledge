---
title: "Supported DateTime Format"
domain: loyalty
topic: supported-datetime-format
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.746Z
estimatedTokens: 162
keywords: [DateTime, yyyy-MM-dd’T’HH, ss.SSSZ, specify, Currently, Loyalty, Management, Mobile, SDK, doesn’t, support, defining, custom, formats]
---

# Supported DateTime Format

> Use the yyyy-MM-dd’T’HH:mm:ss.SSSZ format to
    specify dateTime fields. Currently, the Loyalty Management Mobile SDK doesn’t support defining
    custom datetime formats.

# Supported DateTime Format

Use the yyyy-MM-dd’T’HH:mm:ss.SSSZ format to specify dateTime fields. Currently, the Loyalty Management Mobile SDK doesn’t support defining custom datetime formats.

| Available in: all editions that have Loyalty Management enabled |
| --- |


-   yyyy is the four-digit year
-   MM is the two-digit month (01-12)
-   dd is the two-digit day (01-31)
-   T is a separator indicating that time-of-day follows
-   HH is the two-digit hour (00-23)
-   mm is the two-digit minute (00-59)
-   ss is the two-digit seconds (00-59)
-   SSS is the optional three-digit milliseconds (000-999)
-   Z is the reference UTC timezone
