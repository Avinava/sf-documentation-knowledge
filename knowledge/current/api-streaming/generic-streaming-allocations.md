---
title: "Generic Streaming Allocations"
domain: api-streaming
topic: generic-streaming-allocations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.405Z
estimatedTokens: 588
keywords: [Generic, Streaming, Allocations, apply, consumers]
---

# Generic Streaming Allocations

> These default allocations apply to consumers of
   generic streaming.

# Generic Streaming Allocations

These default allocations apply to consumers of generic streaming.

| Description | Performance and Unlimited Editions | Enterprise Edition | Professional Edition | Free Orgs |
| --- | --- | --- | --- | --- |
| Maximum streaming channels per org | 1,000 | 1,000 | 1,000 | 200 |
| Maximum number of concurrent clients (subscribers) across all channels and for all event types | 2,000 | 1,000 | 20 | 20 |
| Maximum number of delivered event notifications within a 24-hour period, shared by all CometD clients, with Durable Generic Streaming (API version 37.0 and later) | 1,000,000 | 200,000 | 100,000 | 10,000 |
| Maximum number of delivered event notifications within a 24-hour period, shared by all CometD clients, with generic streaming (API version 36.0 and earlier) | 100,000 | 100,000 | 100,000 | 10,000 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

Free orgs include Developer Edition orgs and trial orgs (all editions), such as partner test and demo orgs created through the Environment Hub. Sandboxes get the same allocations as their associated production orgs.

If you exceed the default event delivery allocation, you receive this error: 403::Organization total events daily limit exceeded. The error is returned in the Bayeux /meta/connect channel when a CometD subscriber first connects or in an existing subscriber connection. For more information, see [Streaming API Error Codes](atlas.en-us.api_streaming.meta/api_streaming/streaming_error_codes.htm "Learn about the errors that Streaming API can return to troubleshoot your streaming client."). Generic event notifications that are generated after exceeding the allocation are stored in the event bus. You can retrieve stored event messages as long as they are within the retention window of 24 hours.

If you have scenarios that warrant an increase in the number of delivered event notifications within a 24-hour period, contact Salesforce.

#### See Also

-   [Monitor PushTopic and Generic Event Usage with the REST API](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_monitoring_events_usage_api.htm "Use the REST API limits resource to obtain usage information for Streaming API (API version 36.0 and earlier) and Durable Streaming API (API version 37.0 and later).")

## Related Topics

- Streaming API Error Codes (atlas.en-us.api_streaming.meta/api_streaming/streaming_error_codes.htm)
- Monitor PushTopic and Generic Event Usage with the REST API (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_monitoring_events_usage_api.htm)
