---
title: "PushTopic Streaming Allocations"
domain: api-streaming
topic: pushtopic-streaming-allocations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.400Z
estimatedTokens: 639
keywords: [PushTopic, Streaming, Allocations, apply, consumers, API, versions]
---

# PushTopic Streaming Allocations

> These default allocations apply to consumers of
   PushTopic Streaming in all API versions.

# PushTopic Streaming Allocations

These default allocations apply to consumers of PushTopic Streaming in all API versions.

| Description | Performance and Unlimited Editions | Enterprise Edition | All other supported editions |
| --- | --- | --- | --- |
| Maximum number of topics (PushTopic records) per org | 100 | 50 | 40 |
| Maximum number of concurrent clients (subscribers) across all channels and for all event types | 2,000 | 1,000 | 20 |
| Maximum number of delivered event notifications within a 24-hour period, shared by all CometD clients | 1,000,000 | 200,000 | 50,000 (10,000 for free orgs) |
| Socket timeout during connection (CometD session) | 110 seconds | 110 seconds | 110 seconds |
| Timeout to reconnect after successful connection (keepalive) | 40 seconds | 40 seconds | 40 seconds |
| Maximum length of the SOQL query in the Query field of a PushTopic record | 1,300 characters | 1,300 characters | 1,300 characters |
| Maximum length for a PushTopic name | 25 characters | 25 characters | 25 characters |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

For free orgs, the maximum number of events within a 24-hour period is 10,000. Free orgs include Developer Edition orgs and trial orgs (all editions), such as partner test and demo orgs created through the Environment Hub. Sandboxes get the same allocations as their associated production orgs.

If you exceed the default event delivery allocation, you receive this error: 403::Organization total events daily limit exceeded. The error is returned in the Bayeux /meta/connect channel when a CometD subscriber first connects or in an existing subscriber connection. For more information, see [Streaming API Error Codes](atlas.en-us.api_streaming.meta/api_streaming/streaming_error_codes.htm "Learn about the errors that Streaming API can return to troubleshoot your streaming client."). PushTopic event notifications that are generated after exceeding the allocation are stored in the event bus. You can retrieve stored event messages as long as they are within the retention window of 24 hours.

If you have scenarios that warrant an increase in the number of delivered event notifications within a 24-hour period, contact Salesforce.

#### See Also

-   [Monitoring Event Usage](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_monitoring_events_usage.htm "Obtain basic daily event usage for PushTopic events through the UI, or full usage information for PushTopic and generic events through the API.")

## Related Topics

- Streaming API Error Codes (atlas.en-us.api_streaming.meta/api_streaming/streaming_error_codes.htm)
- Monitoring Event Usage (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_monitoring_events_usage.htm)
