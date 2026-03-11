---
title: "Compliance Procedure Async Evaluation (POST)"
domain: omnistudio
topic: compliance-procedure-async-evaluation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.632Z
keywords: [Compliance, Procedure, Async, Evaluation, POST]
---

# Compliance Procedure Async Evaluation (POST)

# Compliance Procedure Async Evaluation (POST)

Asynchronously evaluate a compliance procedure with the business context. The asynchronous results are stored for a maximum of 3 months.

This API has these operational limits and hourly processing volumes:

-   You can send a maximum of 100 evaluations in a single API call. If you have thousands of evaluations to process, you must split them into smaller batches.
-   Your organization can process a maximum of 83,300 compliance evaluations per hour. This applies to all users in your organization combined, not just your specific user account.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Path parameter for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| procedureName | String | API name of the validation procedure to evaluate asynchronously. | Required | 65.0 |

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

[Compliance Procedure Async Evaluation](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_compliance_procedure_async_evaluation.htm "Output representation for the async evaluation results of the compliance procedure.")