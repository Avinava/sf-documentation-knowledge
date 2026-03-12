---
title: "Usage Product Validation (POST)"
domain: revenue-cloud
topic: usage-product-validation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:09.016Z
estimatedTokens: 262
keywords: [Usage, Product, Validation, POST, Validate, cross-object, relationships, business, rules, usage-based, products]
---

# Usage Product Validation (POST)

> Validate cross-object relationships and business rules for usage-based products.

# Usage Product Validation (POST)

Validate cross-object relationships and business rules for usage-based products.

This API returns validation results with errors and warnings.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| productIds | String[] | List of product IDs to be validated. The maximum limit is 10 valid product IDs. | Required | 66.0 |
| startDate | String | Start date of the date range in which all active records are validated. | Optional | 66.0 |
| endDate | String | End date of the date range in which all active records are validated. | Optional | 66.0 |

Response body for POST

[Usage Product Validation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_usage_product_validation_output.htm "Output representation of all the performed validations.")

## Code Examples

```
/revenue/usage-management/usage-products/actions/validate
```

```
https://yourInstance.salesforce.com/services/data/v66.0/revenue/usage-management/usage-products/actions/validate
```

```
{
  "productIds": [
    "01txx0000006i2gAAA",
    "01txx0000006j2gAAA"
  ],
  "startDate": "2024-01-01T00:00:00Z",
  "endDate": "2024-12-31T23:59:59Z"
}
```

## Related Topics

- Usage Product Validation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_usage_product_validation_output.htm)
