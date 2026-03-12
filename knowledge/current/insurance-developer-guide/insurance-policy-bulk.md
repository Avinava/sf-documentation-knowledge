---
title: "Insurance Policy Bulk"
domain: insurance-developer-guide
topic: insurance-policy-bulk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.653Z
estimatedTokens: 164
keywords: [Insurance, Policy, Bulk, Output, representation, renew, cancel, requests]
---

# Insurance Policy Bulk

> Output representation details of bulk renew policy and bulk cancel policy
    requests.

# Insurance Policy Bulk

Output representation details of bulk renew policy and bulk cancel policy requests.

JSON example

This example shows a sample success response.

```

```

This example shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response | List of errors encountered during the processing of the API request. | Small, 63.0 | 63.0 |
| message | String | Status message of the API execution. | Small, 63.0 | 63.0 |
| status | String | Status of the API execution. Valid values are:SuccessFail | Small, 63.0 | 63.0 |

## Code Examples

```
{
    "errors": [{ "code": "", "message": "" }],
    "status": "Success",
    "message": "policy renewed successfully."
}
```

```
{
    "errors": [{ "code": "", "message": "" }],
    "status": "Fail",
    "message": "error message."
}
```
