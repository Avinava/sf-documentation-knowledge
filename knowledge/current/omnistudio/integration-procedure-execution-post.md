---
title: "Integration Procedure Execution (POST)"
domain: omnistudio
topic: integration-procedure-execution-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.207Z
estimatedTokens: 286
keywords: [Integration, Procedure, Execution, POST, Execute]
---

# Integration Procedure Execution (POST)

> Execute an integration procedure by using the name or ID of the integration
    procedure.

# Integration Procedure Execution (POST)

Execute an integration procedure by using the name or ID of the integration procedure.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST

Path parameter for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | Name or ID of the integration procedure. | Required | 64.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| input | Integration Procedure Service Run Input | Details to execute the integration procedure. | Required | 64.0 |
| options | Integration Procedure Service Run Options | Optional parameters to refine the execution of the integration procedure. | Optional | 64.0 |

Response body for POST

[Integration Procedure Execution Details](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_integration_procedure_service_run_output.htm "Output representation of the execution details of the integration procedure.")

## Code Examples

```apex
/connect/omni-global/integration-procedure/execute/id
```

```apex
https://yourInstance.salesforce.com/services/data/v66.0/connect/omni-global/integration-procedure/execute/0jNxx000000005rFCC
```

```
{
  "input": {
    "inputs": [
      "{"Name": "Get Account Details"}"
    ]
  },
  "options": {
    "ignoreCache": false
  }
}
```

## Related Topics

- Integration Procedure Service Run Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_integration_procedure_service_run_input_list.htm)
- Integration Procedure Service Run Options (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_integration_procedure_service_run_options.htm)
- Integration Procedure
              Execution Details (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_integration_procedure_service_run_output.htm)
