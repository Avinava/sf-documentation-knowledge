---
title: "Procedure Plan Definitions (GET, POST)"
domain: revenue-cloud
topic: procedure-plan-definitions-get-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.696Z
estimatedTokens: 686
keywords: [Procedure, Plan, Definitions, POST, records, Additionally, record, definition]
---

# Procedure Plan Definitions (GET, POST)

> Get the records of procedure plan definitions. Additionally, create a
      record of a procedure plan definition.

# Procedure Plan Definitions (GET, POST)

Get the records of procedure plan definitions. Additionally, create a record of a procedure plan definition.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isTemplate | Boolean | Indicates whether to return a list of file-based definitions (true) or not (false). This API request returns a list of database-based definitions, by default. | Optional | 62.0 |

Response body for GET

[Procedure Plan Definitions](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_definitions_output.htm "Output representation of the details of procedure plan definitions.")

Request body for POST

JSON example

This example shows a sample request to create a procedure plan definition record by using the Procedure Plan Definitions (POST) API.

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

Response body for POST

[Procedure Plan Generic](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_generic_output.htm "Output representation of the details of the created procedure plan definition record.")

## Code Examples

```
/connect/procedure-plan-definitions
```

```
https://yourInstance.salesforce.com​/services/data​/v66.0/connect/​procedure-plan-definitions?​isTemplate=true
```

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

## Related Topics

- Procedure Plan
              Definitions (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_definitions_output.htm)
- Procedure Plan Definition Version Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_procedure_plan_definition_version_input.htm)
- Procedure Plan Definition By ID API
                      (PATCH) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_get_procedure_plan_definition_by_ID.htm)
- Procedure Plan
              Generic (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_generic_output.htm)
