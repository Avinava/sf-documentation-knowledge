---
title: "Procedure Plan Generic"
domain: revenue-cloud
topic: procedure-plan-generic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.147Z
estimatedTokens: 191
keywords: [Procedure, Plan, Generic, Output, representation, details, created, procedure, plan, definition, record.]
---

# Procedure Plan Generic

> Output representation of the details of the created procedure plan definition
    record.

# Procedure Plan Generic

Output representation of the details of the created procedure plan definition record.

JSON example

This example shows a sample response of the details of a procedure plan definition record, created by using the Procedure Plan Definitions (POST) API.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Procedure Plan Generic Error[] | Details of the error encountered during the processing of the API request. | Small, 62.0 | 62.0 |
| isSuccess | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 62.0 | 62.0 |
| recordId | String | ID of the created procedure plan definition record. | Small, 62.0 | 62.0 |

## Code Examples

```
{
   "isSuccess":true,
   "recordId":"1FNDU00000000EX4AY"
  }
```

## Related Topics

- Procedure Plan Generic Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_generic_error.htm)
