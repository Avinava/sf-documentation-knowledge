---
title: "Procedure Plan Definition By ID (GET, PATCH, DELETE)"
domain: revenue-cloud
topic: procedure-plan-definition-by-id-get-patch-delete
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.899Z
estimatedTokens: 713
keywords: [Procedure, Plan, Definition, GET, PATCH, DELETE, Get, update, delete, procedure, plan, definition, record, ID., Note]
---

# Procedure Plan Definition By ID (GET, PATCH, DELETE)

> Get, update, or delete a procedure plan definition record by using the
      record ID.

# Procedure Plan Definition By ID (GET, PATCH, DELETE)

Get, update, or delete a procedure plan definition record by using the record ID.

Resource

```

```

The procedurePlanDefinitionId property value is the ID or name of the procedure plan definition record to perform the request for.

Resource example

```

```

Available version

62.0

HTTP methods

DELETE, GET, PATCH

You can delete a procedure plan definition only if it doesn’t include any active procedure plan version.

Response body for GET

[Procedure Plan Definition](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_definition_output.htm "Output representation of the details of a single procedure plan definition.")

Request body for PATCH

JSON example

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

Response body for PATCH

[Procedure Plan Definition](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_definition_output.htm "Output representation of the details of a single procedure plan definition.")

## Code Examples

```
/connect/procedure-plan-definitions/procedurePlanDefinitionId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/procedure-plan-definitions/1FNxx0000004EsOGAU
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

- Procedure Plan
              Definition (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_definition_output.htm)
- Procedure Plan Definitions API (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_get_procedure_plan_definition_records.htm)
- Procedure Plan Definition Version Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_procedure_plan_definition_version_input.htm)
