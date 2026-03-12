---
title: "Dashboard Component Snapshot"
domain: chatterapi
topic: dashboard-component-snapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.169Z
estimatedTokens: 484
keywords: [Dashboard, Component, Snapshot, snapshots, alerts, receive, crosses, threshold]
---

# Dashboard Component Snapshot

> Represents both dashboard component snapshots and alerts you receive when a dashboard
    component value crosses a threshold.

# Dashboard Component Snapshot

Represents both dashboard component snapshots and alerts you receive when a dashboard component value crosses a threshold.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| componentId | String | 18-character ID of the dashboard component. | Small, 32.0 | 32.0 |
| componentName | String | The dashboard component name. | Small, 32.0 | 32.0 |
| dashboardBodyText | String | Display this text next to the actor in the feed element.Use this text in place of the default body text. | Small, 32.0 | 32.0 |
| dashboardId | String | 18-character ID of the dashboard. | Small, 32.0 | 32.0 |
| dashboardName | String | The name of the dashboard. | Small, 32.0 | 32.0 |
| fullSizeImageUrl | String | The source URL to retrieve the full-size image of a snapshot. Access this URL with OAuth credentials. | Small, 32.0 | 32.0 |
| lastRefreshDate | String | ISO 8601 date specifying when this dashboard component was last refreshed. | Small, 32.0 | 32.0 |
| lastRefreshDate​DisplayText | String | Display text for the last refresh date, for example, “Last Refreshed on October 31, 2013.” | Small, 32.0 | 32.0 |
| runningUser | User Summary | The running user of the dashboard at the time the snapshot was posted. This value may be null. Each dashboard has a running user, whose security settings determine which data to display in a dashboard. | Small, 32.0 | 32.0 |
| thumbnailUrl | String | The source URL to retrieve the thumbnail image of a snapshot. Access this URL with OAuth credentials. | Small, 32.0 | 32.0 |

#### See Also

-   [Dashboard Component Snapshot Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_dashboard_component_snapshot_capability.htm "If a feed element has this capability, it has a dashboard component snapshot. A snapshot is a static image of a dashboard component at a specific point in time.")

## Related Topics

- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Dashboard Component Snapshot Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_dashboard_component_snapshot_capability.htm)
