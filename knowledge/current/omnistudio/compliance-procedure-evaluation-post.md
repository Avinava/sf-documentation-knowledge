---
title: "Compliance Procedure Evaluation (POST)"
domain: omnistudio
topic: compliance-procedure-evaluation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.859Z
estimatedTokens: 279
keywords: [Compliance, Procedure, Evaluation, POST, Evaluate, business, context]
---

# Compliance Procedure Evaluation (POST)

> Evaluate a compliance procedure with a business context.

# Compliance Procedure Evaluation (POST)

Evaluate a compliance procedure with a business context.

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

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessOperations​Process | String | API name of the business operations process for the evaluation. | Optional | 65.0 |
| evaluations | Compliance Procedure Evaluation Info Input[] | Business context to be evaluated.The synchronous evaluation API supports only one business context per validation, whereas the asynchronous evaluation API supports a list of business contexts per validation. Each business context can contain multiple sets of paramName and paramValue. | Required | 65.0 |

Response body for POST

[Compliance Procedure Evaluation Response](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_compliance_procedure_evaluation_response_output.htm "Output representation of compliance procedure evaluation results.")

## Code Examples

```
/connect/compliance/procedure/procedureName/evaluate
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/compliance/procedure/ValidationProcedure/evaluate
```

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
- Compliance Procedure
              Evaluation Response (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_compliance_procedure_evaluation_response_output.htm)
