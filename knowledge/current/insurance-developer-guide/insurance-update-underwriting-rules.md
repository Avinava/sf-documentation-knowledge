---
title: "Insurance Update Underwriting Rules"
domain: insurance-developer-guide
topic: insurance-update-underwriting-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.706Z
estimatedTokens: 187
keywords: [Insurance, Underwriting, Rules, Output, representation]
---

# Insurance Update Underwriting Rules

> Output representation details of the insurance update underwriting rules
    request.

# Insurance Update Underwriting Rules

Output representation details of the insurance update underwriting rules request.

JSON example

This example shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Insurance Underwriting Rules Error[] | List of errors encountered during the processing of the API request. | Big, 63.0 | 63.0 |
| isActive | Boolean | Indicates whether the rule is active (true) or not (false). | Big, 63.0 | 63.0 |
| isSuccess | Boolean | Indicates whether the request is successful (true) or not (false). | Big, 63.0 | 63.0 |
| underwritingRuleId | String | ID of the underwriting rule. | Big, 63.0 | 63.0 |

## Code Examples

```
{
  "underwritingRuleId": "11pxx0000005RE4AAM",
  "isActive": false,
  "isSuccess": true
}
```

## Related Topics

- Insurance Underwriting Rules Error (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_underwriting_rules_error.htm)
