---
title: "Create an Analytics Notification"
domain: api-analytics
topic: create-an-analytics-notification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.539Z
estimatedTokens: 137
keywords: [Analytics, Notification, POST]
---

# Create an Analytics Notification

> Create an Analytics Notification using a POST request.

# Create an Analytics Notification

Create an Analytics Notification using a POST request.

Use a POST request on the [Analytics Notification List](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_notifications_reference_list.htm#analytics_api_notifications_reference_list "Return a list of analytics notifications (GET) or create an analytics notification (POST).") resource to create an analytics notification.

Example Usage

/services/data/v38.0/analytics/notifications

Example Request Body

```

```

Example Response Body

```

```

## Code Examples

```
{
  "active" : true,
  "createdDate" : "",
  "deactivateOnTrigger" : false,
  "id" : "",
  "lastModifiedDate" : "",
  "name" : "New Notification",
  "recordId" : "00OR0000000PD55MAG",
  "schedule" : {
    "details" : {
      "time" : 3
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
  "lastModifiedDate" : "2016-08-12T05:57:19Z",
  "name" : "New Notification",
  "recordId" : "00OR0000000PD55MAG",
  "schedule" : {
    "details" : {
      "time" : 3
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

- Analytics Notification List (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_notifications_reference_list.htm)
