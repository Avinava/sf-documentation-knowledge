---
title: "Create Integration Plan"
domain: financial-services-cloud-object-reference
topic: create-integration-plan
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.728Z
estimatedTokens: 443
keywords: [Integration, Plan, Creates, record, Expression, decisions, Dynamic, Fulfillment, Orchestration, records, REST, HTTP, Inputs, Outputs]
---

# Create Integration Plan

> Creates an integration plan record based on an object by using Expression Sets to make
  decisions and Dynamic Fulfillment Orchestration to create related object records.

# Create Integration Plan

Creates an integration plan record based on an object by using Expression Sets to make decisions and Dynamic Fulfillment Orchestration to create related object records.

This action is available in API version 60.0 and later for users with a Financial Services Cloud license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/createIntegrationPlan

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| contextDefinitionName | TypestringDescriptionRequiredName of the Context Definition record to build the context data for. Available in API version 61.0 and later. |
| contextMappingName | TypestringDescriptionRequiredName of the Context Mapping record used to build the context. Available in API version 61.0 and later. |
| isTaggedData | TypebooleanDescriptionIndicates if the key in the data is a tagged key (true) or not (false). The default value is false. Available in API version 61.0 and later. |
| contextData | TypestringDescriptionJSON data of the context data record. Available in API version 61.0 and later. |
| expressionSetName | TypestringDescriptionAPI name of the expression set that identifies eligible integrations and their dependencies. |
| anchorRecordId | TypeIDDescriptionID of the record that supplies any expression set input parameters missing from contextId. |

## Outputs

| Input | Details |
| --- | --- |
| integrationPlanId | TypeIDDescriptionID of the integration plan, which includes each callout step and step dependency. |

## Example

This example shows a sample input for the Create Integration Plan action.

```

```

This example shows a sample output for the Create Integration Plan action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "contextDefinitionName": "Home Loan Application Context",
      "contextMappingName": "Home Loan Application Context Mapping",
      "isTaggedData": false,
      "contextData": {"{"businessObjectType": "Application Form","id":"13XSM0000000TjZxxU"}"},
      "expressionSetName": "HomeLoanIntegrationsES",
      "anchorRecordId": "13XSM0000000TjZxxU"
    }
  ]
}
```

```
{
  "actionName": "createIntegrationPlan",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "integrationPlanId": "13VSB000000IsYD2A0"
  },
  "version": 1
}
```
