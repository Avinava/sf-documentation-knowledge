---
title: "Get Data Using Context Definition Action"
domain: health-cloud-object-reference
topic: get-data-using-context-definition-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.089Z
estimatedTokens: 493
keywords: [Data, Context, Definition, Action, service, associated, mapping, REST, HTTP, Inputs, Outputs]
---

# Get Data Using Context Definition Action

> Get data from a context service using a context definition and the
            associated context mapping.

# Get Data Using Context Definition Action

Get data from a context service using a context definition and the associated context mapping.

This action is available in API version 64.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/custom/contextDataProvider/DefaultContextDataProvider

Formats

JSON, XML

HTTP Methods

GET

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| contextDefinitionName | TypeStringDescriptionRequiredThe API name of the context definition to get the data. |
| contextMappingName | TypeStringDescriptionThe name of the context mapping that’s used to hydrate the data in the context definition. In the absence of a name, the default mapping name is used. |
| contextNodeApiName | TypeStringDescriptionThe API name of the root context node if it isn't the same as the context object API name. |
| contextNodesDataLimit | TypeIntegerDescriptionThe maximum number of records to retrieve. |
| contextNodesSortFieldName | TypeStringDescriptionThe field name that’s used to sort the data. |
| contextNodesSortIsAscending | TypeBooleanDescriptionThe checkbox to sort the context nodes in ‌ascending order. |
| contextRecordId | TypeStringDescriptionRequiredThe ID of the context record associated with the context object name that’s used to hydrate the data. |
| contextObjectName | TypeStringDescriptionRequiredThe API name of the standard object or a Data Cloud object that’s associated with the root context node in the context mapping. |
| timePeriodInWeeks | TypeIntegerDescriptionThe lookback period in weeks from the current date for fetching the data. |

## Outputs

| Output | Details |
| --- | --- |
| contextData | TypeStringDescriptionThe data retrieved from a context service. |

## Example

GET

This sample request is for the Get Data using Context Definition action.

```

```

This sample response is for the Get Data using Context Definition action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "contextDefinitionName": "AccountOpportunity__stdctx",
      "contextMappingName": "AccountOpportunityMappings",
      "contextId": "02ixx0000005yLxxAI",
      "contextObjectName": "Account"
    }
  ]
}
```

```
{
  "Account": [
    {
      "AccountName": "Acme",
      "Opportunity": [
        {
          "CreatedDate": "2025-01-20T00:00:00.000+0000",
          "ParentReference": "001xx00000pfHIsxxM",
          "OpportunityName": "Acme - 600 Widgets",
          "OpportunityStage": "Needs Analysis",
          "OpportunityCloseDate": "2023-01-03T00:00:00.000+0000"
        },
        {
          "CreatedDate": "2025-01-20T00:00:00.000+0000",
          "ParentReference": "001xx00000pfHIsxxM",
          "OpportunityName": "Acme - 1,200 Widgets",
          "OpportunityStage": "Value Proposition",
          "OpportunityCloseDate": "2022-11-07T00:00:00.000+0000"
        },
        {
          "CreatedDate": "2025-01-20T00:00:00.000+0000",
          "ParentReference": "001xx00000pfHIsxxM",
          "OpportunityName": "Acme - 200 Widgets",
          "OpportunityStage": "Prospecting",
          "OpportunityCloseDate": "2023-03-08T00:00:00.000+0000"
        }
      ]
    }
  ]
}
```
