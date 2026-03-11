---
title: "Search Product with Guided Selection Action"
domain: revenue-cloud
topic: search-product-with-guided-selection-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:49.995Z
keywords: [Search, Product, Guided, Selection, Action, Special, Access, Rules, Supported, REST, HTTP, Methods, Inputs, Outputs, Example]
---

# Search Product with Guided Selection Action

# Search Product with Guided Selection Action

Use guided product selection to search for products.

This action is available in API version 64.0 and later.

## Special Access Rules

The Search Product with Guided Selection action is available in Enterprise, Unlimited, and Developer Editions where Product Discovery is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/searchPrdctWithGuidedSelection

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| additionalContextData | TypeApex-definedDescriptionCollection of Apex runtime_industries_cpq.AdditionalContextData records that contain the nodes used in addition to context definition nodes for data hydration. This parameter can contain up to 10 nodes. |
| additionalFields | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.AdditionalFields record that contains the collection of additional fields to be included in the response. This parameter supports only the fields from the Product2 and ProductAttributeDefinition objects. The fields defined for the ProductAttributeDefinition object must also be available on the ProductClassificationAttr object. |
| catalogId | TypestringDescriptionID of the catalog to find and retrieve products. |
| categoryId | TypestringDescriptionID of the category or subcategory to find and retrieve products. |
| contextDefinition | TypestringDescriptionAPI name of the context definition that's used for context creation. If you don’t specify a value, the context selected on the Product Discovery Settings page is used. |
| contextMapping | TypestringDescriptionAPI name of the context mapping that's used for data hydration. The value of this parameter is used only if it belongs to the specified context definition. |
| correlationId | TypestringDescriptionUnique ID that’s used to reference a series of related actions. |
| currencyCode | TypestringDescriptionCurrency code that’s used to calculate and show prices. Only the products with the currency code matching the entered currency code are fetched. |
| enablePricing | TypebooleanDescriptionIndicates whether pricing procedure must run (true) or not (false). The default value is true. To use this parameter, the Pricing Procedure setting must be enabled. |
| enableQualification | TypebooleanDescriptionIndicates whether qualification procedure must run (true) or not (false). The default value is true. To use this parameter, the Qualification Procedure setting must be enabled. |
| filterInputRepresentation | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.FilterInputRepresentation record that contains the filter criteria. This parameter supports only the name property and the eq, in, or contains operators. If it contains multiple criteria, all the criteria are applied. |
| guidedSelectionResponseId | TypestringDescriptionResponse identifier that stores user responses specified in the guided product selection window. |
| includeCatalogDetails | TypebooleanDescriptionIndicates whether catalog details must be included in the response (true) or not (false). |
| orderBy | TypestringDescriptionComma-delimited string of key-value pairs that specify how results are sorted. Each string must contain a field name and its sort order. For example, ["name:asc",”custom_field:asc”]. |
| priceBookId | TypestringDescriptionID of the pricebook that the pricing information is retrieved from. |
| pricingProcedure | TypestringDescriptionAPI name of the pricing procedure to calculate product prices. If you don’t specify a value, the pricing procedure selected on the Product Discovery Settings page is used. |
| productClassificationId | TypestringDescriptionID of the product classification that's used to filter products. |
| productCursor | TypestringDescriptionUnique identifier that represents the position of the product from which the next set of results are retrieved. |
| qualificationProcedure | TypestringDescriptionAPI name of the qualification procedure to evaluate product eligibility. If you don’t specify a value, the qualification procedure selected on the Product Discovery Settings page is used. |
| recordLimit | TypeintegerDescriptionMaximum number of results to be returned in the response. Specify a value from 1 through 100. Default value is 10. |
| relatedObjectFilters | TypeApex-definedDescriptionCollection of Apex runtime_industries_cpq.RelatedObjectFilterInputRepresentation records, each containing a related object and the filter criteria that’s applied on the object. |
| searchTerms | TypeApex-definedDescriptionCollection of terms that are used to search products. See GuidedSelectionSearchTerm. |
| userContext | TypeApex-definedDescriptionAn Apex ConnectApi.UserContextInputRepresentation record containing user information to evaluate product eligibility and calculate pricing. |

## Outputs

| Output | Details |
| --- | --- |
| apiStatusOutputRepresentation | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.ApiStatusRepresentation record that contains the status of the request, including the status code and message. |
| contextId | TypestringDescriptionID of the context that’s created by using the specified context definition. |
| correlationId | TypestringDescriptionUnique identifier attached to requests and messages, allowing reference to a specific transaction or event chain. |
| productCursor | TypestringDescriptionUnique identifier that represents the position of the product from which the next set of results are retrieved. |
| productListOutputRepresentations | TypeApex-definedDescriptionCollection of Apex ProductListOutputRepresentation records that contain details about the product shown by the Guided Product Selection. |
| recordOffset | TypeintegerDescriptionNumber of catalog records to skip in the request. The default is 0. |
| searchTerms | TypeApex-definedDescriptionCollection of terms that are used to search products. See GuidedSelectionSearchTerm. |
| userContext | TypeApex-definedDescriptionAn Apex ConnectApi.UserContextRepresentation record containing user information. |

## Example

POST

Here's a sample input to call this invocable action.

```

```

Here's a sample input to call this invocable action from Apex code.

```

```

Here's a sample response when you call this action.

```

```