---
title: "Get Products Action"
domain: revenue-cloud
topic: get-products-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-06-21T00:39:48.159Z
estimatedTokens: 1906
keywords: [Inputs, Outputs, Products, Action, catalog, category, subcategory, including, product, qualification, pricing, Apex-Defined, Flow]
---

> Get products from the specified catalog, category, or subcategory,
			including product qualification and pricing details.

# Get Products Action

Get products from the specified catalog, category, or subcategory, including product qualification and pricing details.

If a catalog, category, or subcategory isn’t specified, then this action retrieves all the products from all catalogs. This action is available in API version 62.0 and later.

You can invoke this action via Apex and Flows only.

## Special Access Rules

The Get Products action is available in Enterprise, Unlimited, and Developer Editions where Product Discovery is enabled.

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
| executeConfigurationRules | TypebooleanDescriptionIndicates whether configuration rules must run (true) or not (false). Available in API version 67.0 and later. |
| filter | TypeApex-definedDescriptionA collection of Apex runtime_industries_cpq.FilterInputRepresentation records where each record contains a related object and the filter criteria that’s applied on the object.The filter parameter supports only the name property.The supported operators are:eqincontainsIf this parameter contains multiple criteria, all the criteria are applied. |
| includeCatalogDetails | TypebooleanDescriptionIndicates whether catalog details must be included in the response (true) or not (false). |
| limit | TypeintegerDescriptionMaximum number of results to be returned in the response. Specify a value from 1 through 100.The default value is 10. |
| orderBy | TypestringDescriptionComma-separated string of key-value pairs that specify how the results are sorted. Each string must contain a field name and its sort order. For example, ["name:asc",”custom_field:asc”]. |
| priceBookId | TypestringDescriptionID of the pricebook that the pricing details are retrieved from. |
| pricingProcedure | TypestringDescriptionAPI name of the pricing procedure to calculate product prices. If you don’t specify a value, the pricing procedure selected on the Product Discovery Settings page from Setup is used. |
| productClassificationId | TypestringDescriptionID of the product classification that’s used to filter the products. |
| qualificationProcedure | TypestringDescriptionAPI name of the qualification procedure to evaluate product eligibility. If you don’t specify a value, the qualification procedure selected on the Product Discovery Settings page from Setup is used. |
| transactionContextId | TypestringDescriptionContext ID of the quote or order. Available in API version 67.0 and later. |
| transactionId | TypestringDescriptionID of the quote or order. Available in API version 67.0 and later. |
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

Here's a sample input to call this invocable action from Apex code.

```

```

Here’s a sample response for this action.

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

## Code Examples

```apex
Invocable.Action action = Invocable.Action.createStandardAction('getProducts');
action.setInvocationParameter('executeConfigurationRules', true);
action.setInvocationParameter('catalogId', '0ZSVW000000AhdB4AS');
action.setInvocationParameter('transactionId', '0Q0VW0000018J6X0AU');
List<String> orderBy = new List<String>();
orderBy.add('name:asc');
action.setInvocationParameter('orderBy', orderBy);
List<Invocable.Action.Result> results = action.invoke();

for (Invocable.Action.Result res : results) {
    if (res.isSuccess()) {
        Map<String, Object> outMap = res.getOutputParameters();
        String jsonOutput = JSON.serialize(outMap);	
        System.debug(jsonOutput);
    }
}
```

```
{
  "facets": [],
  "apiStatus": {
    "statusMessage": null,
    "statusCode": "FetchedDetailsSuccessfully",
    "messages": []
  },
  "results": [
    {
      "unitOfMeasure": null,
      "status": null,
      "qualificationContext": {
        "reason": null,
        "isQualified": true
      },
      "productType": null,
      "productSpecificationType": null,
      "productSellingModelOptions": [
        {
          "productSellingModelId": "0jPVW0000001fh32AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "TermDefined",
            "pricingTermUnit": "Annual",
            "pricingTerm": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA"
          },
          "productId": "01tVW000003l7txYAA",
          "id": "0iOVW00000049w22AA"
        },
        {
          "productSellingModelId": "0jPVW0000001fh52AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "Evergreen",
            "pricingTermUnit": "Months",
            "pricingTerm": 1,
            "name": "Evergreen Monthly",
            "id": "0jPVW0000001fh52AA"
          },
          "productId": "01tVW000003l7txYAA",
          "id": "0iOVW00000049w12AA"
        },
        {
          "productSellingModelId": "0jPVW0000001fh62AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "TermDefined",
            "pricingTermUnit": "Months",
            "pricingTerm": 1,
            "name": "Term Monthly",
            "id": "0jPVW0000001fh62AA"
          },
          "productId": "01tVW000003l7txYAA",
          "id": "0iOVW00000049w32AA"
        }
      ],
      "productRelatedComponent": null,
      "productQuantity": null,
      "productPricingInformation": null,
      "productInformation": null,
      "productComponentGroups": [],
      "productCode": "QB-API",
      "productClassification": {
        "id": "11BVW000004ljiZ2AQ"
      },
      "prices": [
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "TermDefined",
            "occurrence": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA",
            "frequency": "Annual"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzfGYAQ",
          "price": 15000,
          "isSelected": false,
          "isDerived": false,
          "isDefault": true,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        },
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "Evergreen",
            "occurrence": 1,
            "name": "Evergreen Monthly",
            "id": "0jPVW0000001fh52AA",
            "frequency": "Months"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzg8YAA",
          "price": 2000,
          "isSelected": false,
          "isDerived": false,
          "isDefault": false,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        },
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "TermDefined",
            "occurrence": 1,
            "name": "Term Monthly",
            "id": "0jPVW0000001fh62AA",
            "frequency": "Months"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzg9YAA",
          "price": 1500,
          "isSelected": false,
          "isDerived": false,
          "isDefault": false,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        }
      ],
      "nodeType": "simpleProduct",
      "name": "Additional API",
      "isSoldOnlyWithOtherProds": false,
      "isQuantityEditable": null,
      "isDefaultComponent": null,
      "isComponentRequired": null,
      "isAssetizable": true,
      "isActive": true,
      "id": "01tVW000003l7txYAA",
      "endOfLifeDate": null,
      "displayUrl": "/resource/add_api",
      "discontinuedDate": null,
      "description": null,
      "configureDuringSale": "Allowed",
      "configurationRules": [
        {
          "type": "disable",
          "details": [
            {
              "message": "This is disabled"
            }
          ]
        }
      ],
      "childProducts": [],
      "categories": [
        {
          "sortOrder": null,
          "qualificationContext": {
            "reason": null,
            "isQualified": true
          },
          "parentCategoryId": null,
          "name": "API",
          "isNavigational": null,
          "id": "0ZGVW000000IUEG4A4",
          "hasSubCategories": null,
          "description": null,
          "childCategories": null,
          "catalogId": "0ZSVW000000AhdB4AS"
        }
      ],
      "catalogs": [],
      "availabilityDate": null,
      "attributeCategories": [],
      "additionalFields": []
    },
    {
      "unitOfMeasure": null,
      "status": null,
      "qualificationContext": {
        "reason": null,
        "isQualified": true
      },
      "productType": null,
      "productSpecificationType": null,
      "productSellingModelOptions": [
        {
          "productSellingModelId": "0jPVW0000001fh32AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "TermDefined",
            "pricingTermUnit": "Annual",
            "pricingTerm": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA"
          },
          "productId": "01tVW000003l7tyYAA",
          "id": "0iOVW00000049w42AA"
        }
      ],
      "productRelatedComponent": null,
      "productQuantity": null,
      "productPricingInformation": null,
      "productInformation": null,
      "productComponentGroups": [],
      "productCode": "QB-API-FLEX",
      "productClassification": {
        "id": null
      },
      "prices": [
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "TermDefined",
            "occurrence": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA",
            "frequency": "Annual"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzfFYAQ",
          "price": 450,
          "isSelected": false,
          "isDerived": false,
          "isDefault": true,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        }
      ],
      "nodeType": "simpleProduct",
      "name": "Additional API Flex (100M)",
      "isSoldOnlyWithOtherProds": false,
      "isQuantityEditable": null,
      "isDefaultComponent": null,
      "isComponentRequired": null,
      "isAssetizable": true,
      "isActive": true,
      "id": "01tVW000003l7tyYAA",
      "endOfLifeDate": null,
      "displayUrl": "/resource/api_flex",
      "discontinuedDate": null,
      "description": "API instances remain under management until they are deleted. Instances of API Manager are aggregated using a Max Concurrent model. The usage for a month is the highest number of APIs Managed in a single given hour during a month.",
      "configureDuringSale": null,
      "configurationRules": [],
      "childProducts": [],
      "categories": [
        {
          "sortOrder": null,
          "qualificationContext": {
            "reason": null,
            "isQualified": true
          },
          "parentCategoryId": null,
          "name": "API",
          "isNavigational": null,
          "id": "0ZGVW000000IUEG4A4",
          "hasSubCategories": null,
          "description": null,
          "childCategories": null,
          "catalogId": "0ZSVW000000AhdB4AS"
        }
      ],
      "catalogs": [],
      "availabilityDate": null,
      "attributeCategories": [],
      "additionalFields": []
    },
    {
      "unitOfMeasure": null,
      "status": null,
      "qualificationContext": {
        "reason": null,
        "isQualified": true
      },
      "productType": null,
      "productSpecificationType": null,
      "productSellingModelOptions": [
        {
          "productSellingModelId": "0jPVW0000001fh32AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "TermDefined",
            "pricingTermUnit": "Annual",
            "pricingTerm": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA"
          },
          "productId": "01tVW000003l7tzYAA",
          "id": "0iOVW00000049w52AA"
        }
      ],
      "productRelatedComponent": null,
      "productQuantity": null,
      "productPricingInformation": null,
      "productInformation": null,
      "productComponentGroups": [],
      "productCode": "QB-API-GOVT",
      "productClassification": {
        "id": null
      },
      "prices": [
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "TermDefined",
            "occurrence": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA",
            "frequency": "Annual"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzfHYAQ",
          "price": 1450,
          "isSelected": false,
          "isDerived": false,
          "isDefault": true,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        }
      ],
      "nodeType": "simpleProduct",
      "name": "Additional API Gov",
      "isSoldOnlyWithOtherProds": false,
      "isQuantityEditable": null,
      "isDefaultComponent": null,
      "isComponentRequired": null,
      "isAssetizable": true,
      "isActive": true,
      "id": "01tVW000003l7tzYAA",
      "endOfLifeDate": null,
      "displayUrl": "/resource/api_govt",
      "discontinuedDate": null,
      "description": "API instances remain under management until they are deleted. Instances of API Manager are aggregated using a Max Concurrent model. The usage for a month is the highest number of APIs Managed in a single given hour during a month.",
      "configureDuringSale": null,
      "configurationRules": [],
      "childProducts": [],
      "categories": [
        {
          "sortOrder": null,
          "qualificationContext": {
            "reason": null,
            "isQualified": true
          },
          "parentCategoryId": null,
          "name": "API",
          "isNavigational": null,
          "id": "0ZGVW000000IUEG4A4",
          "hasSubCategories": null,
          "description": null,
          "childCategories": null,
          "catalogId": "0ZSVW000000AhdB4AS"
        }
      ],
      "catalogs": [],
      "availabilityDate": null,
      "attributeCategories": [],
      "additionalFields": []
    },
    {
      "unitOfMeasure": null,
      "status": null,
      "qualificationContext": {
        "reason": null,
        "isQualified": true
      },
      "productType": null,
      "productSpecificationType": null,
      "productSellingModelOptions": [
        {
          "productSellingModelId": "0jPVW0000001fh32AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "TermDefined",
            "pricingTermUnit": "Annual",
            "pricingTerm": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA"
          },
          "productId": "01tVW000003l7u0YAA",
          "id": "0iOVW00000049w92AA"
        }
      ],
      "productRelatedComponent": null,
      "productQuantity": null,
      "productPricingInformation": null,
      "productInformation": null,
      "productComponentGroups": [],
      "productCode": "QB-API-PREP",
      "productClassification": {
        "id": null
      },
      "prices": [
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "TermDefined",
            "occurrence": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA",
            "frequency": "Annual"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzfSYAQ",
          "price": 3240,
          "isSelected": false,
          "isDerived": false,
          "isDefault": true,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        }
      ],
      "nodeType": "simpleProduct",
      "name": "Additional API Pre-Prod",
      "isSoldOnlyWithOtherProds": false,
      "isQuantityEditable": null,
      "isDefaultComponent": null,
      "isComponentRequired": null,
      "isAssetizable": true,
      "isActive": true,
      "id": "01tVW000003l7u0YAA",
      "endOfLifeDate": null,
      "displayUrl": "/resource/api_preprod",
      "discontinuedDate": null,
      "description": "API instances remain under management until they are deleted. Instances of API Manager are aggregated using a Max Concurrent model. The usage for a month is the highest number of APIs Managed in a single given hour during a month.",
      "configureDuringSale": null,
      "configurationRules": [],
      "childProducts": [],
      "categories": [
        {
          "sortOrder": null,
          "qualificationContext": {
            "reason": null,
            "isQualified": true
          },
          "parentCategoryId": null,
          "name": "API",
          "isNavigational": null,
          "id": "0ZGVW000000IUEG4A4",
          "hasSubCategories": null,
          "description": null,
          "childCategories": null,
          "catalogId": "0ZSVW000000AhdB4AS"
        }
      ],
      "catalogs": [],
      "availabilityDate": null,
      "attributeCategories": [],
      "additionalFields": []
    },
    {
      "unitOfMeasure": null,
      "status": null,
      "qualificationContext": {
        "reason": null,
        "isQualified": true
      },
      "productType": null,
      "productSpecificationType": null,
      "productSellingModelOptions": [
        {
          "productSellingModelId": "0jPVW0000001fh32AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "TermDefined",
            "pricingTermUnit": "Annual",
            "pricingTerm": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA"
          },
          "productId": "01tVW000003l7u1YAA",
          "id": "0iOVW00000049wA2AQ"
        }
      ],
      "productRelatedComponent": null,
      "productQuantity": null,
      "productPricingInformation": null,
      "productInformation": null,
      "productComponentGroups": [],
      "productCode": "QB-API-PROD",
      "productClassification": {
        "id": null
      },
      "prices": [
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "TermDefined",
            "occurrence": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA",
            "frequency": "Annual"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzfdYAA",
          "price": 3240,
          "isSelected": false,
          "isDerived": false,
          "isDefault": true,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        }
      ],
      "nodeType": "simpleProduct",
      "name": "Additional API Prod",
      "isSoldOnlyWithOtherProds": false,
      "isQuantityEditable": null,
      "isDefaultComponent": null,
      "isComponentRequired": null,
      "isAssetizable": true,
      "isActive": true,
      "id": "01tVW000003l7u1YAA",
      "endOfLifeDate": null,
      "displayUrl": "/resource/api_prod",
      "discontinuedDate": null,
      "description": "API instances remain under management until they are deleted. Instances of API Manager are aggregated using a Max Concurrent model. The usage for a month is the highest number of APIs Managed in a single given hour during a month.",
      "configureDuringSale": null,
      "configurationRules": [],
      "childProducts": [],
      "categories": [
        {
          "sortOrder": null,
          "qualificationContext": {
            "reason": null,
            "isQualified": true
          },
          "parentCategoryId": null,
          "name": "API",
          "isNavigational": null,
          "id": "0ZGVW000000IUEG4A4",
          "hasSubCategories": null,
          "description": null,
          "childCategories": null,
          "catalogId": "0ZSVW000000AhdB4AS"
        }
      ],
      "catalogs": [],
      "availabilityDate": null,
      "attributeCategories": [],
      "additionalFields": []
    },
    {
      "unitOfMeasure": null,
      "status": null,
      "qualificationContext": {
        "reason": null,
        "isQualified": true
      },
      "productType": null,
      "productSpecificationType": null,
      "productSellingModelOptions": [
        {
          "productSellingModelId": "0jPVW0000001fh32AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "TermDefined",
            "pricingTermUnit": "Annual",
            "pricingTerm": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA"
          },
          "productId": "01tVW000003l7u3YAA",
          "id": "0iOVW00000049wF2AQ"
        },
        {
          "productSellingModelId": "0jPVW0000001fh52AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "Evergreen",
            "pricingTermUnit": "Months",
            "pricingTerm": 1,
            "name": "Evergreen Monthly",
            "id": "0jPVW0000001fh52AA"
          },
          "productId": "01tVW000003l7u3YAA",
          "id": "0iOVW00000049wE2AQ"
        },
        {
          "productSellingModelId": "0jPVW0000001fh62AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "TermDefined",
            "pricingTermUnit": "Months",
            "pricingTerm": 1,
            "name": "Term Monthly",
            "id": "0jPVW0000001fh62AA"
          },
          "productId": "01tVW000003l7u3YAA",
          "id": "0iOVW00000049wG2AQ"
        }
      ],
      "productRelatedComponent": null,
      "productQuantity": null,
      "productPricingInformation": null,
      "productInformation": null,
      "productComponentGroups": [],
      "productCode": "QB-AUT-CRED",
      "productClassification": {
        "id": null
      },
      "prices": [
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "TermDefined",
            "occurrence": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA",
            "frequency": "Annual"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzfUYAQ",
          "price": 25,
          "isSelected": false,
          "isDerived": false,
          "isDefault": true,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        },
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "Evergreen",
            "occurrence": 1,
            "name": "Evergreen Monthly",
            "id": "0jPVW0000001fh52AA",
            "frequency": "Months"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzgAYAQ",
          "price": 2.5,
          "isSelected": false,
          "isDerived": false,
          "isDefault": false,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        },
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "TermDefined",
            "occurrence": 1,
            "name": "Term Monthly",
            "id": "0jPVW0000001fh62AA",
            "frequency": "Months"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzgBYAQ",
          "price": 2,
          "isSelected": false,
          "isDerived": false,
          "isDefault": false,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        }
      ],
      "nodeType": "simpleProduct",
      "name": "Additional Automation QB Credits",
      "isSoldOnlyWithOtherProds": false,
      "isQuantityEditable": null,
      "isDefaultComponent": null,
      "isComponentRequired": null,
      "isAssetizable": true,
      "isActive": true,
      "id": "01tVW000003l7u3YAA",
      "endOfLifeDate": null,
      "displayUrl": "/resource/add_auto_credit",
      "discontinuedDate": null,
      "description": "Your QuantumBit Automation subscription plan includes a quota of Automation QB Credits that you can use with QB RPA, QB Orchestrator, or a combination of both products. As you use processes to create automations, your total credit quota is depleted. 1 QB Automation Credit = 2 RPA Bot Minutes, 1 QB Automation Credit = 100 RPA API Calls, 1 QB Automation Credit = 50 Orchestrator Tasks",
      "configureDuringSale": null,
      "configurationRules": [],
      "childProducts": [],
      "categories": [
        {
          "sortOrder": null,
          "qualificationContext": {
            "reason": null,
            "isQualified": true
          },
          "parentCategoryId": null,
          "name": "API",
          "isNavigational": null,
          "id": "0ZGVW000000IUEG4A4",
          "hasSubCategories": null,
          "description": null,
          "childCategories": null,
          "catalogId": "0ZSVW000000AhdB4AS"
        }
      ],
      "catalogs": [],
      "availabilityDate": null,
      "attributeCategories": [],
      "additionalFields": []
    },
    {
      "unitOfMeasure": null,
      "status": null,
      "qualificationContext": {
        "reason": null,
        "isQualified": true
      },
      "productType": null,
      "productSpecificationType": null,
      "productSellingModelOptions": [
        {
          "productSellingModelId": "0jPVW0000001fh32AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "TermDefined",
            "pricingTermUnit": "Annual",
            "pricingTerm": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA"
          },
          "productId": "01tVW000003l7uPYAQ",
          "id": "0iOVW00000049wR2AQ"
        }
      ],
      "productRelatedComponent": null,
      "productQuantity": null,
      "productPricingInformation": null,
      "productInformation": null,
      "productComponentGroups": [],
      "productCode": "QB-DAT-GRPH",
      "productClassification": {
        "id": null
      },
      "prices": [
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "TermDefined",
            "occurrence": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA",
            "frequency": "Annual"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzffYAA",
          "price": 25000,
          "isSelected": false,
          "isDerived": false,
          "isDefault": true,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        }
      ],
      "nodeType": "simpleProduct",
      "name": "Additional QB DataGraph (500M)",
      "isSoldOnlyWithOtherProds": false,
      "isQuantityEditable": null,
      "isDefaultComponent": null,
      "isComponentRequired": null,
      "isAssetizable": true,
      "isActive": true,
      "id": "01tVW000003l7uPYAQ",
      "endOfLifeDate": null,
      "displayUrl": "/resource/add_data_graph",
      "discontinuedDate": null,
      "description": "With QuantumBit DataGraph, you can reuse multiple APIs in a single request. Enterprise architects can easily unify APIs into one data service — all without writing more code. Developers can consume multiple APIs from the data service in a single GraphQL request.",
      "configureDuringSale": null,
      "configurationRules": [],
      "childProducts": [],
      "categories": [
        {
          "sortOrder": null,
          "qualificationContext": {
            "reason": null,
            "isQualified": true
          },
          "parentCategoryId": null,
          "name": "API",
          "isNavigational": null,
          "id": "0ZGVW000000IUEG4A4",
          "hasSubCategories": null,
          "description": null,
          "childCategories": null,
          "catalogId": "0ZSVW000000AhdB4AS"
        }
      ],
      "catalogs": [],
      "availabilityDate": null,
      "attributeCategories": [],
      "additionalFields": []
    },
    {
      "unitOfMeasure": null,
      "status": null,
      "qualificationContext": {
        "reason": null,
        "isQualified": true
      },
      "productType": null,
      "productSpecificationType": null,
      "productSellingModelOptions": [
        {
          "productSellingModelId": "0jPVW0000001fh32AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "TermDefined",
            "pricingTermUnit": "Annual",
            "pricingTerm": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA"
          },
          "productId": "01tVW000003l7u2YAA",
          "id": "0iOVW00000049wC2AQ"
        },
        {
          "productSellingModelId": "0jPVW0000001fh52AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "Evergreen",
            "pricingTermUnit": "Months",
            "pricingTerm": 1,
            "name": "Evergreen Monthly",
            "id": "0jPVW0000001fh52AA"
          },
          "productId": "01tVW000003l7u2YAA",
          "id": "0iOVW00000049wB2AQ"
        },
        {
          "productSellingModelId": "0jPVW0000001fh62AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "TermDefined",
            "pricingTermUnit": "Months",
            "pricingTerm": 1,
            "name": "Term Monthly",
            "id": "0jPVW0000001fh62AA"
          },
          "productId": "01tVW000003l7u2YAA",
          "id": "0iOVW00000049wD2AQ"
        }
      ],
      "productRelatedComponent": null,
      "productQuantity": null,
      "productPricingInformation": null,
      "productInformation": null,
      "productComponentGroups": [],
      "productCode": "QB-API-REQT",
      "productClassification": {
        "id": null
      },
      "prices": [
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "TermDefined",
            "occurrence": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA",
            "frequency": "Annual"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzfOYAQ",
          "price": 45,
          "isSelected": false,
          "isDerived": false,
          "isDefault": true,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        },
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "Evergreen",
            "occurrence": 1,
            "name": "Evergreen Monthly",
            "id": "0jPVW0000001fh52AA",
            "frequency": "Months"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzgJYAQ",
          "price": 5,
          "isSelected": false,
          "isDerived": false,
          "isDefault": false,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        },
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "TermDefined",
            "occurrence": 1,
            "name": "Term Monthly",
            "id": "0jPVW0000001fh62AA",
            "frequency": "Months"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzgKYAQ",
          "price": 5,
          "isSelected": false,
          "isDerived": false,
          "isDefault": false,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        }
      ],
      "nodeType": "simpleProduct",
      "name": "API Access Requests (AEH)",
      "isSoldOnlyWithOtherProds": false,
      "isQuantityEditable": null,
      "isDefaultComponent": null,
      "isComponentRequired": null,
      "isAssetizable": true,
      "isActive": true,
      "id": "01tVW000003l7u2YAA",
      "endOfLifeDate": null,
      "displayUrl": "/resource/api_access",
      "discontinuedDate": null,
      "description": "QuantumBit API Experience Hub enables you to create vibrant ecosystems and grow engagement for your API products",
      "configureDuringSale": null,
      "configurationRules": [],
      "childProducts": [],
      "categories": [
        {
          "sortOrder": null,
          "qualificationContext": {
            "reason": null,
            "isQualified": true
          },
          "parentCategoryId": null,
          "name": "API",
          "isNavigational": null,
          "id": "0ZGVW000000IUEG4A4",
          "hasSubCategories": null,
          "description": null,
          "childCategories": null,
          "catalogId": "0ZSVW000000AhdB4AS"
        }
      ],
      "catalogs": [],
      "availabilityDate": null,
      "attributeCategories": [],
      "additionalFields": []
    },
    {
      "unitOfMeasure": null,
      "status": null,
      "qualificationContext": {
        "reason": null,
        "isQualified": true
      },
      "productType": null,
      "productSpecificationType": null,
      "productSellingModelOptions": [
        {
          "productSellingModelId": "0jPVW0000001fh32AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "TermDefined",
            "pricingTermUnit": "Annual",
            "pricingTerm": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA"
          },
          "productId": "01tVW000003l7uhYAA",
          "id": "0iOVW00000049x22AA"
        }
      ],
      "productRelatedComponent": null,
      "productQuantity": null,
      "productPricingInformation": null,
      "productInformation": null,
      "productComponentGroups": [],
      "productCode": "QB-SUPP-1005",
      "productClassification": {
        "id": null
      },
      "prices": [
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "TermDefined",
            "occurrence": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA",
            "frequency": "Annual"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000jzfRYAQ",
          "price": 30000,
          "isSelected": false,
          "isDerived": false,
          "isDefault": true,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        }
      ],
      "nodeType": "simpleProduct",
      "name": "Gold Hardware Maintenance",
      "isSoldOnlyWithOtherProds": false,
      "isQuantityEditable": null,
      "isDefaultComponent": null,
      "isComponentRequired": null,
      "isAssetizable": true,
      "isActive": true,
      "id": "01tVW000003l7uhYAA",
      "endOfLifeDate": null,
      "displayUrl": "/resource/gold_maint",
      "discontinuedDate": null,
      "description": "System maintenance, administration, and configuration performed by a certified technician. Also includes 24x7 phone service and monthly on-site check-ups. 20% of hardware.",
      "configureDuringSale": null,
      "configurationRules": [],
      "childProducts": [],
      "categories": [
        {
          "sortOrder": null,
          "qualificationContext": {
            "reason": null,
            "isQualified": true
          },
          "parentCategoryId": null,
          "name": "Maintenance",
          "isNavigational": null,
          "id": "0ZGVW000000IUEJ4A4",
          "hasSubCategories": null,
          "description": null,
          "childCategories": null,
          "catalogId": "0ZSVW000000AhdB4AS"
        }
      ],
      "catalogs": [],
      "availabilityDate": null,
      "attributeCategories": [],
      "additionalFields": []
    },
    {
      "unitOfMeasure": null,
      "status": null,
      "qualificationContext": {
        "reason": null,
        "isQualified": true
      },
      "productType": "Base",
      "productSpecificationType": null,
      "productSellingModelOptions": [
        {
          "productSellingModelId": "0jPVW0000001fh32AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "TermDefined",
            "pricingTermUnit": "Annual",
            "pricingTerm": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA"
          },
          "productId": "01tVW000003olLNYAY",
          "id": "0iOVW0000005X1l2AE"
        },
        {
          "productSellingModelId": "0jPVW0000001fh42AA",
          "productSellingModel": {
            "status": "Active",
            "sellingModelType": "OneTime",
            "pricingTermUnit": null,
            "pricingTerm": null,
            "name": "One-Time",
            "id": "0jPVW0000001fh42AA"
          },
          "productId": "01tVW000003olLNYAY",
          "id": "0iOVW0000005X092AE"
        }
      ],
      "productRelatedComponent": null,
      "productQuantity": null,
      "productPricingInformation": null,
      "productInformation": null,
      "productComponentGroups": [],
      "productCode": "LaptopDell",
      "productClassification": {
        "id": null
      },
      "prices": [
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "TermDefined",
            "occurrence": 1,
            "name": "Term Annual",
            "id": "0jPVW0000001fh32AA",
            "frequency": "Annual"
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000lsJfYAI",
          "price": 600,
          "isSelected": false,
          "isDerived": false,
          "isDefault": true,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        },
        {
          "pricingModel": {
            "unitOfMeasure": null,
            "pricingModelType": "OneTime",
            "occurrence": null,
            "name": "One-Time",
            "id": "0jPVW0000001fh42AA",
            "frequency": null
          },
          "priceBookId": "01sVW0000024PZlYAM",
          "priceBookEntryId": "01uVW000000lsPxYAI",
          "price": 100,
          "isSelected": false,
          "isDerived": false,
          "isDefault": false,
          "effectiveTo": null,
          "effectiveFrom": null,
          "currencyIsoCode": "USD"
        }
      ],
      "nodeType": "variationParentProduct",
      "name": "Laptop Dell",
      "isSoldOnlyWithOtherProds": false,
      "isQuantityEditable": null,
      "isDefaultComponent": null,
      "isComponentRequired": null,
      "isAssetizable": true,
      "isActive": true,
      "id": "01tVW000003olLNYAY",
      "endOfLifeDate": null,
      "displayUrl": null,
      "discontinuedDate": null,
      "description": null,
      "configureDuringSale": null,
      "configurationRules": [],
      "childProducts": [],
      "categories": [
        {
          "sortOrder": null,
          "qualificationContext": {
            "reason": null,
            "isQualified": true
          },
          "parentCategoryId": null,
          "name": "Variants",
          "isNavigational": null,
          "id": "0ZGVW000000ItXV4A0",
          "hasSubCategories": null,
          "description": null,
          "childCategories": null,
          "catalogId": "0ZSVW000000AhdB4AS"
        }
      ],
      "catalogs": [],
      "availabilityDate": null,
      "attributeCategories": [],
      "additionalFields": []
    }
  ],
  "contextId": "0000000r25tp21g0025177753245202837fde5e54eed45178ef77c9e453083fd",
  "correlationId": "ee883b85-2c99-48fb-88e6-95cb35e8751e",
  "cursor": "MTAwMDAwMDAxMw=="
}
```

```apex
public class ProductServiceAction {
    // Define input parameters
    public class FlowInput{
        @InvocableVariable(required=false)
        public String objectApiName;
        
        @InvocableVariable(required=false)
        public String recordId;
    }
    
    // Define output parameters
    public class FlowOutput{
        @invocableVariable
        public runtime_industries_cpq.AdditionalContextData additionalContextDataFinalOutput = new runtime_industries_cpq.AdditionalContextData();
        
        @invocableVariable
        public runtime_industries_cpq.RelatedObjectFilterInputRepresentation relatedObjectFilter = new runtime_industries_cpq.RelatedObjectFilterInputRepresentation();
        
        @invocableVariable
        public ConnectApi.UserContextInputRepresentation userContext = new ConnectApi.UserContextInputRepresentation();
        
        }
    
    // This method is invoked from a Flow
    @InvocableMethod(label='Process Input' description='Creates the Array of ContextDataInput for additional Context Data')
    public static List<FlowOutput> processContextData(List<FlowInput> inputs){
        String apiName;
        String recId;
        FlowOutput output = new FlowOutput();
        
    // Capture input from the flow
        for(FlowInput input: inputs){
            apiName = input.objectApiName;
            recId = input.recordId;
            }
    // Populate the ContextDataInput list to store additional context data    
        List<runtime_industries_cpq.ContextDataInput> listContextData = new List<runtime_industries_cpq.ContextDataInput>();
        runtime_industries_cpq.ContextDataInput cd1 = new runtime_industries_cpq.ContextDataInput();
        cd1.nodeName = apiName;
        cd1.nodeData = new Map<String, Object>();
        cd1.nodeData.put('id',recId);
        listContextData.add(cd1);
       
        output.additionalContextDataFinalOutput.additionalContextData = listContextData;
        List<FlowOutput> flowOutputs = new List<FlowOutput>();
        flowOutputs.add(output);
        
        List<runtime_industries_cpq.RelatedObjectFilter> relatedObjectFilterList = new List<runtime_industries_cpq.RelatedObjectFilter>();
       
        runtime_industries_cpq.RelatedObjectFilter relatedObjectFilter = new runtime_industries_cpq.RelatedObjectFilter();

        relatedObjectFilter.objectName = 'ProductSpecificationRecType';
        List<runtime_industries_cpq.FilterCriteriaInputRepresentation> criteriaList = new  List<runtime_industries_cpq.FilterCriteriaInputRepresentation>();
        runtime_industries_cpq.FilterCriteriaInputRepresentation criteria = new runtime_industries_cpq.FilterCriteriaInputRepresentation();
        criteria.property = 'IsCommercial';
        criteria.operator = 'eq';
        criteria.value = 'true';
        criteriaList.add(criteria);
        relatedObjectFilter.criteria = criteriaList;

       relatedObjectFilterList.add(relatedObjectFilter);

        output.relatedObjectFilter.relatedObjectFilter  = relatedObjectFilterList;
         
		output.userContext.accountId = '001Hs00003r17HNIAY';
        
        return flowOutputs;
        
    }

}
```
