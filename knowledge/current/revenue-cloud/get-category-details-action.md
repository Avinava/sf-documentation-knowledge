---
title: "Get Category Details Action"
domain: revenue-cloud
topic: get-category-details-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:05.963Z
estimatedTokens: 767
keywords: [Category, Action, record, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Get Category Details Action

> Get details of a category record.

# Get Category Details Action

Get details of a category record.

This action is available in API version 64.0 and later.

## Special Access Rules

The Get Category Details action is available in Enterprise, Unlimited, and Developer Editions where Product Discovery is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getCategoryDetails

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
| catalogId | TypestringDescriptionID of the catalog record that’s used to search for products within a category. |
| categoryId | TypestringDescriptionRequired.ID of the category or subcategory that’s used to search for products. |
| contextDefinitionName | TypestringDescriptionName of the custom context definition that’s used to create context data for categories. If null, the default context definition is used. |
| contextMappingName | TypestringDescriptionName of the context mapping. By default, the default context mapping associated with the context definition is used. |
| correlationId | TypestringDescriptionUnique identifier attached to requests and messages, allowing reference to a specific transaction or event chain. |
| enableQualificationProcedure | TypebooleanDescriptionIndicates whether qualification rules are applied to categories (true) or not (false). |
| filterInputRepresentation | TypeApex-definedDescriptionCollection of Apex runtime_industries_cpq.FilterInputRepresentation records that contain the filter criteria applied to the category records. |
| qualificationProcedureName | TypestringDescriptionName of the custom qualification procedure that’s executed to determine the category list. If null, the default qualification procedure is executed. |
| userContextInputRepresentation | TypeApex-definedDescriptionAn Apex UserContextInputRepresentation record that contains user details, such as account ID, geographical location, language preferences, and more. |

## Outputs

| Output | Details |
| --- | --- |
| apiStatusOutputRepresentation | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.ApiStatusRepresentation record that contains the status of the request, including the status code and message. |
| categoryDetailsRepresentations | TypeApex-definedDescriptionCollection of Apex CategoryDetailsRepresentation records that contain details about the retrieved category. |
| correlationId | TypestringDescriptionUnique identifier attached to requests and messages, allowing reference to a specific transaction or event chain. |

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
      "categoryId": "0ZGxx0000000001GAA",
      "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b",
      "additionalContextData": [
        {
          "nodeName": "Quote__c",
          "nodeData": {
            "id": "0Q0xx0000004CDsCAM",
            "businessObjectType": "Quote"
          }
        }
      ],
      "contextDefinitionName": "CategoryCD",
      "contextMappingName": "ProductDiscoveryMapping",
      "EnableQualificationProcedure": true,
      "QualificationProcedureName": "CatQual02",
      "userContextInputRepresentation": {
        "accountId": "001xx000003GYiEAAW"
      }
    }
  ]
}
```

```apex
Invocable.Action action = Invocable.Action.createStandardAction('getCategoryDetails');

ConnectApi.UserContextInputRepresentation userContext = new ConnectApi.UserContextInputRepresentation();
userContext.accountId = '001xx000003GYiEAAW';

runtime_industries_cpq.ContextDataInput data = new runtime_industries_cpq.ContextDataInput();
String nodeNameVal = 'Quote__c';
Map<String,Object> nodeDataVal = new Map<String,Object>();
nodeDataVal.put('id',(Object)'0Q0xx0000004CDsCAM');
nodeDataVal.put('businessObjectType',(Object)'Quote');
data.nodeName = nodeNameVal;
data.nodeData = nodeDataVal;
List<runtime_industries_cpq.ContextDataInput> contextData= new List<runtime_industries_cpq.ContextDataInput>();
contextData.add(data);
runtime_industries_cpq.AdditionalContextData additionalContextDataOut = new runtime_industries_cpq.AdditionalContextData();
additionalContextDataOut.additionalContextData = new List<runtime_industries_cpq.ContextDataInput>();
additionalContextDataOut.additionalContextData.add(data);


action.setInvocationParameter('categoryId', '0ZGxx0000000001GAA');
action.setInvocationParameter('correlationId', '9cbb9650-48c5-11ed-96d1-0afcf185843b');
action.setInvocationParameter('userContext', userContext);
action.setInvocationParameter('enableQualification', True);
action.setInvocationParameter('qualificationProcedure', 'CatQual02');
action.setInvocationParameter('contextDefinition', 'CategoryCD');
action.setInvocationParameter('contextMapping', 'ProductDiscoveryMapping');
action.setInvocationParameter('additionalContextData', additionalContextDataOut);

List<Invocable.Action.Result> results = action.invoke();
System.debug('Search Action + '+results);
```

```
{
  "root": [
    {
      "actionName": "getCategoryDetails",
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
        "categoryDetailsRepresentations": {
          "sortOrder": null,
          "qualificationContext": {
            "reason": "Category is not qualified because one or more field(s) do not match the qualification criteria. Fields:- CategoryId - 0ZGxx0000000001GAA quotename - null Max_Number_of_Employees - 1500 Min_Number_of_Employees - 1500",
            "isQualified": false
          },
          "parentCategoryId": null,
          "name": "Laptops",
          "isNavigational": true,
          "id": "0ZGxx0000000001GAA",
          "hasSubCategories": true,
          "description": null,
          "childCategories": [
            {
              "sortOrder": null,
              "qualificationContext": {
                "reason": null,
                "isQualified": true
              },
              "parentCategoryId": "0ZGxx0000000001GAA",
              "name": "level1",
              "isNavigational": true,
              "id": "0ZGxx000000004rGAA",
              "hasSubCategories": true,
              "description": null,
              "childCategories": [],
              "catalogId": null
            }
          ],
          "catalogId": "0ZSxx0000000002GAA"
        }
      },
      "sortOrder": -1,
      "version": 1
    }
  ]
}
```
