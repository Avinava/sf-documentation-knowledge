---
title: "What Happens When Something Isn’t Primed (Preloaded)"
domain: mobile-offline
topic: what-happens-when-something-isnt-primed-preloaded
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.696Z
estimatedTokens: 190
keywords: [Happens, Something, Isn’t, Primed, Preloaded, Priming, offline, “best, effort”, mechanism, Salesforce, mobile, apps, resilient, situations]
---

# What Happens When Something Isn’t Primed (Preloaded)

> Priming for offline use is a “best effort” mechanism. Salesforce mobile apps are
  resilient in situations where resources are required by a mobile client but weren’t
  primed.

# What Happens When Something Isn’t Primed (Preloaded)

Priming for offline use is a “best effort” mechanism. Salesforce mobile apps are resilient in situations where resources are required by a mobile client but weren’t primed.

-   If the client is online, missing data and metadata resources are loaded when needed. There’s a minor performance impact due to the extra network requests.
-   If the client is offline, then missing data and metadata can’t be retrieved. The Lightning Web Components framework, and the Salesforce mobile app it’s running within, handle this situation with either a status display or an error message, depending on what wasn’t primed before going offline. Specific behavior is dependent on the component and how it’s implemented.
