---
title: "Compliance Procedure Evaluation Info Input"
domain: omnistudio
topic: compliance-procedure-evaluation-info-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:48.129Z
estimatedTokens: 203
keywords: [Compliance, Procedure, Evaluation, Info, Input, representation, evaluating, compliance, procedure.]
---

# Compliance Procedure Evaluation Info Input

> Input representation for evaluating a compliance procedure.

# Compliance Procedure Evaluation Info Input

Input representation for evaluating a compliance procedure.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessContext | Compliance Procedure Business Context Input[] | List of parameter names and parameter values that match the validation procedure parameters.You can specify up to 10 business context parameters in the businessContext array. | Required | 65.0 |
| inContextOf | String | User-provided key to store logs.Maximum length is 20 characters. | Required | 64.0 |
| transactionKey | String | User-provided transaction key for logging and tracking procedure evaluations originating from external systems.Maximum length is 45 characters. | Optional | 64.0 |

## Code Examples

```
{
  "businessContext": [
    {
      "paramName": "accountId",
      "paramValue": "00100000000AA1"
    },
    {
      "paramName": "clientKycContext",
      "paramValue": "0000000n04dn09g002517551181966037068d70d64004d6d9f83d6629a3135ab"
    }
  ],
  "transactionKey": "uuid-1234-5678-9012-eu",
  "inContextOf": "abc"
}
```

## Related Topics

- Compliance Procedure Business Context
                      Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_compliance_procedure_business_context_input.htm)
