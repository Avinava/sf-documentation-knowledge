---
title: "Engagement Signal Collection"
domain: chatterapi
topic: engagement-signal-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.422Z
estimatedTokens: 159
keywords: [Engagement, Signal, Collection, Signals]
---

# Engagement Signal Collection

> List of Engagement Signals.

# Engagement Signal Collection

List of Engagement Signals.

This representation extends CdpPaginatedResponseBaseRepresentation. For inherited pagination fields, see [Paginated Response Base Output](https://developer.salesforce.com/docs/data/connectapi/references/spec?meta=type%3APaginated%2BResponse%2BBase%2BOutput).

JSON example

This example shows a sample response with a collection of engagement signals.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| engagementSignals | Engagement Signal[] | List of Engagement Signals. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "engagementSignals": [
    {
      "id": "1H0xx0000004CAeCAM",
      "name": "EmailClicks",
      "label": "Email Clicks",
      "objectName": "Email_Engagement__dlm",
      "dataSpaceName": "default"
    }
  ],
  "size": 1,
  "totalSize": 1
}
```

## Related Topics

- Engagement Signal (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal.htm)
