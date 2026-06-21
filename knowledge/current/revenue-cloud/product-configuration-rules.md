---
title: "Product Configuration Rules"
domain: revenue-cloud
topic: product-configuration-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-21T00:39:52.830Z
estimatedTokens: 111
keywords: [Product, Configuration]
---

> Output representation of the details of the product configuration rules.

# Product Configuration Rules

Output representation of the details of the product configuration rules.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| details | Product Configuration Rule Details[] | Details of the product configuration rule. | Small, 67.0 | 67.0 |
| type | String | Type of the product configuration rule. | Small, 67.0 | 67.0 |

## Code Examples

```
{
  "configurationRules": [
    {
      "details": [
        {
          "message": "recommend Mouse from monitor"
        }
      ],
      "type": "recommend"
    }
  ]
}
```

## Related Topics

- Product Configuration Rule Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_configuration_rule_details_output.htm)
