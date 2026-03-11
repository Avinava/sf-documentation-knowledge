---
title: "Get Products Action"
domain: revenue-cloud
topic: get-products-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:49.978Z
keywords: [Get, Products, Action, Special, Access, Rules, Supported, REST, HTTP, Methods, Inputs, Outputs, Example, Usage, Apex-Defined, Data, Type, Flow]
---

# Get Products Action

# Get Products Action

Get products from the specified catalog, category, or subcategory, including product qualification and pricing details.

If a catalog, category, or subcategory isn’t specified, then this action retrieves all the products from all catalogs. This action is available in API version 62.0 and later.

## Special Access Rules

The Get Products action is available in Enterprise, Unlimited, and Developer Editions where Product Discovery is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getProducts

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| additionalContextData | TypeApex-definedDescriptionAn array of Apex runtime_industries_cpq.AdditionalContextData records that contain the additional nodes that are used along with the context definition nodes for data hydration.The maximum number of supported nodes is 10. |
| additionalFields | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.AdditionalFields record that contains an array of additional standard or custom fields to include in the response.The supported objects are:Product2ProductAttributeDefinition—If the fields defined for the ProductAttributeDefinition object aren’t available for the ProductClassificationAttr object, then the API request fails. |
| catalogId | TypestringDescriptionCatalog ID that’s used to find and retrieve the products. |
| categoryId | TypestringDescriptionID of the category or subcategory to get the products for. |
| contextDefinition | TypestringDescriptionAPI name of the context definition that’s used for context creation.If you don’t specify a value, the context selected on the Product Discovery Settings page from Setup is used. |
| contextMapping | TypestringDescriptionAPI name of the context mapping that’s used for data hydration.The value of this parameter is used only if it belongs to the specified context definition. |
| correlationId | TypestringDescriptionUnique ID that’s used to reference a series of related actions. |
| currencyCode | TypestringDescriptionCurrency code that’s used to calculate and show prices. Only the products with the currency code matching the specified currency code are fetched. |
| cursor | TypestringDescriptionUnique identifier that represents the position of the product from which the next set of results are retrieved. |
| enablePricing | TypebooleanDescriptionIndicates whether the pricing procedure must run (true) or not (false).The default value is true. To use this parameter, you must enable the Pricing Procedure setting from Setup. |
| enableQualification | TypebooleanDescriptionIndicates whether the qualification procedure must run (true) or not (false).The default value is true. To use this parameter, you must enable the Qualification Procedure setting from Setup. |
| filter | TypeApex-definedDescriptionA collection of Apex runtime_industries_cpq.FilterInputRepresentation records where each record contains a related object and the filter criteria that’s applied on the object.The filter parameter supports only the name property.The supported operators are:eqincontainsIf this parameter contains multiple criteria, all the criteria are applied. |
| includeCatalogDetails | TypebooleanDescriptionIndicates whether catalog details must be included in the response (true) or not (false). |
| limit | TypeintegerDescriptionMaximum number of results to be returned in the response. Specify a value from 1 through 100.The default value is 10. |
| orderBy | TypestringDescriptionComma-separated string of key-value pairs that specify how the results are sorted. Each string must contain a field name and its sort order. For example, ["name:asc",”custom_field:asc”]. |
| priceBookId | TypestringDescriptionID of the pricebook that the pricing details are retrieved from. |
| pricingProcedure | TypestringDescriptionAPI name of the pricing procedure to calculate product prices. If you don’t specify a value, the pricing procedure selected on the Product Discovery Settings page from Setup is used. |
| productClassificationId | TypestringDescriptionID of the product classification that’s used to filter the products. |
| qualificationProcedure | TypestringDescriptionAPI name of the qualification procedure to evaluate product eligibility. If you don’t specify a value, the qualification procedure selected on the Product Discovery Settings page from Setup is used. |
| relatedObjectFilters | TypeApex-definedDescriptionA collection of Apex runtime_industries_cpq.RelatedObjectFilterInputRepresentation records, where each record contains a related object and the filter criteria that’s applied on the object. |
| userContext | TypeApex-definedDescriptionAn Apex ConnectApi.UserContextInputRepresentation record that contains the user details to evaluate product eligibility and calculate prices. |

## Outputs

| Output | Details |
| --- | --- |
| apiStatus | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.ApiStatusRepresentation record that contains a status code and message. |
| contextId | TypestringDescriptionID of the context that’s created by using the specified context definition. |
| correlationId | TypestringDescriptionID to reference a series of related actions. |
| cursor | TypestringDescriptionUnique identifier that represents the position of the product from which the next set of results are retrieved. |
| results | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.ProductListRepresentation record that contains the retrieved products. |
| userContext | TypeApex-definedDescriptionAn Apex ConnectApi.UserContextRepresentation record that includes the user details. |

## Example

POST

This sample request is for the Get Products action.

```

```

This is the sample response for the Get Products action.

```

```

## Usage of an Apex-Defined Data Type in a Flow

To use an Apex-defined input parameter in a Flow, follow these guidelines.

Create an Apex class

Create an Apex class defining the input and output parameters. In the flow, include the Apex-defined input parameters for which you want to add the details. In this example, we have created a class named ProductServiceAction that takes an object’s API name and record ID as input, and returns the additional context data.

```

```

Create a Flow with the necessary variables and components

Create a flow that enables users to add a search term to find products. Add the ProductService action that you’ve created above by using Apex. When a flow is invoked from a record, the flow sends the record's objectApiName and recordId to the Apex class, which then generates the flow output. The flow passes the objectApiName and recordId of the record that the flow is invoked from to the Apex class to generate the flow output. See [Example of How to Create a Flow for Product Discovery](https://help.salesforce.com/s/articleView?id=ind.product_catalog_example_create_custom_flow_for_browsing_and_adding_products.htm&type=5&language=en_US "HTML (New Window)").

Configure the action

Configure the action (for example, Get Products action) to add values for the Apex-defined input parameters. Use the output of the created Apex class as the input of the Apex-defined parameter in the Get Products action, which users can use to get products.