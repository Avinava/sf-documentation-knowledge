---
title: "Compliance Procedure Evaluation (POST)"
domain: omnistudio
topic: compliance-procedure-evaluation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.635Z
keywords: [Compliance, Procedure, Evaluation, POST]
---

# Compliance Procedure Evaluation (POST)

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