---
title: "Policy"
domain: insurance-developer-guide
topic: policy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.730Z
estimatedTokens: 131
keywords: [Policy, Output, representation]
---

# Policy

> Output representation of policy details.

# Policy

Output representation of policy details.

JSON example

This request shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response | List of errors that occurred during the processing of the API request. | Small, 63.0 | 63.0 |
| originalPolicyId | String | ID of the original policy. | Small, 63.0 | 63.0 |
| policyId | String | ID of the issued or endorsed policy. | Small, 63.0 | 63.0 |

## Code Examples

```
{
    "policyId": "0YTxx0000000253GAA"
}
```

## Related Topics

- Error Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_output.htm)
