---
title: "Account Manual Alignment Output"
domain: life-sciences-dev-guide
topic: account-manual-alignment-output
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:42.754Z
estimatedTokens: 169
keywords: [Account, Manual, Alignment, Output, align, customer, manually]
---

# Account Manual Alignment Output

> Represents the output for the request to align customer account manually.

# Account Manual Alignment Output

Represents the output for the request to align customer account manually.

Properties

| Property Name | Type | Description | fILTER Group and Version | Available version |
| --- | --- | --- | --- | --- |
| succ​ess | Boolean | Indicates if the API request was successful (true) or not (false). | Small, 65.0 | 65.0 |
| mess​age | String | Message related to the API request, which can help in case of failure. | Small, 65.0 | 65.0 |
| code | String | HTTP status code for the API response. | Small, 65.0 | 65.0 |
| res​ponse | Map<String, Object> | Map that holds the account and territory data. | Small, 65.0 | 65.0 |

Example

```

```

## Code Examples

```
{
  "success": true,
  "message": "",
  "code": "200",
  "response": {
    "ProviderAcctTerritoryInfo": [
      {
        "attributes": {
          "type": "ProviderAcctTerritoryInfo",
          "url": "/services/data/v65.0/sobjects/ProviderAcctTerritoryInfo/1GxxM000001G5hxxAC"
        },
        "Id": "1GxxM000001G5hxxAC",
        "Name": "PATI-000000008",
        "AccountId": "00xxM00000FyWOxxAV",
        "Territory2Id": "OxxSM0000028E4xxAE"
      }
    ]
  }
}
```
