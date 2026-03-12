---
title: "Verify Policy Coverage"
domain: insurance-developer-guide
topic: verify-policy-coverage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.773Z
estimatedTokens: 138
keywords: [Verify, Policy, Coverage, Output, representation, coverage's, applicability, loss, date, under, insurance]
---

# Verify Policy Coverage

> Output representation of a policy coverage's applicability for a specified loss date under an insurance policy.

# Verify Policy Coverage

Output representation of a policy coverage's applicability for a specified loss date under an insurance policy.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Detail[] | List of errors, including detailed information about each one. | Big, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the policy coverage is valid for the date on which the incident occurred (true) or not (false). | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "isSuccess": true,
  "errors": []
}
```

## Related Topics

- Error
         Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details.htm)
