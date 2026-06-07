---
title: "Product Recommendations (POST)"
domain: revenue-cloud
topic: product-recommendations-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-06-07T00:37:39.053Z
estimatedTokens: 1192
keywords: [Product, Recommendations, POST, recommended, products, underlying, business]
---

> Get a list of recommended products based on your underlying business
      rules.

# Product Recommendations (POST)

Get a list of recommended products based on your underlying business rules.

This API returns a list of products based on the current quote or order and applicable constraint rules, along with the recommendation reasons and compatibility indicators. This enables sales reps to define accurate and complete, quoting process, minimizing both manual effort and errors.

Resource

```

```

Resource example

```

```

Available version

67.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalContextData | Context Data Input[] | Additional nodes that are added to the custom or default context definition. The maximum number of supported nodes is 10. | Optional | 67.0 |
| additionalFields | Map<String, AdditionalFieldsInputRepresentation> | Additional standard or custom fields of the Product2 object to include in the response.If the requested fields are invalid or access to fields isn’t available, then the API throws an error. | Optional | 67.0 |
| catalogId | String | ID of the catalog to fetch the recommended products from. | Optional | 67.0 |
| contextDefinition | String | API name of the custom context definition that’s sent for context creation. If you don’t specify this property, then the default context definition is used. | Optional | 67.0 |
| contextMapping | String | Default context mapping of the context definition. If you specify a context mapping, then the API checks whether the mapping belongs to the specified context definition to process the details for hydration. | Optional | 67.0 |
| currencyCode | String | Currency code that’s considered for pricing and filtering request. If multiple currencies are enabled in the org, then the currencyCode property is required.If you don’t specify a currency code, then the value is fetched from the account. | Optional | 67.0 |
| cursor | String | Unique ID to represent the position of each product in the data set. | Optional | 67.0 |
| enablePricing | Boolean | Indicates whether to enable pricing for products in orgs where Salesforce Pricing is enabled (true) or not (false). Set the value to false to skip the execution of Salesforce Pricing.In orgs where Salesforce Pricing is disabled, you can’t override this value to true.The default value is true. | Optional | 67.0 |
| enableQualification | Boolean | Indicates whether to enable qualification rules for products in orgs where Qualification Procedure is enabled (true) or not (false). Set the value to false to skip the execution of Business Rules Engine qualification rules.In orgs where Qualification Procedure is disabled, you can’t override this value to true.The default value is true. | Optional | 67.0 |
| filter | Filter Input[] | Filters records based on supported criteria.The supported property is name.The supported operators are:eqincontains—This value isn't applicable if the Use Indexed Data For Product Listing and Search toggle from the Product Discovery Settings page from Setup is enabled.If you specify multiple criteria, then the resultant criteria are combined by using the and operator. | Optional | 67.0 |
| limit | Integer | Number of recommended products to include in the response. The default value is 10. | Optional | 67.0 |
| priceBookId | String | ID of the price book to get prices from. If you don’t specify a price book ID, then prices from the standard price book are fetched. | Optional | 67.0 |
| pricingProcedure | String | API name of the custom pricing procedure that’s used for the pricing process. If you don’t specify this property, then the default pricing procedure is executed. | Optional | 67.0 |
| qualificationProcedure | String | API name of the custom qualification procedure that’s used for the product qualification process. If you don’t specify this property, then the default qualification procedure is executed. | Optional | 67.0 |
| transactionContextId | String | ID of the sales transaction context instance. | Optional | 67.0 |
| transactionId | String | ID of the quote or order. | Optional | 67.0 |
| usePromotions | Boolean | Indicates whether to fetch applicable promotions from Global Promotion Management (GPM) for the guided selection (true) or not (false). The default value is false. | Optional | 67.0 |
| userContext | User Context Input[] | User context details. For example, account ID or contact ID. | Optional | 67.0 |

Response body for POST

[Product Recommendations](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_recommendation_output.htm "Output representation of the fetched product recommendations.")

## Code Examples

```
/revenue/product-discovery/products/recommendations
```

```
https://yourInstance.salesforce.com/services/data/v67.0/revenue/product-discovery/products/recommendations
```

```
{
  "currencyCode": "USD",
  "enablePricing": true,
  "enableQualification": true,
  "filter": {
    "criteria": [
      {
        "property": "isActive",
        "operator": "eq",
        "value": true
      },
      {
        "property": "isQualified",
        "operator": "eq",
        "value": true
      }
    ]
  },
  "limit": 12,
  "priceBookId": "01sSG00000DQCjhYAH",
  "transactionId": "0Q0SG0000014Ui50AE"
}
```

## Related Topics

- Context Data Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_context_data_input.htm)
- AdditionalFieldsInputRepresentation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_additional_fields_input.htm)
- Filter Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_filter_input.htm)
- User Context Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_user_context_input.htm)
- Product
              Recommendations (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_recommendation_output.htm)
