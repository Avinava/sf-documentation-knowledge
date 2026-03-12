---
title: "Get Categories Action"
domain: revenue-cloud
topic: get-categories-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.806Z
estimatedTokens: 788
keywords: [Get, Categories, Action, list, categories, associated, catalog, record., Special, Access, Rules, Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Get Categories Action

> Get the list of categories associated with a catalog
        record.

# Get Categories Action

Get the list of categories associated with a catalog record.

This action is available in API version 64.0 and later.

## Special Access Rules

The Get Categories action is available in Enterprise, Unlimited, and Developer Editions where Product Discovery is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getCategories

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
| catalogId | TypestringDescriptionRequired.ID of the catalog record. |
| categoryNestLevel | TypeintegerDescriptionLevel of nesting within the category hierarchy to include in the request. |
| contextDefinitionName | TypestringDescriptionName of the custom context definition that’s used to create context data for categories. If null, the default context definition is used. |
| correlationId | TypestringDescriptionUnique identifier attached to requests and messages, allowing reference to a specific transaction or event chain. |
| contextMappingName | TypestringDescriptionName of the context mapping. By default, the default context mapping associated with the context definition is used. |
| enableQualificationProcedure | TypebooleanDescriptionIndicates whether qualification rules are applied to categories (true) or not (false). |
| filterInputRepresentation | TypeApex-definedDescriptionCollection of Apex runtime_industries_cpq.FilterInputRepresentation records that contain the filter criteria applied to the category records. |
| parentCategoryId | TypestringDescriptionID of the parent category record. |
| qualificationProcedureName | TypestringDescriptionName of the custom qualification procedure that’s executed to determine the category list. If null, the default qualification procedure is executed. |
| userContextInputRepresentation | TypeApex-definedDescriptionAn Apex UserContextInputRepresentation record that contains user details, such as account ID, geographical location, language preferences, and more. |

## Outputs

| Output | Details |
| --- | --- |
| apiStatusOutputRepresentation | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.ApiStatusRepresentation record that contains the status of the request, including the status code and message. |
| correlationId | TypestringDescriptionUnique identifier attached to requests and messages, allowing reference to a specific transaction or event chain. |
| resultCategoryList | TypeApex-definedDescriptionList of filtered category records. See CategoryOutputRepresentation. |
| resultListCount | TypeintegerDescriptionNumber of category records in the result. |

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
      "catalogId": "0ZSxx0000000002GAA",
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
Invocable.Action action = Invocable.Action.createStandardAction('getCategories');

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


action.setInvocationParameter('catalogId', '0ZSxx0000000002GAA');
action.setInvocationParameter('correlationId', '9cbb9650-48c5-11ed-96d1-0afcf185843b');
action.setInvocationParameter('userContextInputRepresentation', userContext);
action.setInvocationParameter('enableQualificationProcedure', True);
action.setInvocationParameter('qualificationProcedureName', 'CatQual02');
action.setInvocationParameter('contextDefinitionName', 'CategoryCD');
action.setInvocationParameter('contextMappingName', 'ProductDiscoveryMapping');
action.setInvocationParameter('additionalContextData', additionalContextDataOut);
//action.setInvocationParameter('categoryDepth', 4);
//action.setInvocationParameter('parentCategoryId', '0ZGxx0000000001GAA');

List<Invocable.Action.Result> results = action.invoke();
System.debug('Search Action + '+results);
```

```
[
  {
    "actionName": "getCategories",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "resultCategoryList": [
        {
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
          "childCategories": [],
          "catalogId": "0ZSxx0000000002GAA"
        },
        {
          "sortOrder": null,
          "qualificationContext": {
            "reason": null,
            "isQualified": true
          },
          "parentCategoryId": null,
          "name": "Desktops",
          "isNavigational": true,
          "id": "0ZGxx0000000002GAA",
          "hasSubCategories": false,
          "description": null,
          "childCategories": [],
          "catalogId": "0ZSxx0000000002GAA"
        },
        {
          "sortOrder": null,
          "qualificationContext": {
            "reason": null,
            "isQualified": true
          },
          "parentCategoryId": null,
          "name": "Accessories",
          "isNavigational": true,
          "id": "0ZGxx0000000003GAA",
          "hasSubCategories": false,
          "description": null,
          "childCategories": [],
          "catalogId": "0ZSxx0000000002GAA"
        }
      ],
      "resultListCount": 3,
      "apiStatusOutputRepresentation": {
        "statusMessage": null,
        "statusCode": "FetchedDetailsSuccessfully",
        "messages": []
      },
      "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
