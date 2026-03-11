---
title: "Get Categories Action"
domain: revenue-cloud
topic: get-categories-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:49.961Z
keywords: [Get, Categories, Action, Special, Access, Rules, Supported, REST, HTTP, Methods, Inputs, Outputs, Example]
---

# Get Categories Action

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