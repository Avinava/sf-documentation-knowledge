---
title: "Get Product Recommendations Action"
domain: revenue-cloud
topic: get-product-recommendations-action
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-07-26T01:59:38.383Z
estimatedTokens: 1235
keywords: [Inputs, Outputs, Product, Recommendations, Action, Retrieve, recommended, products, quote, order, Constraint, Rule, Engine]
---

> Retrieve a list of recommended products for a quote or order by using
			the Constraint Rule Engine.

# Get Product Recommendations Action

Retrieve a list of recommended products for a quote or order by using the Constraint Rule Engine.

This action is available in API version 67.0 and later.

## Special Access Rules

The Get Product Details action is available in Enterprise, Unlimited, and Developer Editions where Product Discovery is enabled.

You can invoke this action via Apex and Flows only.

## Inputs

| Input | Details |
| --- | --- |
| additionalContextData | TypeApex-definedDescriptionAn array of Apex runtime_industries_cpq.AdditionalContextData records that contain the additional nodes used along with the context definition nodes for data hydration.The maximum number of supported nodes is 10. |
| additionalFields | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.AdditionalFields record that contains an array of additional standard or custom fields from the Product2 object to include in the response. |
| catalogId | TypestringDescriptionID of the catalog from which to retrieve recommended products. |
| contextDefinition | TypestringDescriptionAPI name of the context definition used for context creation. If you don't specify a value, the context definition selected on the Product Discovery Settings page from Setup is used. |
| contextMapping | TypestringDescriptionAPI name of the context mapping used for data hydration. The value of this parameter is used only if it belongs to the specified context definition. If you don't specify a value, the default context mapping of the context definition is used. |
| currencyCode | TypestringDescriptionCurrency code used for pricing calculations and product filtering. |
| enablePricing | TypebooleanDescriptionIndicates whether the pricing procedure must run (true) or not (false).For orgs where pricing is enabled, you can override to false to skip Salesforce Pricing execution. For orgs where pricing is disabled, you can't override to true. |
| enableQualification | TypebooleanDescriptionIndicates whether the qualification procedure must run (true) or not (false).For orgs where qualification is enabled, you can override to false to skip BRE qualification rules. For orgs where qualification is disabled, you can't override to true. |
| filterCriteria | TypeApex-definedDescriptionA collection of Apex runtime_industries_cpq.FilterInputRepresentation records used to filter products.The filterCriteria parameter supports only the name property.The supported operators are:eqincontainsIf this parameter contains multiple criteria, all criteria are applied using the and operator. |
| nextCursor | TypestringDescriptionA unique identifier that represents the position of the product from which the next set of results are retrieved. |
| pageSize | TypeintegerDescriptionMaximum number of recommended products to return in the response. |
| priceBookId | TypestringDescriptionID of the pricebook from which to retrieve pricing details. |
| pricingProcedure | TypestringDescriptionAPI name of the pricing procedure used to calculate product prices. If you don't specify a value, the pricing procedure selected on the Product Discovery Settings page from Setup is used. |
| qualificationProcedure | TypestringDescriptionAPI name of the qualification procedure used to evaluate product eligibility. If you don't specify a value, the qualification procedure selected on the Product Discovery Settings page from Setup is used. |
| transactionContextId | TypestringDescriptionContext ID of the transaction. |
| transactionId | TypestringDescriptionID of the transaction. |
| usePromotions | TypebooleanDescriptionIndicates whether to fetch promotions for recommended products (true) or not (false). Applies only when promotions are enabled for the org. |
| userContext | TypeApex-definedDescriptionAn Apex ConnectApi.UserContextInputRepresentation record that contains the user details used to evaluate product eligibility and calculate prices. |

## Outputs

| Output | Details |
| --- | --- |
| errorMessages | TypeApex-definedDescriptionA list of Apex runtime_industries_cpq.ProductRecommendationErrorsOutputRepresentation records that contain error codes and messages returned by the action. |
| isSuccessful | TypebooleanDescriptionIndicates whether the action call succeeded (true) or not (false). |
| nextCursor | TypestringDescriptionUnique identifier that represents the position of the next product in the dataset. Use this value as an input to retrieve the next page of results. |
| recommendedProducts | TypeApex-definedDescriptionA list of Apex runtime_industries_cpq.RecommendedProductsOutputRepresentation records that contain the recommended products returned by the Constraint Rule Engine. |
| transactionContextId | TypestringDescriptionContext ID of the transaction. |

## Example

Here's a sample input to call this invocable action from Apex code.

```

```

Here’s a sample response for the Get Product Recommendations action.

```

```

## Code Examples

```apex
Invocable.Action action = Invocable.Action.createStandardAction('getRecommendedProducts');
action.setInvocationParameter('catalogId', '0ZSVW000000AhdB4AS');
action.setInvocationParameter('transactionId', '0Q0VW0000018J6X0AU');
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
  "prodRecomErrorOutRepresentation": [],
  "isSuccessful": true,
  "productCursor": "MTAwMDAwMDAwNg==",
  "transactionContextId": "0000000r25tq18g00291777531846434b162e02f878f425680e0d95dc5f650fe",
  "recomProdOutputRepresentations": [
    {
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
      "productQuantity": null,
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
          "type": "recommend",
          "details": [
            {
              "message": "APIAccessRequests recommends AdditionalAPI"
            }
          ]
        },
        {
          "type": "disable",
          "details": [
            {
              "message": "This is disabled"
            }
          ]
        }
      ],
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
      "catalogs": [
        {
          "status": null,
          "numberOfCategories": 8,
          "name": "QuantumBit Software",
          "id": "0ZSVW000000AhdB4AS",
          "effectiveStartDate": null,
          "effectiveEndDate": null,
          "description": null,
          "customFields": [],
          "catalogType": null,
          "catalogCode": null
        }
      ],
      "availabilityDate": null,
      "additionalFields": []
    }
  ]
}
```
