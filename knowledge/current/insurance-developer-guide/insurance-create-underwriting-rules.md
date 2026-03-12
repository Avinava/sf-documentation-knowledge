---
title: "Insurance Create Underwriting Rules"
domain: insurance-developer-guide
topic: insurance-create-underwriting-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.567Z
estimatedTokens: 203
keywords: [Insurance, Underwriting, Rules, Output, representation]
---

# Insurance Create Underwriting Rules

> Output representation details of insurance create underwriting rules request.

# Insurance Create Underwriting Rules

Output representation details of insurance create underwriting rules request.

JSON example

This example shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the underwriting rule. | Big, 63.0 | 63.0 |
| errors | Insurance Underwriting Rules Error[] | List of errors encountered during the processing of the API request. | Big, 63.0 | 63.0 |
| isSuccess | Boolean | Indicates whether the request is successful (true) or not (false). | Big, 63.0 | 63.0 |
| underwritingRuleGroupId | String | ID of the underwriting rule group. | Big, 63.0 | 63.0 |
| underwritingRuleId | String | ID of the underwriting rule. | Big, 63.0 | 63.0 |

## Code Examples

```
{
  "underwritingRuleGroupId": "u8ixx0000007MnhEAI",
  "underwritingRuleId": "11Oxx0000007MnhEAE",
  "apiName": "ExampleApiName",
  "isSuccess": true
}
```

## Related Topics

- Insurance Underwriting Rules Error (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_underwriting_rules_error.htm)
