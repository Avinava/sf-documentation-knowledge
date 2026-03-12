---
title: "Digest Job Input"
domain: chatterapi
topic: digest-job-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.508Z
estimatedTokens: 127
keywords: [Digest, Job, Input, Submit, daily, weekly, Chatter, email]
---

# Digest Job Input

> Submit a daily or weekly Chatter email digest job.

# Digest Job Input

Submit a daily or weekly Chatter email digest job.

Root XML tag

<digestJob>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| period | String | Time period that’s included in a Chatter email digest. Values are:DailyDigest—The email includes up to the 50 latest posts from the previous day.WeeklyDigest—The email includes up to the 50 latest posts from the previous week. | Required | 37.0 |

## Code Examples

```
{
   "period":"DailyDigest"
}
```
