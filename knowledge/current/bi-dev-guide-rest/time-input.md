---
title: "Time Input"
domain: bi-dev-guide-rest
topic: time-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.898Z
estimatedTokens: 137
keywords: [Time, Input, something, happen, usually, relation, Analytics, schedule]
---

# Time Input

> The time at which something should happen, usually in relation to an Analytics
  schedule.

# Time Input

The time at which something should happen, usually in relation to an Analytics schedule.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| hour | Integer | First hour in the day on which the schedule is run. | Required | 39.0 |
| minute | Integer | Minute offset from hour on which the schedule is first run. | Required | 39.0 |
| timeZone | String | The time zone the schedule is stored in, which by default, is the user's time zone. | Required | 39.0 |
