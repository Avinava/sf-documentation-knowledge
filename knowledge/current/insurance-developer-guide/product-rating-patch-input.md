---
title: "Product Rating Patch Input"
domain: insurance-developer-guide
topic: product-rating-patch-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.966Z
estimatedTokens: 246
keywords: [Product, Rating, Patch, Input, representation]
---

# Product Rating Patch Input

> Input representation of product rating update details.

# Product Rating Patch Input

Input representation of product rating update details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addedNodes | Rating Input Node[] | List of added nodes. | Optional | 63.0 |
| additionalFields | Map<String, Object> | Map of additional fields that must be updated in the quote context. | Optional | 63.0 |
| contextId | String | Context ID. | Required | 63.0 |
| deletedNodes | Rating Input Node[] | List of deleted nodes. | Optional | 63.0 |
| effectiveDate | String | Date used to find the active pricing procedure for pricing. The default value is the current date. | Optional | 63.0 |
| ratingDate | String | Date that's used to find the active pricing procedure. | Optional | 63.0 |
| ratingOptions | Rating Options Input[] | Options for rating. | Optional | 63.0 |
| updatedNodes | Rating Input Node[] | List of updated nodes. | Optional | 63.0 |

## Code Examples

```
{
  "contextId": "a49103b233638b918217c74eced69220e534e160c3d3d35bc8cf6608515aeab3",
  "ratingOptions": {
    "executePricing": true,
    "executeConfigurationRules": false
  },
  "updatedNodes": [
    {
      "instanceKeys": [
        "AutoSilver",
        "BMW",
        "Tim1"
      ],
      "productCode": "driver",
      "attributes": {
        "DriverAccidentPoints": 1,
        "AgeFirstLicensed": 50,
        "DriverMVRPoints": 1
      },
      "targetRecords": [
        "003DR000002ov8NYAQ",
        "001DR000003avQCYAY"
      ]
    }
  ],
  "addedNodes": [
    {
      "instanceKeys": [
        "AutoSilver",
        "Tesla"
      ],
      "productCode": "auto",
      "attributes": {
        "Year": "2022",
        "Model": "Y"
      }
    },
    {
      "instanceKeys": [
        "AutoSilver",
        "Tesla",
        "collision1"
      ],
      "productCode": "collision",
      "attributes": {
        "Limit": 500,
        "Deductible": 1000
      }
    },
    {
      "instanceKeys": [
        "AutoSilver",
        "Tesla",
        "Driver1"
      ],
      "productCode": "driver",
      "attributes": {
        "DriverAccidentPoints": 5,
        "AgeFirstLicensed": 30,
        "DriverMVRPoints": 1
      },
      "targetRecords": [
        "003DR000002oxCfYAI",
        "001DR000003azdpYAA"
      ]
    },
    {
      "instanceKeys": [
        "AutoSilver",
        "Audi",
        "Collision2"
      ],
      "productCode": "collision",
      "attributes": {
        "Limit": 500,
        "Deductible": 1000
      }
    }
  ]
}
```

## Related Topics

- Rating Input Node (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_rating_input_node.htm)
- Rating Options Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_rating_options_input.htm)
