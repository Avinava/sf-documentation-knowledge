---
title: "Account User Territory Info Input"
domain: life-sciences-dev-guide
topic: account-user-territory-info-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.050Z
estimatedTokens: 139
keywords: [Account, User, Territory, Info, Input, representation]
---

# Account User Territory Info Input

> Input representation of the Account User Territory Information.

# Account User Territory Info Input

Input representation of the Account User Territory Information.

JSON Example

```

```

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | The ID of the user. Using this ID, this API fetches users associated with territories linked to this account. | Required | 64.0 |
| fieldNames | <list>String | The additional user fields that you want to retrieve. The user ID and name is fetched by default. | Optional | 64.0 |

## Code Examples

```
{
"accountId":"00xxG00000n6bbxxAA",
"fieldNames":["City","IsActive","LanguageLocaleKey"]
}
```
