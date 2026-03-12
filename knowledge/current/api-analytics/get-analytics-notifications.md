---
title: "Get Analytics Notifications"
domain: api-analytics
topic: get-analytics-notifications
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.533Z
estimatedTokens: 291
keywords: [Analytics, Notifications]
---

# Get Analytics Notifications

> Return a list of analytics notifications using a GET request.

# Get Analytics Notifications

Return a list of analytics notifications using a GET request.

Use a GET request on the [Analytics Notification List](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_notifications_reference_list.htm#analytics_api_notifications_reference_list "Return a list of analytics notifications (GET) or create an analytics notification (POST).") resource to return a list of analytics notifications.

Example Usage

/services/data/v38.0/analytics/notifications?source=lightningReportSubscribe

| Parameter | Description |
| --- | --- |
| source | Required for GET calls. Specifies what type of analytics notification to return. Valid values are:lightningDashboardSubscribe — dashboard subscriptionslightningReportSubscribe — report subscriptionswaveNotification — Analytics notifications |
| ownerId | Optional for GET calls. Allows users with Manage Analytics Notifications permission to get notifications for another user with the specified ownerId. |
| recordId | Optional. Return notifications for a single record. Valid values are:reportId— Unique report IDlensId— Unique Analytics lens ID |

Example Response Body

```

```

## Code Examples

```
[ {
  "active" : true,
  "createdDate" : "2016-08-08T04:14:12Z",
  "deactivateOnTrigger" : false,
  "id" : "0AuR00000004CYpKAM",
  "lastModifiedDate" : "2016-08-08T04:14:12Z",
  "name" : "Notification1",
  "recordId" : "00OR0000000P7EgMAK",
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
}, {
  "active" : true,
  "createdDate" : "2016-08-10T22:22:17Z",
  "deactivateOnTrigger" : false,
  "id" : "0AuR000000000KSKAY",
  "lastModifiedDate" : "2016-08-11T23:16:01Z",
  "name" : "Notification2",
  "recordId" : "00OR0000000PCHYMA4",
  "schedule" : {
    "details" : {
      "daysOfMonth" : [ 1, 2, 4 ],
      "time" : 22
    },
    "frequency" : "monthly",
    "frequencyType" : "specific"
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
}, {
  "active" : true,
  "createdDate" : "2016-08-12T04:01:50Z",
  "deactivateOnTrigger" : false,
  "id" : "0AuR000000000KcKAI",
  "lastModifiedDate" : "2016-08-12T04:16:34Z",
  "name" : "Notification3",
  "recordId" : "00OR0000000PBXEMA4",
  "schedule" : {
    "details" : {
      "dayInWeek" : "mon",
      "time" : 22,
      "weekInMonth" : "third"
    },
    "frequency" : "monthly",
    "frequencyType" : "relative"
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
} ]
```

## Related Topics

- Analytics Notification List (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_notifications_reference_list.htm)
