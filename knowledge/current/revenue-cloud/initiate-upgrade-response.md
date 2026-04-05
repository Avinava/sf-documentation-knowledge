---
title: "Initiate Upgrade Response"
domain: revenue-cloud
topic: initiate-upgrade-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-05T00:23:20.792Z
estimatedTokens: 117
keywords: [Initiate, Upgrade, Output, representation, action, includes, sales, transaction, creates]
---

# Initiate Upgrade Response

> Output representation of the request to initiate an upgrade action. The response includes
    the ID of the sales transaction that the upgrade action creates.

# Initiate Upgrade Response

Output representation of the request to initiate an upgrade action. The response includes the ID of the sales transaction that the upgrade action creates.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| salesTransactionId | String | ID of the sales transaction that’s created by the swap, upgrade, or downgrade action. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "salesTransactionId": "0Q09Q000005IkEPSA0"
}
```
