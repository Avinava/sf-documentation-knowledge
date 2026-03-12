---
title: "Procedure Plan Definition Input"
domain: revenue-cloud
topic: procedure-plan-definition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.314Z
estimatedTokens: 507
keywords: [Procedure, Plan, Definition, Input, representation, details, procedure, plan, definition., Note]
---

# Procedure Plan Definition Input

> Input representation of the details of a procedure plan definition.

# Procedure Plan Definition Input

Input representation of the details of a procedure plan definition.

JSON example

This example shows a sample request to create a procedure plan definition record by using the Procedure Plan Definitions (POST) API.

```

```

This example shows a sample request to update a procedure plan definition by using the Procedure Plan Definition By ID (PATCH) API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

The properties that aren’t specified in the input are deleted when updating the record.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the procedure plan definition. | Optional | 62.0 |
| developer​Name | String | Developer name of the procedure plan definition. | Required if you’re invoking the Procedure Plan Definitions API (POST). | 62.0 |
| name | String | Name of the procedure plan definition. | Optional | 62.0 |
| primary​Object | String | Source object that’s used to create a procedure with rule-based criteria. This property value must be a valid object name and must be unique in the ProcedurePlanDefinition object. | Required if you’re invoking the Procedure Plan Definitions API (POST) and if you’re creating a procedure with rule-based criteria. | 62.0 |
| procedurePlan​Definition​Versions | Procedure Plan Definition Version Input[] | List of versions of a procedure plan definition. | Required | 62.0 |
| processType | String | Specifies the business processes that need a procedure plan for each sObject and definition. Valid values are:BillingDRODeepCloneProductDiscoveryRevenue CloudThese values can be used based on the available license. If unspecified, the value is set to Default. | Required | 63.0 |
| recordId | String | ID of the procedure plan definition record. | Required if you’re invoking the Procedure Plan Definition By ID API (PATCH). | 62.0 |

## Code Examples

```
{
  "description": "Definition for Quote",
  "developerName": "Quote_Definition_Sample",
  "name": "Quote_Definition_Sample",
  "processType": "Default",
  "primaryObject": "BusinessHours",
  "procedurePlanDefinitionVersions": [
    {
      "active": false,
      "contextDefinition": "SalesTransactionContext__stdctx",
      "readContextMapping": "QuoteEntitiesMapping",
      "saveContextMapping": "QuoteEntitiesMapping",
      "effectiveFrom": "2024-07-15T10:15:30.000Z",
      "developerName": "Quote_Definition_V1",
      "rank": 1
    }
  ]
}
```

```
{
  "description": "Default definition patch update",
  "developerName": "Quote_Definition",
  "name": "Quote_Definition",
  "primaryObject": "Quote",
  "recordId": "1FNxx0000004EsOGAU"
}
```

## Related Topics

- Procedure Plan Definitions API (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_get_procedure_plan_definition_records.htm)
- Procedure Plan Definition Version Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_procedure_plan_definition_version_input.htm)
- Procedure Plan Definition By ID API
                      (PATCH) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_get_procedure_plan_definition_by_ID.htm)
