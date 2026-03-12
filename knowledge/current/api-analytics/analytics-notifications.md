---
title: "Analytics Notifications"
domain: api-analytics
topic: analytics-notifications
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.596Z
estimatedTokens: 269
keywords: [Analytics, Notifications, API, work, custom, version, 38.0, later]
---

# Analytics Notifications

> Use the Analytics Notifications API to work set up custom analytics notifications. The
    Analytics Notifications API is available in API version 38.0 and later.

# Analytics Notifications

Use the Analytics Notifications API to work set up custom analytics notifications. The Analytics Notifications API is available in API version 38.0 and later.

Resources for the Analytics Notifications API are available at /services/data/<latest API version>/analytics/notifications. You can query each resource with an HTTP method.

| Resource | Supported HTTP Method | Description |
| --- | --- | --- |
| Analytics Notification List/services/data/<latest API version>/analytics/notifications | GETPOST | Returns a list of recent notifications.Create an analytics notification. |
| Analytics Notification/services/data/<latest API version>/analytics/notifications/<Id> | GETPUTDELETE | Returns information about a specific notification.Save changes to the notification as specified in the request body.Delete the notification. Deleted notifications can't be recovered. |
| Analytics Notification Limits/services/data/<latest API version>/analytics/notifications/limits | GET | Check to see how many more analytics notifications you can create. |

## Related Topics

- Analytics Notification List (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_notifications_reference_list.htm)
- Analytics Notification (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_notifications_reference_notification.htm)
- Analytics Notification Limits (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_notifications_reference_notification_limits.htm)
