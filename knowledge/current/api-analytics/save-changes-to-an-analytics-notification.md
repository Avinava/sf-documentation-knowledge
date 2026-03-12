---
title: "Save Changes to an Analytics Notification"
domain: api-analytics
topic: save-changes-to-an-analytics-notification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.541Z
estimatedTokens: 202
keywords: [Save, Changes, Analytics, Notification, PUT]
---

# Save Changes to an Analytics Notification

> Save Changes to an Analytics Notification using a PUT request.

# Save Changes to an Analytics Notification

Save Changes to an Analytics Notification using a PUT request.

Use a PUT request on the [Analytics Notification](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_notifications_reference_notification.htm#analytics_api_notifications_reference_notification "Get information about (GET), save changes to (PUT) or delete (DELETE) a specific analytics notification.") resource to save changes to an analytics notification.

Example Usage

/services/data/v38.0/analytics/notifications/analytics notification ID

Example Request Body

In this example, an analytics notification is changed so that it runs daily at 9:00 AM instead of 3:00 AM.

```

```

Example Response Body

The response body reflects the updated and saved analytics notifications.

```

```

## Code Examples

```
{
  "active" : true,
  "createdDate" : "",
  "deactivateOnTrigger" : false,
  "id" : "0AuR00000004CZTKA2",
  "lastModifiedDate" : "",
  "name" : "New Notification",
  "recordId" : "00OR0000000PD55MAG",
  "schedule" : {
    "details" : {
      "time" : 9
    },
    "frequency" : "daily"
  },
  "source" : "lightningReportSubscribe",
  "thresholds" : [ {
    "actions" : [ {
      "configuration" : {
        "recipients" : [ ]
      },
      "type" : "sendEmail"
    } ],
    "conditions" : null,
    "type" : "always"
  } ]
}
```

```
{
  "active" : true,
  "createdDate" : "2016-08-12T05:57:19Z",
  "deactivateOnTrigger" : false,
  "id" : "0AuR00000004CZTKA2",
  "lastModifiedDate" : "2016-08-12T06:12:24Z",
  "name" : "New Notification",
  "recordId" : "00OR0000000PD55MAG",
  "schedule" : {
    "details" : {
      "time" : 9
    },
    "frequency" : "daily"
  },
  "source" : "lightningReportSubscribe",
  "thresholds" : [ {
    "actions" : [ {
      "configuration" : {
        "recipients" : [ ]
      },
      "type" : "sendEmail"
    } ],
    "conditions" : null,
    "type" : "always"
  } ]
}
```

## Related Topics

- Analytics Notification (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_notifications_reference_notification.htm)
