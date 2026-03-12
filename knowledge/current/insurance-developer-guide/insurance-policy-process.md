---
title: "Insurance Policy Process"
domain: insurance-developer-guide
topic: insurance-policy-process
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.655Z
estimatedTokens: 99
keywords: [Insurance, Policy, Process, Output, representation, renewed]
---

# Insurance Policy Process

> Output representation details of the renewed policy.

# Insurance Policy Process

Output representation details of the renewed policy.

JSON example

This example shows a sample success response.

```

```

This example shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| policyId | String | ID of the renewed policy. | Small, 63.0 | 63.0 |

## Code Examples

```
{
    "errors": [{ "code": "", "message": "" }],
    "status": "Success",
    "policyId": "testId",
    "message": "policy renewed successfully."
}
```

```
{
    "errors": [{ "code": "", "message": "" }],
    "status": "Fail",
    "policyId": "",
    "message": "error message."
}
```
