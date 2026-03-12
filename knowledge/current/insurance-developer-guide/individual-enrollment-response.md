---
title: "Individual Enrollment Response"
domain: insurance-developer-guide
topic: individual-enrollment-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.604Z
estimatedTokens: 153
keywords: [Individual, Enrollment, Output, representation, API]
---

# Individual Enrollment Response

> Output representation for the Individual Enrollment API.

# Individual Enrollment Response

Output representation for the Individual Enrollment API.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Insurance Error[] | List of errors that are encountered during the enrollment process. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the enrollment process is successful (true) or not (false). | Small, 65.0 | 65.0 |
| policies | Family Policy Details[] | List of policies that are created as part of the enrollment process. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": [],
  "isSuccess": true,
  "policies": [
    {
      "plan": "Gold Plan",
      "policy": "0YTp00000004C9wAAE"
    }
  ]
}
```

## Related Topics

- Insurance Error (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_error_output.htm)
- Family Policy Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_family_policy_info_output.htm)
