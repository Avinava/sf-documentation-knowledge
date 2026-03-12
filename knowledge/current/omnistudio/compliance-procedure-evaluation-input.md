---
title: "Compliance Procedure Evaluation Input"
domain: omnistudio
topic: compliance-procedure-evaluation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.143Z
estimatedTokens: 185
keywords: [Compliance, Procedure, Evaluation, Input, representation]
---

# Compliance Procedure Evaluation Input

> Input representation details of a compliance evaluation request.

# Compliance Procedure Evaluation Input

Input representation details of a compliance evaluation request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessOperations​Process | String | API name of the business operations process for the evaluation. | Optional | 65.0 |
| evaluations | Compliance Procedure Evaluation Info Input[] | Business context to be evaluated.The synchronous evaluation API supports only one business context per validation, whereas the asynchronous evaluation API supports a list of business contexts per validation. Each business context can contain multiple sets of paramName and paramValue. | Required | 65.0 |

## Code Examples

```
{
  "businessOperationsProcess": "businessOperationsProcess1234",
  "evaluations": [
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
  ]
}
```

## Related Topics

- Compliance Procedure Evaluation
                                                Info Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_compliance_procedure_evaluation_info_input.htm)
