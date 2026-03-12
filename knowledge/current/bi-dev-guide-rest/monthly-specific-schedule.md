---
title: "Monthly Specific Schedule"
domain: bi-dev-guide-rest
topic: monthly-specific-schedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.437Z
estimatedTokens: 153
keywords: [Monthly, Specific, Schedule, Specify, runs, day, month, Analytics, asset]
---

# Monthly Specific Schedule

> Specify a schedule that runs monthly on a specific day within the month for an Analytics asset.

# Monthly Specific Schedule

Specify a schedule that runs monthly on a specific day within the month for an Analytics asset.

Properties

Inherits notificationLevel, and time from [Schedule](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_schedule.htm "A schedule on which to execute some type of Analytics asset job.")

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Month | Integer[] | Days of the month on which the schedule runs (1-31). Months lacking specific days will skip the job. | Small, 39.0 | 39.0 |

## Related Topics

- Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_schedule.htm)
