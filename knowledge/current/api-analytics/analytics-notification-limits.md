---
title: "Analytics Notification Limits"
domain: api-analytics
topic: analytics-notification-limits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.592Z
estimatedTokens: 284
keywords: [Analytics, Notification, Limits, Check, how, notifications]
---

# Analytics Notification Limits

> Check to see how many more analytics notifications you can create.

# Analytics Notification Limits

Check to see how many more analytics notifications you can create.

## Syntax

URI

/services/data/vXX.X/analytics/notifications/limits?source=source

Formats

JSON

HTTP methods

| Method | Description |
| --- | --- |
| GET | Check how many analytic notifications you have, and the maximum number you can have. |

Parameters

| Parameter | Description |
| --- | --- |
| source | Required for GET calls. Specifies what type of analytics notification to return. Valid values are:lightningDashboardSubscribe — dashboard subscriptionslightningReportSubscribe — report subscriptionswaveNotification — Analytics notifications |
| recordId | Optional. Return notifications for a single record. Valid values are:reportId— Unique report IDlensId— Unique Analytics lens ID |

## GET Response Body

| Property | Type | Description |
| --- | --- | --- |
| max | Integer | How many analytics notifications of the type specified by source the user is allowed to create. |
| remaining | Integer | How many more analytics notifications of the type specified by source the user can create before hitting the limit. |
