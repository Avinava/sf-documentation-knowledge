---
title: "Sample Management Output"
domain: mfg-api-devguide
topic: sample-management-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.018Z
estimatedTokens: 202
keywords: [Sample, Management, Output, representation, Product, Requirement, Specification, operation]
---

# Sample Management Output

> Output representation of the response for a Product Requirement Specification
    operation.

# Sample Management Output

Output representation of the response for a Product Requirement Specification operation.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| data | Product Requirement Specification Output[] | The resulting Product Requirement Specification data | Small, 66.0 | 66.0 |
| errors | Product Requirement Specification Error Detail[] | A list of errors. Null if the operation was successful | Small, 66.0 | 66.0 |
| message | String | A message confirming the result of the operation | Small, 66.0 | 66.0 |
| requestUniqueId | String | The unique ID from the request, used for tracing | Small, 66.0 | 66.0 |
| status | String | The status of the operation | Small, 66.0 | 66.0 |

## Code Examples

```
{
    "requestUniqueId": "req-98765-xyz",
    "status": "SUCCESS",
    "message": "Product Requirement Specification retrieved successfully",
    "data": {
      "id": "0Dm5g000000KyZ3CAK",
      "name": "Pharmaceutical Grade Tablet Specification",
      "status": "Active",
      "priority": "High",
      "productRequirementSpecificationVersions": [
        {
          "id": "0Dn5g000000LmN4CAK",
          "name": "Version 2.0",
          "version": 2,
          "purpose": "Define specifications for manufacturing pharmaceutical tablets",
          "effectiveDate": "2024-02-01T00:00:00.000Z",
          "productRequirementSpecificationItems": [
            {
              "id": "0Do5g000000MpQ5CAK",
              "name": "Tablet Weight",
              "category": "Physical",
              "targetValue": "500",
              "tolerance": "5",
              "unitOfMeasureId": "UoM5g000000AbCdEFG"
            },
            {
              "id": "0Do5g000000MpQ6CAK",
              "name": "Dissolution Rate",
              "category": "Chemical",
              "targetValue": "85",
              "tolerance": "5",
              "unitOfMeasureId": "UoM5g000000AbCdEFH"
            }
          ]
        }
      ]
    },
    "errors": null
  }
```

## Related Topics

- Product Requirement Specification Output (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_responses_product_requirement_specification_output.htm)
- Product Requirement Specification Error
                Detail (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_responses_product_requirement_specification_error_detail.htm)
