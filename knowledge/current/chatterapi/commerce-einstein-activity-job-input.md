---
title: "Commerce Einstein Activity Job Input"
domain: chatterapi
topic: commerce-einstein-activity-job-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.322Z
estimatedTokens: 120
keywords: [Commerce, Einstein, Activity, Job, Input]
---

# Commerce Einstein Activity Job Input

> Commerce Einstein activity job.

# Commerce Einstein Activity Job Input

Commerce Einstein activity job.

Root XML tag

<job>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cookieId | String | ID of the cookie. Specify cookieId or userId, not both. | Required if userId isn’t specified | 52.0 |
| userId | String | ID of the user. Specify cookieId or userId, not both. | Required if cookieId isn’t specified | 52.0 |

## Code Examples

```
{
"userId" :"005B0000000Ge16"
}
```
