---
title: "Monthly Specific Schedule Input"
domain: bi-dev-guide-rest
topic: monthly-specific-schedule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.798Z
estimatedTokens: 153
keywords: [Monthly, Specific, Schedule, Input, Specify, Analytics, asset, days, fixed, numerical, date]
---

# Monthly Specific Schedule Input

> Specify a monthly schedule for an Analytics asset where the days are fixed by numerical
  date.

# Monthly Specific Schedule Input

Specify a monthly schedule for an Analytics asset where the days are fixed by numerical date.

Properties

Inherits notification, and time from [Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm "A schedule on which to execute some type of Analytics asset.")

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Month | Integer[] | Days of the month on which the schedule runs (1-31). Months lacking specific days will skip the job. | Required | 39.0 |

## Related Topics

- Schedule
       Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm)
