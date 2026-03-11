---
title: "ConnectApi.DashboardComponentSnapshot"
domain: apex-reference
topic: connectapidashboardcomponentsnapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.507Z
keywords: [ConnectApi.DashboardComponentSnapshot, See]
---

# ConnectApi.DashboardComponentSnapshot

# ConnectApi.DashboardComponentSnapshot

Represents both dashboard component snapshots and alerts you receive when a dashboard component value crosses a threshold.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| componentId | String | 18-character ID of the dashboard component. | 32.0 |
| componentName | String | The dashboard component name. | 32.0 |
| dashboardBodyText | String | Display this text next to the actor in the feed element.Use this text in place of the default body text. | 32.0 |
| dashboardId | String | 18-character ID of the dashboard. | 32.0 |
| dashboardName | String | The name of the dashboard. | 32.0 |
| fullSizeImageUrl | String | The source URL to retrieve the full-size image of a snapshot. Access this URL with OAuth credentials. | 32.0 |
| lastRefreshDate | Datetime | ISO 8601 date specifying when this dashboard component was last refreshed. | 32.0 |
| lastRefresh​DateDisplayText | String | Display text for the last refresh date, for example, “Last Refreshed on October 31, 2013.” | 32.0 |
| runningUser | ConnectApi.​UserSummary | The running user of the dashboard at the time the snapshot was posted. This value may be null. Each dashboard has a running user, whose security settings determine which data to display in a dashboard. | 32.0 |
| thumbnailUrl | String | The source URL to retrieve the thumbnail image of a snapshot. Access this URL with OAuth credentials. | 32.0 |

#### See Also

-   [ConnectApi.DashboardComponentSnapshotCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_dashboard_capability.htm "If a feed element has this capability, it has a dashboard component snapshot. A snapshot is a static image of a dashboard component at a specific point in time.")
    
-   [ConnectApi.DatacloudCompanies](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_company_collection.htm "Lists all companies that were purchased in a specific order, page URLs, and the number of companies in the order.")