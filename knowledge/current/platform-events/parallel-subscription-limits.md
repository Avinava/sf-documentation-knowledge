---
title: "Parallel Subscription Limits"
domain: platform-events
topic: parallel-subscription-limits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.938Z
estimatedTokens: 321
keywords: [Parallel, Subscription, Limits, Check, subscriptions, enforced, save, configurations, PlatformEventSubscriberConfig, Tooling, API, Metadata]
---

# Parallel Subscription Limits

> Check out the limits for parallel subscriptions. These limits are enforced when you save
  the parallel subscription configurations using PlatformEventSubscriberConfig in Tooling API or
  Metadata API.

# Parallel Subscription Limits

Check out the limits for parallel subscriptions. These limits are enforced when you save the parallel subscription configurations using PlatformEventSubscriberConfig in Tooling API or Metadata API.

| Limit | Value |
| --- | --- |
| Maximum number of parallel subscriptions (partitions) that you can configure for one Apex trigger | 10 |
| Maximum number of Apex triggers that you can configure for parallel subscriptions | 5 |

You can monitor how many Apex triggers are configured for parallel subscriptions by using the REST limits resources and checking for the PlatformEventTriggersWithParallelProcessing value.

This example shows a portion of the output of the REST limits resource that lists the maximum value and usage for the maximum number of Apex triggers that can be configured for parallel subscriptions.

```

```

#### See Also

-   [*REST API Developer Guide*: Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_limits.htm "REST API Developer Guide: Limits - HTML (New Window)")

-   [*REST API Developer Guide*: List Org Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_limits.htm "REST API Developer Guide: List Org Limits - HTML (New Window)")

## Code Examples

```
"PlatformEventTriggersWithParallelProcessing": {
        "Max": 5,
        "Remaining": 2
}
```
