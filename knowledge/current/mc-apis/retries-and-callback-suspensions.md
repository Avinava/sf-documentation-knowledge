---
title: "Retries and Callback Suspensions"
domain: mc-apis
topic: retries-and-callback-suspensions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:16.826Z
estimatedTokens: 271
keywords: [Retries, Callback, Suspensions, Event, Notification, Service, ENS, maximum, two, seconds, process, batch, HTTP, indicating, successful, processing]
---

> Your Event Notification Service (ENS) callback has a maximum of two seconds to process an event batch and return an HTTP 200, 201, 202, 203, or 204 response, indicating successful processing.

# Retries and Callback Suspensions

Your Event Notification Service (ENS) callback has a maximum of two seconds to process an event batch and return an HTTP 200, 201, 202, 203, or 204 response, indicating successful processing.

The ENS retries up to three times to deliver the batch of notification events on these occasions.

-   Your callback doesn’t respond within two seconds.
-   Your callback is unavailable or unreachable.
-   Your callback responds with any HTTP code other than 200, 201, 202, 203, or 204.

If the notification batch can’t be delivered after three retries, the batch is dropped as undeliverable.

When two or more consecutive delivery failures occur for a callback in a 5-minute window, the ENS suspends your callback for 10 minutes. During this suspension period, the ENS doesn’t attempt to deliver notification events, and they are dropped.

After the initial 10-minute suspension period, the ENS resumes delivery attempts to your callback. Any additional delivery failures put your callback into suspension for increasing periods of time, up to one hour.
