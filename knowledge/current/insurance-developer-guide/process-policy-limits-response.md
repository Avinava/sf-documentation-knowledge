---
title: "Process Policy Limits Response"
domain: insurance-developer-guide
topic: process-policy-limits-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.733Z
estimatedTokens: 214
keywords: [Process, Policy, Limits, Output, representation, processing, claim, loss, item]
---

# Process Policy Limits Response

> Output representation for processing the policy limits for a claim loss item.

# Process Policy Limits Response

Output representation for processing the policy limits for a claim loss item.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Detail[] | Errors that are shown when the API operation fails. | Big, 65.0 | 65.0 |
| exceededAmount | Double | Amount that exceeds the remaining available policy limit in the specified limit currency. | Big, 66.0 | 66.0 |
| exceededCount | Integer | Count of coverage units beyond the policy’s allowed unit limit. | Big, 66.0 | 66.0 |
| insPolicy​LimitTrackings | Policy Limit Tracking Details[] | List of insurance policy limit tracking details. | Big, 65.0 | 65.0 |
| isLimit​Exceeded | Boolean | Indicates whether a limit is exceeded (true) or not (false). | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "isLimitExceeded": false,
  "insPolicyLimitTrackings": [
    {
      "policyLimitId": "0lYx00000004CvQEAU",
      "category": "Per-Incident Limit",
      "remainingAmount": 3750.00
    }
  ],
  "errors": []
}
```

## Related Topics

- Error
                  Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details.htm)
- Policy Limit Tracking Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_ins_policy_limit_tracking_details.htm)
