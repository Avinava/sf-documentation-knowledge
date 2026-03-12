---
title: "Check Limits for Analytics Notifications"
domain: api-analytics
topic: check-limits-for-analytics-notifications
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.535Z
estimatedTokens: 177
keywords: [Check, Limits, Analytics, Notifications, notification]
---

# Check Limits for Analytics Notifications

> Check analytics notification limits using a GET request.

# Check Limits for Analytics Notifications

Check analytics notification limits using a GET request.

Use a GET request on the [Analytics Notification Limits](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_notifications_reference_notification_limits.htm#analytics_api_notifications_reference_notification_limits "Check to see how many more analytics notifications you can create.") resource to check limits for analytics notifications.

Example Usage

/services/data/v38.0/analytics/notifications/limits?source=waveNotification

| Method | Description |
| --- | --- |
| GET | Check how many analytic notifications you have, and the maximum number you can have. |

Example Response Body

```

```

## Code Examples

```
{
  "userLimit" : {
    "max" : 5,
    "remaining" : 2
  }
}
```

## Related Topics

- Analytics Notification Limits (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_notifications_reference_notification_limits.htm)
