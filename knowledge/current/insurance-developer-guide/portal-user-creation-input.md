---
title: "Portal User Creation Input"
domain: insurance-developer-guide
topic: portal-user-creation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.958Z
estimatedTokens: 192
keywords: [Portal, User, Creation, Input, representation]
---

# Portal User Creation Input

> Input representation for the details to create a portal user.

# Portal User Creation Input

Input representation for the details to create a portal user.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| emailEncodingKey | String | Email encoding for the user, such as UTF-8 or ISO-8859-1. | Optional | 65.0 |
| languageLocaleKey | String | Language for the user, such as en_US for U.S. English. | Optional | 65.0 |
| localeSidKey | String | Locale for the user, which affects the format of dates, times, and numbers. | Optional | 65.0 |
| profileId | String | ID of the profile to assign to the new portal user. | Required | 65.0 |
| timeZoneSidKey | String | Time zone for the user, such as America or Los_Angeles. | Optional | 65.0 |

## Code Examples

```
{
    "profileId": "00e123AbcDefGhiJkl",
    "emailEncodingKey": "ISO-8859-1",
    "languageLocaleKey": "en_US",
    "localeSidKey": "en_US",
    "timeZoneSidKey": "Atlanta"
}
```
