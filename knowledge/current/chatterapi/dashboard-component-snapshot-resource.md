---
title: "Dashboard Component Snapshot Resource"
domain: chatterapi
topic: dashboard-component-snapshot-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.052Z
estimatedTokens: 552
keywords: [Dashboard, Component, Snapshot, Resource]
---

# Dashboard Component Snapshot Resource

> A snapshot of a dashboard component.

# Dashboard Component Snapshot Resource

A snapshot of a dashboard component.

Use this resource to post a snapshot of a dashboard component to a user, group, or dashboard feed to help other users follow changes in the data.

Resource

```

```

Available since version

25.0

Requires Chatter

Yes

HTTP methods

POST

Request body

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

Request parameters

| Name | Type | Description |
| --- | --- | --- |
| parentId | String | A user, group, or dashboard Id to which you are posting the snapshot. |
| filterId1 | String. | Optional. A dashboard filter item Id. |
| filterId2 | String | Optional. A second dashboard filter item Id. |
| filterId3 | String | Optional. A third dashboard filter item Id. |
| feedItemText | String | Text that accompanies the dashboard component snapshot. |
| runningUserId | String | Optional. A user Id from which the view of the dashboard will be created, if other than the creator. |

Response body

API versions 23.0-31.0 return: [Feed Item Attachment: Dashboard](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_attach_dashboard.htm "Dashboard feed item attachment.")

API versions 32.0 and later return: [Dashboard Component Snapshot](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_dashboard_component_snapshot.htm#connect_responses_dashboard_component_snapshot "Represents both dashboard component snapshots and alerts you receive when a dashboard component value crosses a threshold.")

## Code Examples

```
/connect/dashboards/components/componentId/snapshots
```

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
- Feed Item Attachment:
                            Dashboard (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_attach_dashboard.htm)
- Dashboard Component Snapshot (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_dashboard_component_snapshot.htm)
