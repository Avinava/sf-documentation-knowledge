---
title: "Asynchronous Processing"
domain: mc-apis
topic: asynchronous-processing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:20.260Z
estimatedTokens: 564
keywords: [Asynchronous, Processing, works, queueing, SOAP, API, calls, async, server, they, processed, Marketing, Cloud, scheduled, future, technical, articles]
---

# Asynchronous Processing

> Asynchronous processing works by queueing SOAP API calls in an async server before they are processed. Calls are then processed as Marketing Cloud is available or scheduled to be processed in the future. Asynchronous processing improves the responsiveness and processing speed of Marketing Cloud SOAP

# Asynchronous Processing

Asynchronous processing works by queueing SOAP API calls in an async server before they are processed. Calls are then processed as Marketing Cloud is available or scheduled to be processed in the future. Asynchronous processing improves the responsiveness and processing speed of Marketing Cloud SOAP API calls. Even when Marketing Cloud is in maintenance mode, API calls are not dropped. They wait on the async server until Marketing Cloud is ready to process them. Queued calls can be:

-   Processed in the order they are received
-   Scheduled to be processed at a particular time
-   Processed according to priority

## Get Started

-   [When to Use Asynchronous Processing](atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing_scenarios.htm) Asynchronous processing is not necessary for all your API calls. Analyze these scenarios to identify which API calls are best suited for asynchronous processing.
-   [Endpoints, Methods, and Objects for Asynchronous Processing](atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing_support.htm) Make sure the endpoints, methods, and objects you use support asynchronous processing.
-   [Anatomy of the Options Base Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing_options_object.htm) To make existing calls asynchronous, include the Options base object parameters that influence asynchronous processing.
-   [Callback Handling for Asynchronous Calls](atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing_callback.htm) Marketing Cloud recommends using an HTTPPost callback to return the results of asynchronous API requests.

## Limitations of Synchronous Processing

With synchronous call processing, API calls go directly to Marketing Cloud to be processed at the time they are received. If Marketing Cloud is unavailable, either for scheduled or unscheduled maintenance, synchronous API calls cannot be received and are not processed. If calls aren't processed, it's difficult to identify when a call is dropped. For example, you can send some calls again with no significant impact to the system or your customers. For processing-heavy actions, such as an email send, duplicating the call is not recommended.

## Related Topics

- When to Use Asynchronous Processing (atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing_scenarios.htm)
- Endpoints, Methods, and Objects for Asynchronous Processing (atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing_support.htm)
- Anatomy of the Options Base Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing_options_object.htm)
- Callback Handling for Asynchronous Calls (atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing_callback.htm)
