---
title: "Generate Policy Limits Response"
domain: insurance-developer-guide
topic: generate-policy-limits-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.431Z
estimatedTokens: 124
keywords: [Generate, Policy, Limits, Output, representation, created, insurance, limit, records]
---

# Generate Policy Limits Response

> Output representation for the created insurance policy limit records.

# Generate Policy Limits Response

Output representation for the created insurance policy limit records.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Detail[] | List of errors that are encountered during the processing of the API request. | Small, 65.0 | 65.0 |
| policyLimitIds | String[] | List of IDs for the insurance policy limit records that are created. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "policyLimitIds": [
    "0lYx00000004CvQEAU",
    "0lYx00000004CvREAU"
  ],
  "errors": []
}
```

## Related Topics

- Error
         Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details.htm)
