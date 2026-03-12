---
title: "Dashboard Component Snapshot Input"
domain: chatterapi
topic: dashboard-component-snapshot-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.492Z
estimatedTokens: 208
keywords: [Dashboard, Component, Snapshot, Input]
---

# Dashboard Component Snapshot Input

> Dashboard component snapshot input.

# Dashboard Component Snapshot Input

Dashboard component snapshot input.

Root XML tag

<dashboardComponentSnapshot>

JSON

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| parentId | String | A user, group, or dashboard ID to which you are posting the snapshot. | 25.0 |
| filterId1 | String | Optional. A dashboard filter item ID. | 25.0 |
| filterId2 | String | Optional. A second dashboard filter item ID. | 25.0 |
| filterId3 | String | Optional. A third dashboard filter item ID. | 25.0 |
| feedItemBody | Message Body Input | Contains the text that accompanies the feed item associated with the dashboard component snapshot. | 25.0 |
| runningUserId | String | Optional. A user ID from which the view of the dashboard will be created, if other than the creator. | 25.0 |

## Code Examples

```
{ 
   "parentId" : "0F9D00000000I4O",
   "feedItemBody" : {
      "messageSegments" : [
      {
         "text" : "Sales Heat",
         "type" : "Text"
      }
      ]
   }
}
```

## Related Topics

- Message Body
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
