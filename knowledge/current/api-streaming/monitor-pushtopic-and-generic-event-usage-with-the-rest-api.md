---
title: "Monitor PushTopic and Generic Event Usage with the REST API"
domain: api-streaming
topic: monitor-pushtopic-and-generic-event-usage-with-the-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.525Z
estimatedTokens: 440
keywords: [Monitor, PushTopic, Generic, Event, Usage, REST, API, limits, resource, obtain, Streaming, version, 36.0, earlier, Durable]
---

# Monitor PushTopic and Generic Event Usage with the REST API

> Use the REST API limits resource to obtain usage
        information for Streaming API (API version 36.0 and earlier) and Durable Streaming API (API
        version 37.0 and later).

# Monitor PushTopic and Generic Event Usage with the REST API

Use the REST API limits resource to obtain usage information for Streaming API (API version 36.0 and earlier) and Durable Streaming API (API version 37.0 and later).

The usage information that the limits resource returns includes:

| Limit Label | Description | API Version |
| --- | --- | --- |
| DailyDurableGenericStreamingApiEvents | Generic events notifications delivered in the past 24 hours to all CometD clients for Durable Streaming | 37.0 and later |
| DailyDurableStreamingApiEvents | PushTopic event notifications delivered in the past 24 hours to all CometD clients for Durable Streaming | 37.0 and later |
| DurableStreamingApiConcurrentClients | Concurrent CometD clients (subscribers) across all channels and for all event types for Durable Streaming | 37.0 and later |
| DailyGenericStreamingApiEvents | Generic events notifications delivered in the past 24 hours to all CometD clients | 36.0 and earlier |
| DailyStreamingApiEvents | PushTopic event notifications delivered in the past 24 hours to all CometD clients | 36.0 and earlier |
| StreamingApiConcurrentClients | Concurrent CometD clients (subscribers) across all channels and for all event types | 36.0 and earlier |

**REST API Endpoint**

```

```

For more information, see [Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_limits.htm "HTML (New Window)") and [List Organization Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_limits.htm "HTML (New Window)") in the [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_what_is_rest_api.htm "HTML (New Window)").

## Code Examples

```
/vXX.X/limits/
```
