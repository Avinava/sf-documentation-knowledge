---
title: "Products List (POST)"
domain: revenue-cloud
topic: products-list-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.335Z
keywords: [Products, List, POST]
---

# Products List (POST)

# Products List (POST)

Get a list of products for a specified catalog, category, or subcategory. This API is a composite API for Product Discovery.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

If a parent category ID is specified in the request body, then the API returns all products associated to all child categories.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​ContextData | Context Data Input[] | Additional nodes that are added to the custom or default context definition. The maximum number of supported nodes is 10. | Optional | 60.0 |
| additional​Fields | Map<String, Additional Fields Input> | Additional standard or custom fields of the Product2 object to include in the response.If the requested fields are invalid or access to fields isn’t available, then the API throws an error. | Optional | 61.0 |
| catalog​Id | String | ID of the catalog. If the catalog ID is specified, then the API returns the list of offers from the catalog with the pricing details related to the catalog. | Optional | 60.0 |
| category​Id | String | ID of the category. If the category ID isn’t specified, then the API returns the list of offers from the catalog. | Optional | 60.0 |
| context​Definition | String | API name of the custom context definition that’s sent for context creation. If this property isn’t specified, then the default context definition is used. | Optional | 60.0 |
| context​Mapping | String | Default context mapping of the context definition. If a context mapping is specified, then the API checks whether the mapping belongs to the specified context definition to process the details for hydration. | Optional | 60.0 |
| correlation​Id | String | Unique identifier of the request. | Optional | 60.0 |
| currency​Code | String | Currency code that’s considered for pricing and filtering request. If multiple currencies are enabled for the org, then the currencyCode property is required. | Optional | 60.0 |
| cursor | String | Unique ID to represent the position of each product in the dataset. | Optional | 60.0 |
| enable​Pricing | Boolean | Indicates whether to enable pricing for the products (true) or not (false). The default value is true.The Pricing Procedure toggle from the Product Discovery Settings page from Setup overrides this property. For example, if the Pricing Procedure toggle is disabled, then setting the enablePricing property to true has no effect and the prices property in the API response is returned empty. | Optional | 60.0 |
| enable​Qualification | Boolean | Indicates whether to enable qualification rules for the products (true) or not (false). The default value is true.The Qualification Procedure toggle from the Product Discovery Settings page from Setup overrides this property. For example, if the Qualification Procedure toggle is disabled, then setting the enableQualification property to true has no effect and the qualificationContext property in the API response isn’t returned. | Optional | 60.0 |
| filter | Filter Input | Filters records based on supported criteria.The supported property is name.The supported operators are:eqincontains—This value isn't applicable if the Use Indexed Data For Product Listing and Search toggle from the Product Discovery Settings page from Setup is enabled.If multiple criteria are specified, then the resultant criteria are combined by using the and operator. | Optional | 60.0 |
| include​Catalog​Details | Boolean | Indicates whether to include catalog details in the response (true) or not (false). | Optional | 61.0 |
| limit | Integer | Number of items to include in the response. The default value is 10. | Optional | 60.0 |
| offset | Integer | Reserved for internal use. | Optional | 60.0 |
| order​By | String[] | Sort order of the results, which is either ascending (asc) or descending order (desc). The default sort order is ascending order. The default value is asc.If the Use Indexed Data For Product Listing and Search toggle from the Product Discovery Settings page from Setup is enabled, then you can sort products by using name only. | Optional | 60.0 |
| price​BookId | String | ID of the price book to get the prices from. If this property isn’t specified, then prices from the standard price book are fetched. | Required | 60.0 |
| pricing​Procedure | String | API name of the custom pricing procedure that’s used for the pricing process. If this property isn’t specified, then the default pricing procedure is executed. | Optional | 60.0 |
| product​Classification​Id | String | ID of the product classification. | Optional | 60.0 |
| qualification​Procedure | String | API name of the custom qualification procedure that’s used for the product qualification process. If this property isn’t specified, then the default qualification procedure is executed. | Optional | 60.0 |
| related​Object​Filters | Related Object Filter Input[] | Filter records based on supported criteria for related objects.The supported object is ProductSpecificationRecType.The supported property is IsCommerical.The supported operator is eq.The supported values are true and false. | Optional | 60.0 |
| user​Context | User Context Input | User context details. For example, account ID or contact ID. | Optional | 60.0 |

Response body for POST

[CPQ Base List](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_cpq_base_list_output.htm "Output representation of the list of catalogs, categories, or products based on the request.")