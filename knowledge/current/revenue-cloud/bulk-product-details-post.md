---
title: "Bulk Product Details (POST)"
domain: revenue-cloud
topic: bulk-product-details-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.450Z
estimatedTokens: 978
keywords: [Bulk, Product, POST, Retrieve, multiple, products, API, composite, Discovery]
---

# Bulk Product Details (POST)

> Retrieve details for multiple products. This API is a composite API
      for Product Discovery.

# Bulk Product Details (POST)

Retrieve details for multiple products. This API is a composite API for Product Discovery.

Resource

```

```

Resource example

```

```

Available version

61.0

HTTP methods

POST

Request body for POST

JSON example

```

```

This example shows a sample request with proration policy details requested through the additionalFields property.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​ContextData | Context Data Input[] | Additional nodes to add to the custom or default context definition. This data is appended to the context input and sent for hydration and qualification. The maximum limit of supported nodes is 10. | Optional | 61.0 |
| additional​Fields | Map<String, Additional Fields Input> | Additional standard or custom fields of the Product2 object to include in the response. The field values are returned in the response for each of the products.In API version 66.0 and later, you can request proration policy details in the response for each product selling model option through this property. | Optional | 61.0 |
| context​Definition | String | Name of the custom context definition that’s sent for the context creation. If unspecified, the default context definition is used. | Optional | 61.0 |
| context​Mapping | String | Context mapping details from the context definition. If specified, the API validates if the context mapping belongs to the specified context definition and considers the mapping for hydration.If unspecified, the default context mapping of the context definition is used. | Optional | 61.0 |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 61.0 |
| currency​Code | String | Currency code to consider for pricing and filtering. | Optional | 61.0 |
| enable​Pricing | Boolean | Indicates whether to enable pricing for the products (true) or not (false). The default value is true.The Pricing Procedure toggle from the Product Discovery Settings page from Setup overrides this property. For example, if the Pricing Procedure toggle is disabled, then setting the enablePricing property to true has no effect and the prices property in the API response is returned empty. | Optional | 61.0 |
| enable​Qualification | Boolean | Indicates whether to enable qualification rules for the products (true) or not (false). The default value is true.The Qualification Procedure toggle from the Product Discovery Settings page from Setup overrides this property. For example, if the Qualification Procedure toggle is disabled, then setting the enableQualification property to true has no effect and the qualificationContext property in the API response isn’t returned. | Optional | 61.0 |
| price​BookId | String | ID of the price book to fetch the prices from. | Optional | 61.0 |
| pricing​Procedure | String | Name of the custom pricing procedure to send for processing. If unspecified, the default pricing procedure is executed. | Optional | 61.0 |
| product​Data | Product Data Input[] | List of maps that contain product IDs and product selling model IDs. | Required | 61.0 |
| qualification​Procedure | String | Name of the custom qualification procedure to send for processing. If unspecified, the default qualification procedure is executed. | Optional | 61.0 |
| user​Context | User Context Input[] | User context details. For example, account ID or contact ID. | Optional | 61.0 |

Response body for POST

[Bulk Product Details](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_cpq_base_bulk_details_output.htm "Output representation of the response that contains the details of multiple products.")

## Code Examples

```
/connect/cpq/products/bulk
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/cpq/products/bulk
```

```
{
  "productData": [
    {
      "productId": "01txx0000006ivJAAQ",
      "productSellingModelId": "0jPxx000000009hEAA"
    },
    {
      "productId": "01txx0000006ivLAAQ",
      "productSellingModelId": "0jPxx000000009iEAABB"
    }
  ],
  "correlationId": "de9a674c-1807-438c-ac78-2c96f4655325",
  "priceBookId" : "01sxx0000005qxxAAA",
  "userContext": {
      "accountId": "001xx0000000001AAA",
      "contactId": "003xx00000000D7AAI"
  }
}
```

```
{
  "additionalFields": {
    "ProductSellingModelOption": {
      "additionalFields": {
        "ProrationPolicy": {
          "fields": [
            "ArePartialPeriodsAllowed",
            "ProrationPolicyType"
          ]
        }
      }
    }
  },
  "productData": [
    {
      "productId": "01txx0000006ivJAAQ",
      "productSellingModelId": "0jPxx000000009hEAA"
    },
    {
      "productId": "01txx0000006ivLAAQ",
      "productSellingModelId": "0jPxx000000009iEAABB"
    }
  ],
  "correlationId": "de9a674c-1807-438c-ac78-2c96f4655325",
  "priceBookId": "01sxx0000005qxxAAA",
  "userContext": {
    "accountId": "001xx0000000001AAA",
    "contactId": "003xx00000000D7AAI"
  }
}
```

```
/connect/pcm/products/bulk
```

## Related Topics

- Context Data Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_context_data_input.htm)
- Additional Fields Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_additional_fields_input.htm)
- Product Data Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_product_data_input.htm)
- User Context Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_user_context_input.htm)
- Bulk Product Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_cpq_base_bulk_details_output.htm)
- Additional Fields Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_product_catalog_additional_fields_input.htm)
- Products Output (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_products_output.htm)
