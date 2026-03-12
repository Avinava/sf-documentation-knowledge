---
title: "Integration Procedure Service Run Input"
domain: psc-api
topic: integration-procedure-service-run-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.162Z
estimatedTokens: 99
keywords: [Integration, Procedure, Service, Run, Input, representation, custom, data, execute, Apex]
---

# Integration Procedure Service Run Input

> Input representation of the list of custom data to execute an integration procedure
    from Apex.

# Integration Procedure Service Run Input

Input representation of the list of custom data to execute an integration procedure from Apex.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| inputs | String[] | List of configuration details for executing the integration procedures. | Required | 64.0 |

## Code Examples

```
{
  "inputs": [
    "{"Name": "Get Account Details"}"
  ]
}
```
