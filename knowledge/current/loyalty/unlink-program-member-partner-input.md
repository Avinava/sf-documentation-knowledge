---
title: "Unlink Program Member Partner Input"
domain: loyalty
topic: unlink-program-member-partner-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.016Z
estimatedTokens: 171
keywords: [Unlink, Program, Member, Partner, Input]
---

# Unlink Program Member Partner Input

> Input details to unlink a program member and partner.

# Unlink Program Member Partner Input

Input details to unlink a program member and partner.

JSON example

Sample request to unlink the program member and partner.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| comments | String | Description for the unlink reason. | Optional | 66.0 |
| externalId | String | Partner membership number of the loyalty program member. | Optional | 66.0 |
| linkNumber | String | Unique identifier for the program member and partner linkage. | Optional | 66.0 |
| unlinkReasonType | String | Reason to unlink a loyalty program member and a partner. | Optional | 66.0 |

## Code Examples

```
{
  "linkNumber": "00000029",
  "externalId": "U10001",
  "unlinkReasonType": "USER_REQUEST",
  "comments": "Member requested to unlink the partner account."
}
```
