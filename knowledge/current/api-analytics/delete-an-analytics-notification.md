---
title: "Delete an Analytics Notification"
domain: api-analytics
topic: delete-an-analytics-notification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.529Z
estimatedTokens: 178
keywords: [Analytics, Notification, Once, deleted, can't, recovered]
---

# Delete an Analytics Notification

> Delete an Analytics Notification using a DELETE request. Once deleted, the analytics
    notification can't be recovered.

# Delete an Analytics Notification

Delete an Analytics Notification using a DELETE request. Once deleted, the analytics notification can't be recovered.

Use a DELETE request on the [Analytics Notification](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_notifications_reference_notification.htm#analytics_api_notifications_reference_notification "Get information about (GET), save changes to (PUT) or delete (DELETE) a specific analytics notification.") resource to delete an analytics notification.

Example Usage

/services/data/v38.0/analytics/notifications/analytics notification ID

The analytic notification deletes and returns a 204 HTTP response code with no content in the response body.

## Related Topics

- Analytics Notification (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_notifications_reference_notification.htm)
