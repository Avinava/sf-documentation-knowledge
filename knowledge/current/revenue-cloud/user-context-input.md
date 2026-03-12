---
title: "User Context Input"
domain: revenue-cloud
topic: user-context-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.932Z
estimatedTokens: 134
keywords: [User, Context, Input, representation, request, get, context, details, user, which, used, qualification, rules., context.]
---

# User Context Input

> Input representation of the request to get the context details of a user, which are
    used for qualification rules.

# User Context Input

Input representation of the request to get the context details of a user, which are used for qualification rules.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account in a user context. | Optional | 60.0 |
| contactId | String | ID of the contact in a user context. | Optional | 60.0 |
| contextId | String | ID of the context that represents the created session. | Optional | 60.0 |

## Code Examples

```
"qualificationContext": {
        "accountId": "001DU000001nHUGYA2",
        "contactId": "003xx00000000D7AAI"
    }
```

```
"userContext": {
        "accountId": "001xx0000000001AAA",
        "contactId": "003xx00000000D7AAI",
        "contextId": "e055bb18-d4e8-41c3-881e-0132b9561708"
    }
```
