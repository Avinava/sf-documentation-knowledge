---
title: "ConnectApi.DashboardComponentAttachment"
domain: apex-reference
topic: connectapidashboardcomponentattachment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.904Z
estimatedTokens: 495
keywords: [ConnectApi.DashboardComponentAttachment, Attachments, feed, items, DashboardSnapshot., Important]
---

# ConnectApi.DashboardComponentAttachment

> Attachments in feed items with type DashboardSnapshot.

# ConnectApi.DashboardComponentAttachment

Attachments in feed items with type DashboardSnapshot.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, [ConnectApi.DashboardComponentSnapshotCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_dashboard_capability.htm "If a feed element has this capability, it has a dashboard component snapshot. A snapshot is a static image of a dashboard component at a specific point in time.") is used.

Subclass of [ConnectApi.FeedItemAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm "Feed item attachment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| componentId | String | Component’s 18–character ID. | 28.0–31.0 |
| componentName | String | Name of the component. If no name is saved with the component, returns the localized string, “Untitled Component.”. | 28.0–31.0 |
| dashboardBodyText | String | Text displayed next to the actor in the body of a feed item. This is used instead of the default body text. If no text is specified, and there is no default body text, returns null. | 28.0–31.0 |
| dashboardId | String | Dashboard’s 18–character ID. | 28.0–31.0 |
| dashboardName | String | Name of the dashboard. | 28.0–31.0 |
| fullSizeImageUrl | String | URL of the full-sized dashboard image. | 28.0–31.0 |
| lastRefreshDate | Datetime | ISO8601 date string, for example, 2011-02-25T18:24:31.000Z, specifying when this dashboard was last refreshed. | 28.0–31.0 |
| lastRefreshDate​DisplayText | String | The text of the last refresh date to be displayed, such as, “Last refreshed on October 31, 2011.” | 28.0–31.0 |
| runningUser | ConnectApi.​User​Summary | The user running the dashboard. | 28.0–31.0 |
| thumbnailUrl | String | URL of the thumbnail-sized dashboard image. | 28.0–31.0 |

## Related Topics

- ConnectApi.DashboardComponentSnapshotCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_dashboard_capability.htm)
- ConnectApi.FeedItemAttachment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​User​Summary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
