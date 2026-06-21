---
title: "Configuration Rule Response"
domain: revenue-cloud
topic: configuration-rule-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-21T00:39:51.848Z
estimatedTokens: 511
keywords: [Configuration, Rule]
---

> Output representation of the details of the configuration rule response.

# Configuration Rule Response

Output representation of the details of the configuration rule response.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Config Rule Errors[] | List of error messages from the configuration rule evaluation, if any. | Small, 67.0 | 67.0 |
| message​Rules | Message Rules[] | List of message rules that were evaluated during configuration. | Small, 67.0 | 67.0 |
| product​Recommendation​Rules | Product Recommendation Rules[] | List of product recommendation rules that were evaluated during configuration. | Small, 67.0 | 67.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 67.0 | 67.0 |
| transaction​ContextId | String | ID of the transaction context for this configuration rule evaluation. | Small, 67.0 | 67.0 |
| visibility​Rules | Visibility Rules[] | List of visibility rules that were evaluated during configuration. | Small, 67.0 | 67.0 |

-   **[Configuration Rule Errors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_config_rule_errors_output.htm)**
    Output representation of the error details, if applicable, when you run config rules.
-   **[Message Rules](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_message_rules_output.htm)**
    Output representation of the details of the message rules.
-   **[Product Recommendation Rules](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_recommendation_rules_output.htm)**
    Output representation of the details of the product recommendation rules.
-   **[Visibility Rules](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_visibility_rules_output.htm)**
    Output representation of the details of the visibility rules.

## Code Examples

```
{
  "errors": [],
  "messageRules": [
    {
      "message": "You have a 128GB LRDIMM QLI",
      "messageType": "error",
      "primaryRecordId": "0Q0VW000000z8yN0AQ"
    },
    {
      "message": "You have a 16GB RDIMM QLI",
      "messageType": "warning",
      "primaryRecordId": "0Q0VW000000z8yN0AQ"
    },
    {
      "message": "You have a 32GB RDIMM QLI",
      "messageType": "info",
      "primaryRecordId": "0Q0VW000000z8yN0AQ"
    },
    {
      "message": "128GB LRDIMM disables 16GB RDIMM",
      "messageType": "info",
      "primaryRecordId": "0Q0VW000000z8yN0AQ"
    },
    {
      "message": "Additional API disables Additional API Gov",
      "messageType": "info",
      "primaryRecordId": "0Q0VW000000z8yN0AQ"
    },
    {
      "message": "Disable All other API Products",
      "messageType": "info",
      "primaryRecordId": "0Q0VW000000z8yN0AQ"
    },
    {
      "message": "32GB RDIMM disables 128GB LRDIMM",
      "messageType": "info",
      "primaryRecordId": "0Q0VW000000z8yN0AQ"
    },
    {
      "message": "API Access Requests AEH disables Additional API Prod",
      "messageType": "info",
      "primaryRecordId": "0Q0VW000000z8yN0AQ"
    }
  ],
  "productRecommendationRules": [
    {
      "message": "32GB RDIMM recommends 16GB RDIMM",
      "productIds": [
        "01tVW000003l7uaYAA"
      ],
      "recordType": "Type",
      "referenceId": "0Q0VW000000z8yN0AQ"
    },
    {
      "message": "32GB RDIMM recommends 64GB RDIMM",
      "productIds": [
        "01tVW000003l7v6YAA"
      ],
      "recordType": "Type",
      "referenceId": "0Q0VW000000z8yN0AQ"
    }
  ],
  "success": true,
  "transactionContextId": "0000000r25tq18g00291775730228818e689c3c5756e409fb3f886f68937ab13",
  "visibilityRules": [
    {
      "message": "128GB LRDIMM disables 16GB RDIMM",
      "productIds": [
        "01tVW000003l7uaYAA"
      ],
      "scope": "virtual",
      "target": "product",
      "type": "disable"
    },
    {
      "message": "Additional API disables Additional API Gov",
      "productIds": [
        "01tVW000003l7tzYAA"
      ],
      "scope": "virtual",
      "target": "product",
      "type": "disable"
    },
    {
      "message": "Disable All other API Products",
      "productIds": [
        "01tVW000003l7u0YAA",
        "01tVW000003l7u1YAA"
      ],
      "scope": "virtual",
      "target": "product",
      "type": "disable"
    },
    {
      "message": "32GB RDIMM disables 128GB LRDIMM",
      "productIds": [
        "01tVW000003l7v5YAA"
      ],
      "scope": "virtual",
      "target": "product",
      "type": "disable"
    },
    {
      "message": "API Access Requests AEH disables Additional API Prod",
      "productIds": [
        "01tVW000003l7u1YAA"
      ],
      "scope": "virtual",
      "target": "product",
      "type": "disable"
    }
  ]
}
```

## Related Topics

- Config Rule Errors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_config_rule_errors_output.htm)
- Message Rules (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_message_rules_output.htm)
- Product Recommendation Rules (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_recommendation_rules_output.htm)
- Visibility Rules (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_visibility_rules_output.htm)
- Configuration Rule Errors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_config_rule_errors_output.htm)
