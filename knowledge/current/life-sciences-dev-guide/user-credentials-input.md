---
title: "User Credentials Input"
domain: life-sciences-dev-guide
topic: user-credentials-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.450Z
estimatedTokens: 121
keywords: [User, Credentials, Input, representation, perform, digital, verification]
---

# User Credentials Input

> Input representation of the user credentials to perform digital verification.

# User Credentials Input

Input representation of the user credentials to perform digital verification.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| loginId | String | Login ID or username used by the user to authenticate for the digital verification. | Required | 60.0 |
| password | String | Password used by the user to authenticate for the digital verification. | Required | 60.0 |

## Code Examples

```
{
  "userCredentials": {
    "loginId": "david.chavez@salesforce.com",
    "password": "123456"
  }
}
```
