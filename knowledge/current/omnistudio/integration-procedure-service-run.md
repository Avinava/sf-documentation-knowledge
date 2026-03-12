---
title: "Integration Procedure Service Run"
domain: omnistudio
topic: integration-procedure-service-run
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.479Z
estimatedTokens: 133
keywords: [Integration, Procedure, Service, Run, Input, representation, execute, Apex]
---

# Integration Procedure Service Run

> Input representation of the details to execute an integration procedure from
    Apex.

# Integration Procedure Service Run

Input representation of the details to execute an integration procedure from Apex.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| input | Integration Procedure Service Run Input | Details to execute the integration procedure. | Required | 64.0 |
| options | Integration Procedure Service Run Options | Optional parameters to refine the execution of the integration procedure. | Optional | 64.0 |

## Code Examples

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
