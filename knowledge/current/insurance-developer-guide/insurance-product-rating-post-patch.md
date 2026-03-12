---
title: "Insurance Product Rating (POST, PATCH)"
domain: insurance-developer-guide
topic: insurance-product-rating-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.314Z
estimatedTokens: 648
keywords: [Insurance, Product, Rating, POST, PATCH, Rate, products, ratings, quoting, processes]
---

# Insurance Product Rating (POST, PATCH)

> Rate products or update product ratings in insurance quoting processes.

# Insurance Product Rating (POST, PATCH)

Rate products or update product ratings in insurance quoting processes.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

POST, PATCH

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Map<String, Object> | Map of additional fields that must be updated in the quote context. | Required if the generated context ID is used to issue a policy | 63.0 |
| effectiveDate | String | Date used to find the active pricing procedure for pricing. The default value is the current date. | Optional | 63.0 |
| ratingInputs | Rating Input Node[] | JSON that contains the attribute values of each context node. | Required | 63.0 |
| ratingOptions | Rating Options Input[] | Options for rating. | Optional | 63.0 |
| rootProductCodes | String [] | Root product codes that are used with the ratingInputs to create rating result. The created rating result is used as request in the insurance product rating API. | Optional | 66.0 |
| transactionType | String | Name of the transaction processing type. | Required | 63.0 |

Response body for POST

[Product Rating Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_product_rating_output.htm "Output representation for the Product Rating Connect API.")

Request body for PATCH

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

Response body for PATCH

[Product Rating Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_product_rating_output.htm "Output representation for the Product Rating Connect API.")

## Code Examples

```
/connect/insurance/product-rating
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/product-rating
```

```
{
  "transactionType": "AutoTransactionType",
  "additionalFields": {
    "QuoteAccount": "001ZM000002ZNnBYAW"
  },
  "ratingOptions": {
    "executeConfigurationRules": false
  },
  "ratingInputs": [
    {
      "productCode": "auto",
      "instanceKeys": [
        "Auto1"
      ],
      "attributes": {
        "Make": "BMW",
        "AutoValue": "20000",
        "Year": "2024",
        "Model": "SUV"
      }
    },
    {
      "productCode": "comprehensive",
      "instanceKeys": [
        "Auto1",
        "Comprehensive"
      ],
      "attributes": {
        "Limit": "2000",
        "Deductible": "100"
      }
    }
  ],
  "rootProductCodes": [
    "auto-ECO1x",
    "auto-ECO2x"
  ]
}
```

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
- Product Rating Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_product_rating_output.htm)
