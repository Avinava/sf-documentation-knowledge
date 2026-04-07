---
title: "Integration Procedure Execution (POST)"
domain: psc-api
topic: integration-procedure-execution-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:05:08.823Z
estimatedTokens: 393
keywords: [Integration, Procedure, Execution, POST, Execute]
---

# Integration Procedure Execution (POST)

> Execute an integration procedure by using the name or ID of the integration
    procedure.

# Integration Procedure Execution (POST)

Execute an integration procedure by using the name or ID of the integration procedure.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

When using the Integration Procedure (IP) Connect API, HTTP callouts cannot be executed in the same transaction. This is because these APIs perform an implicit DML operation through the underlying Connect API framework. If a callout is required, it must be executed in a separate transaction, for example by using an asynchronous mechanism such as @future.

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

[Integration Procedure Execution Details](atlas.en-us.psc_api.meta/psc_api/connect_responses_integration_procedure_service_run_output.htm "Output representation of the execution details of the integration procedure.")

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

- Integration Procedure Service Run Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_integration_procedure_service_run_input_list.htm)
- Integration Procedure Service Run Options (atlas.en-us.psc_api.meta/psc_api/connect_requests_integration_procedure_service_run_options.htm)
- Integration Procedure
              Execution Details (atlas.en-us.psc_api.meta/psc_api/connect_responses_integration_procedure_service_run_output.htm)
