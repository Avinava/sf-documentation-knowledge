---
title: "Suspend Resume Billing Object"
domain: revenue-cloud
topic: suspend-resume-billing-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.553Z
estimatedTokens: 199
keywords: [Suspend, Resume, Billing, Output, representation, details, accounts, billing, schedule, groups, which, suspended, resumed, operations, along, status, API, request.]
---

# Suspend Resume Billing Object

> Output representation of the details of accounts and billing schedule groups, which are
    suspended or resumed for billing operations, along with the status of the API
    request.

# Suspend Resume Billing Object

Output representation of the details of accounts and billing schedule groups, which are suspended or resumed for billing operations, along with the status of the API request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Code indicating the type of error. | Big, 63.0 | 63.0 |
| errorMessage | String | Message stating the reason for the error, if any. | Big, 63.0 | 63.0 |
| isSuccess | Boolean | Indicates whether the API request is successful (true) or not (false). | Big, 63.0 | 63.0 |
| referenceId | String | ID of the account or billing schedule group that the suspend or resume billing request is initiated for. | Big, 63.0 | 63.0 |

## Code Examples

```
{
    "result":{
        {
        "referenceId": "1",
        "isSuccess": true,
        "errorcode": null,
        "errorMessage":null
        }
    }
}
```
