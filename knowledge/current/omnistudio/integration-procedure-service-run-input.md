---
title: "Integration Procedure Service Run Input"
domain: omnistudio
topic: integration-procedure-service-run-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:40:23.470Z
estimatedTokens: 99
keywords: [Integration, Procedure, Service, Run, execute, Apex]
---

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
