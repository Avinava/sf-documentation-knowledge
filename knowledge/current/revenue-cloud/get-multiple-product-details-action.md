---
title: "Get Multiple Product Details Action"
domain: revenue-cloud
topic: get-multiple-product-details-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:05.975Z
estimatedTokens: 985
keywords: [Multiple, Product, Action, products, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Get Multiple Product Details Action

> Get product details for a list of products.

# Get Multiple Product Details Action

Get product details for a list of products.

This action is available in API version 64.0 and later.

## Special Access Rules

The Get Multiple Product Details action is available in Enterprise, Unlimited, and Developer Editions where Product Discovery is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getMultipleProductDetails

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| additionalContextData | TypeApex-definedDescriptionCollection of Apex runtime_industries_cpq.AdditionalContextData records that contain additional context data for nodes of the custom context definition, if applicable. You can add details for up to 10 nodes. |
| additionalFields | TypeApex-definedDescriptionAn Apex AdditionalFields record that contains the additional fields that are passed for the Product2 object. |
| catalogId | TypestringDescriptionID of the catalog record. |
| contextDefinitionName | TypestringDescriptionName of the custom context definition that’s used to create context data for categories. If null, the default context definition is used. |
| contextMappingName | TypestringDescriptionName of the context mapping. By default, the default context mapping associated with the context definition is used. |
| correlationId | TypestringDescriptionUnique identifier attached to requests and messages, allowing reference to a specific transaction or event chain. |
| currencyCode | TypestringDescriptionCurrency code that’s used to calculate and show prices. |
| enablePricing | TypebooleanDescriptionIndicates whether pricing procedure must run (true) or not (false). The default value is true. To use this parameter, the Pricing Procedure setting must be enabled. |
| enableQualificationProcedure | TypebooleanDescriptionIndicates whether the qualification procedure is applied to categories (true) or not (false). |
| priceBookId | TypestringDescriptionID of the pricebook that the pricing information is retrieved from. |
| pricingProcedureName | TypestringDescriptionName of the pricing procedure to calculate product prices. If you don’t enter a value, the pricing procedure selected on the Product Discovery Settings page is used. |
| productDataInputs | TypeApex-definedDescriptionRequired.Collection of Apex BulkProductDetailsInputBody records that contain details about the products that are to be retrieved. |
| qualificationProcedureName | TypestringDescriptionName of the custom qualification procedure that’s executed to determine the category list. If null, the default qualification procedure is executed. |
| userContextInputRepresentation | TypeApex-definedDescriptionAn Apex UserContextInputRepresentation record that contains user details, such as account ID, geographical location, language preferences, and more. |

## Outputs

| Output | Details |
| --- | --- |
| apiStatusOutputRepresentation | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.ApiStatusRepresentation record that contains the status of the request, including the status code and message. |
| contextId | TypestringDescriptionID of the context that’s created using the specified context definition. |
| correlationId | TypestringDescriptionUnique identifier attached to requests and messages, allowing reference to a specific transaction or event chain. |
| productDetailsOutputRepresentation | TypeApex-definedDescriptionCollection of Apex BulkProductDetailsRepresentation records that contain details of available products. |
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

## Code Examples

```
{
  "inputs": [
    {
      "productDataInputs": {
        "productData": [
          {
            "productId": "01txx0000006i2rAAA",
            "productSellingModelId": "0jPxx0000000002EAA"
          },
          {
            "productId": "01txx0000006i2oAAA",
            "productSellingModelId": "0jPxx0000000002EAA"
          }
        ]
      },
      "priceBookId": "01sxx0000005ptpAAA",
      "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b",
      "enableQualification": true,
      "enablePricing": true,
      "catalogId": "0ZSxx0000000002GAA",
      "userContext": {
        "accountId": "001xx000003GYiFAAW"
      },
      "currencyCode": "USD"
    }
  ]
}
```

```apex
Invocable.Action action = Invocable.Action.createStandardAction('getMultipleProductDetails');

List<runtime_industries_cpq.BulkProductDetailsInputBody> productDataList = new List<runtime_industries_cpq.BulkProductDetailsInputBody>();
runtime_industries_cpq.BulkProductDetailsInputBody productData = new runtime_industries_cpq.BulkProductDetailsInputBody();
productData.productId = '01tIY000000nCxhYAE';

productDataList.add(productData);

runtime_industries_cpq.BulkProductDetailsInputBodyList productList = new runtime_industries_cpq.BulkProductDetailsInputBodyList();
productList.productData = productDataList; 

action.setInvocationParameter('productDataInputs', productList); 

List<Invocable.Action.Result> results = action.invoke();
System.debug('Result === ' + results);
```

```
[
  {
    "actionName": "getMultipleProductDetails",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "apiStatusOutputRepresentation": {
        "statusMessage": null,
        "statusCode": "FetchedDetailsSuccessfully",
        "messages": []
      },
      "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b",
      "contextId": null,
      "productDetailsOutputRepresentation": [
        {
          "unitOfMeasure": {
            "unitCode": null,
            "scale": null,
            "roundingMethod": null,
            "name": null,
            "id": null
          },
          "status": null,
          "qualificationContext": null,
          "productType": null,
          "productSpecificationType": null,
          "productSellingModelOptions": [
            {
              "productSellingModelId": "0jPxx0000000002EAA",
              "productSellingModel": {
                "status": "Active",
                "sellingModelType": "TermDefined",
                "pricingTermUnit": "Annual",
                "pricingTerm": 1,
                "name": "Term Based - Yearly",
                "id": "0jPxx0000000002EAA"
              },
              "productId": "01txx0000006i2oAAA",
              "id": "0iOxx000000000JEAQ"
            }
          ],
          "productRelatedComponent": {
            "unitOfMeasure": null,
            "sequence": null,
            "quoteVisibility": null,
            "quantityScaleMethod": null,
            "quantity": null,
            "productRelationshipTypeId": null,
            "productComponentGroupId": null,
            "productClassificationId": null,
            "parentSellingModelId": null,
            "parentProductId": null,
            "minQuantity": null,
            "maxQuantity": null,
            "isQuantityEditable": null,
            "isExcluded": null,
            "isDefaultComponent": null,
            "isComponentRequired": null,
            "id": null,
            "doesBundlePriceIncludeChild": null,
            "childSellingModelId": null,
            "childProductId": null
          },
          "productQuantity": {
            "quantity": null,
            "minQuantity": null,
            "maxQuantity": null
          },
          "productPricingInformation": null,
          "productInformation": null,
          "productComponentGroups": [],
          "productCode": "ASTCERT001",
          "productClassification": {
            "id": null
          },
          "prices": [
            {
              "pricingModel": {
                "unitOfMeasure": null,
                "pricingModelType": "TermDefined",
                "occurrence": 1,
                "name": "Term Based - Yearly",
                "id": "0jPxx0000000002EAA",
                "frequency": "Annual"
              },
              "priceBookId": "01sxx0000005ptpAAA",
              "priceBookEntryId": "01uxx0000008yXaAAI",
              "price": 2000,
              "isSelected": true,
              "isDerived": false,
              "isDefault": true,
              "effectiveTo": null,
              "effectiveFrom": null,
              "currencyIsoCode": "USD"
            }
          ],
          "nodeType": "simpleProduct",
          "name": "AI Specialist Certification",
          "isSoldOnlyWithOtherProds": false,
          "isQuantityEditable": null,
          "isDefaultComponent": null,
          "isComponentRequired": null,
          "isAssetizable": true,
          "isActive": true,
          "id": "01txx0000006i2oAAA",
          "endOfLifeDate": null,
          "displayUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsp4GoUP_nGiCXJ-wzYkPx-RlA_UCUX0zIDv3slxnJACqXaRd1vHJUZe6yQklUiXvEDgo&usqp=CAU",
          "discontinuedDate": null,
          "description": "The Certified Artificial Intelligence Expert certification is typically designed for individuals who have an in-depth understanding of artificial intelligence (AI) concepts, algorithms, and applications and want to validate their expertise in the field.",
          "configureDuringSale": "NotAllowed",
          "childProducts": [],
          "catalogs": [],
          "availabilityDate": null,
          "attributes": [],
          "attributeCategories": [],
          "additionalFields": []
        },
        {
          "unitOfMeasure": {
            "unitCode": null,
            "scale": null,
            "roundingMethod": null,
            "name": null,
            "id": null
          },
          "status": null,
          "qualificationContext": null,
          "productType": null,
          "productSpecificationType": null,
          "productSellingModelOptions": [
            {
              "productSellingModelId": "0jPxx0000000002EAA",
              "productSellingModel": {
                "status": "Active",
                "sellingModelType": "TermDefined",
                "pricingTermUnit": "Annual",
                "pricingTerm": 1,
                "name": "Term Based - Yearly",
                "id": "0jPxx0000000002EAA"
              },
              "productId": "01txx0000006i2rAAA",
              "id": "0iOxx000000000QEAQ"
            }
          ],
          "productRelatedComponent": {
            "unitOfMeasure": null,
            "sequence": null,
            "quoteVisibility": null,
            "quantityScaleMethod": null,
            "quantity": null,
            "productRelationshipTypeId": null,
            "productComponentGroupId": null,
            "productClassificationId": null,
            "parentSellingModelId": null,
            "parentProductId": null,
            "minQuantity": null,
            "maxQuantity": null,
            "isQuantityEditable": null,
            "isExcluded": null,
            "isDefaultComponent": null,
            "isComponentRequired": null,
            "id": null,
            "doesBundlePriceIncludeChild": null,
            "childSellingModelId": null,
            "childProductId": null
          },
          "productQuantity": {
            "quantity": null,
            "minQuantity": null,
            "maxQuantity": null
          },
          "productPricingInformation": null,
          "productInformation": null,
          "productComponentGroups": [],
          "productCode": "ACERT001",
          "productClassification": {
            "id": null
          },
          "prices": [
            {
              "pricingModel": {
                "unitOfMeasure": null,
                "pricingModelType": "TermDefined",
                "occurrence": 1,
                "name": "Term Based - Yearly",
                "id": "0jPxx0000000002EAA",
                "frequency": "Annual"
              },
              "priceBookId": "01sxx0000005ptpAAA",
              "priceBookEntryId": "01uxx0000008yXdAAI",
              "price": 2000,
              "isSelected": true,
              "isDerived": false,
              "isDefault": true,
              "effectiveTo": null,
              "effectiveFrom": null,
              "currencyIsoCode": "USD"
            }
          ],
          "nodeType": "simpleProduct",
          "name": "Admin Certification",
          "isSoldOnlyWithOtherProds": false,
          "isQuantityEditable": null,
          "isDefaultComponent": null,
          "isComponentRequired": null,
          "isAssetizable": true,
          "isActive": true,
          "id": "01txx0000006i2rAAA",
          "endOfLifeDate": null,
          "displayUrl": null,
          "discontinuedDate": null,
          "description": null,
          "configureDuringSale": "Allowed",
          "childProducts": [],
          "catalogs": [],
          "availabilityDate": null,
          "attributes": [],
          "attributeCategories": [],
          "additionalFields": []
        }
      ]
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
