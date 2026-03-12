---
title: "Procedure Plan Definition"
domain: revenue-cloud
topic: procedure-plan-definition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.115Z
estimatedTokens: 371
keywords: [Procedure, Plan, Definition, Output, representation, details, single, procedure, plan, definition.]
---

# Procedure Plan Definition

> Output representation of the details of a single procedure plan definition.

# Procedure Plan Definition

Output representation of the details of a single procedure plan definition.

JSON example

This example shows a sample response for the Procedure Plan Definition By ID (GET) request.

```

```

This example shows a sample response for the Procedure Plan Definition By ID (PATCH) request.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description for the procedure plan definition. | Small, 62.0 | 62.0 |
| developer​Name | String | Developer name of the procedure plan definition. | Small, 62.0 | 62.0 |
| error | Procedure Plan Generic Error[] | Details of the error encountered during the processing of the API request. | Small, 62.0 | 62.0 |
| name | String | Name of the procedure plan definition. | Small, 62.0 | 62.0 |
| primary​Object | String | Object that’s associated with the procedure plan definition. | Small, 62.0 | 62.0 |
| procedurePlan​Definition​Versions | Procedure Plan Definition Version[] | Details of the versions of a procedure plan definition. | Small, 62.0 | 62.0 |
| processType | String | Business processes that's specified that requires a procedure plan for each sObject and definition. | Small, 63.0 | 63.0 |
| recordId | String | ID of the procedure plan definition record. | Small, 62.0 | 62.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 62.0 | 62.0 |

## Code Examples

```
{
     "description": "Default Definition",
     "developerName": "Quote_Definition",
     "name": "Quote_Definition",
     "primaryObject": "Quote",
     "procedurePlanDefinitionVersions": [
     {
      "active": false,
      "contextDefinition": "11Oxx0000006PZ7EAM",
      "effectiveFrom": "2024-02-03T10:15:30.000Z",
      "effectiveTo": "2024-02-03T10:15:30.000Z",
      "readContextMapping": "MedicalHistoryMapping",
      "recordId": "1Cvxx0000004E1ACAU",
      "saveContextMapping": "MedicalHistoryMapping",
      "success": true,
      "processType": "Default"
    }
  ],
  "recordId": "1FNxx0000004GkWGAU",
  "processType": "Default",
  "success": true
}
```

```
{
  "procedurePlanDefinitionVersions":[],
  "recordId":"1FNDU00000000EX4AY",
  "processType": "Default",
  "success":true
  }
```

## Related Topics

- Procedure Plan Generic Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_generic_error.htm)
- Procedure Plan Definition Version (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_definition_version_output.htm)
