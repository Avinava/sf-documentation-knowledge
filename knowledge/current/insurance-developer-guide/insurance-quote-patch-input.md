---
title: "Insurance Quote Patch Input"
domain: insurance-developer-guide
topic: insurance-quote-patch-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.881Z
estimatedTokens: 216
keywords: [Insurance, Quote, Patch, Input, representation, operation]
---

# Insurance Quote Patch Input

> Input representation for insurance quote patch operation.

# Insurance Quote Patch Input

Input representation for insurance quote patch operation.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addedNodes | Insurance Quote Input Node[] | List of added nodes for insurance quote. | Optional | 63.0 |
| additionalFields | Map<String, Object> | Insurance quote additional fields. | Optional | 63.0 |
| configOptions | Insurance Quote Config Options[] | Configurator options for insurance quote. | Optional | 63.0 |
| deletedNodes | Insurance Quote Input Node[] | List of deleted nodes from insurance quote. | Optional | 63.0 |
| pricingProcedure | String | Pricing procedure for insurance quote. | Optional | 63.0 |
| updatedNodes | Insurance Quote Input Node[] | List of updated nodes on insurance quote. | Optional | 63.0 |

## Code Examples

```
{
  "configOptions": {
    "executePricing": false,
    "validateProductCatalog": false,
    "executeConfigurationRules": false,
    "executeQualificationRules": false
  },
  "additionalFields": {
    "Status": "Draft",
    "ValidFromDate": "2025-10-29T00:00:00.000Z"
  },
  "addedNodes": [
    {
      "productCode": "autoCollision",
      "instanceKeys": [
        "autoBundle",
        "autoCollision"
      ],
      "additionalFields": {
        "StartDate": "2025-09-29T00:00:00.000Z",
        "EndDate": "2025-10-29T00:00:00.000Z",
        "Discount": 40
      }
    }
  ],
  "updatedNodes": [
    {
      "instanceKeys": [
        "autoBundle"
      ],
      "productCode": "autoBundle",
      "attributes": {
        "avMake": "AudiQ14"
      },
      "additionalFields": {
        "StartDate": "2025-09-29T00:00:00.000Z",
        "EndDate": "2025-10-29T00:00:00.000Z",
        "Discount": 50
      }
    }
  ]
}
```

## Related Topics

- Insurance Quote Input Node (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_quote_input_node.htm)
- Insurance Quote Config Options (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_ins_quote_config_options.htm)
