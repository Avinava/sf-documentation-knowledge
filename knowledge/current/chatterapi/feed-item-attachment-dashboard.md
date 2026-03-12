---
title: "Feed Item Attachment: Dashboard"
domain: chatterapi
topic: feed-item-attachment-dashboard
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.757Z
estimatedTokens: 517
keywords: [Feed, Item, Attachment, Dashboard]
---

# Feed Item Attachment: Dashboard

> Dashboard feed item attachment.

# Feed Item Attachment: Dashboard

Dashboard feed item attachment.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This response body isn’t available in version 32.0 and later. In version 32.0 and later, [Dashboard Component Snapshot Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_dashboard_component_snapshot_capability.htm "If a feed element has this capability, it has a dashboard component snapshot. A snapshot is a static image of a dashboard component at a specific point in time.") is used.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| componentId | String | 18-character ID of the component. | Small, 29.0 | 24.0–31.0 |
| componentName | String | Name of the component. If no name is saved with the component, returns the localized string, “Untitled Component.”. | Small, 29.0 | 24.0–31.0 |
| dashboard​BodyText | String | Text that should be displayed next to the actor in the body of a feed item. This is used instead of the default body text. If no text is specified, and there is no default body text, returns null. | Small, 29.0 | 24.0–31.0 |
| dashboardId | String | 18-character ID of the dashboard. | Small, 29.0 | 24.0–31.0 |
| dashboard​Name | String | Name of the dashboard. | Small, 29.0 | 24.0–31.0 |
| fullSize​ImageUrl | String | URL of the full-sized dashboard image. | Small, 29.0 | 24.0–31.0 |
| lastRefresh​Date | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z of when this dashboard was last refreshed. | Small, 29.0 | 24.0–31.0 |
| lastRefreshDate​DisplayText | String | The text of the last refresh date to be displayed, such as, “Last refreshed on October 31, 2011.” | Small, 29.0 | 24.0–31.0 |
| runningUser | User Summary | The user running the dashboard. | Small, 29.0 | 24.0–31.0 |
| thumbnailUrl | String | URL of the thumbnail-sized dashboard image. | Small, 29.0 | 24.0–31.0 |
| type | String | DashboardComponent | Small, 29.0 | 27.0–31.0 |

## Related Topics

- Dashboard Component Snapshot Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_dashboard_component_snapshot_capability.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
