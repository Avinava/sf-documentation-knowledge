---
title: "Compliance Procedure Business Context Input"
domain: omnistudio
topic: compliance-procedure-business-context-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.137Z
estimatedTokens: 117
keywords: [Compliance, Procedure, Business, Context, Input, representation]
---

# Compliance Procedure Business Context Input

> Input representation of a business context with the parameter name and value.

# Compliance Procedure Business Context Input

Input representation of a business context with the parameter name and value.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| paramName | String | Name of the business context parameter. | Required | 65.0 |
| paramValue | String | Value for the business context parameter, such as record ID or context ID. | Required | 65.0 |

## Code Examples

```
{
  "paramName": "accountId",
  "paramValue": "00100000000AA1"
}
```
