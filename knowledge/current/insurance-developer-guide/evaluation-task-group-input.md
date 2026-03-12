---
title: "Evaluation Task Group Input"
domain: insurance-developer-guide
topic: evaluation-task-group-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.720Z
estimatedTokens: 106
keywords: [Evaluation, Task, Group, Input, representation]
---

# Evaluation Task Group Input

> Input representation details of the evaluation task group.

# Evaluation Task Group Input

Input representation details of the evaluation task group.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | Name of the evaluation task group. | Required | 63.0 |
| tasks | Evaluation Task Input[] | List of tasks to be executed for this evaluation task group. | Required | 63.0 |

## Code Examples

```
// EvaluationSuccessTaskGroup and EvaluationFailureTaskGroup are opitional
       // Fulfillment plan design time entities will be created.
       "evaluationSuccessTaskGroup": // Create FulfillmentStepDefinitionGroup records
       {
       "name": "QuoteApproveSuccessTaskGroup",
       "tasks": [ // create FulfillmentStepDefinition records
       {
       "name": "KYC check flow", // FulfillmentStepDefinition API Names
       "type": "AutoTask",// FulfillmentStepDefinition type
       "flowApiName": "KYC check flow", // Flow API Names
       }
       ]
       },
       "evaluationFailureTaskGroup": //Similar to EvaluationSuccessTaskGroup
       {
       "name": "QuoteApproveFailureTaskGroup",
       "tasks": [
       {
       "name": "Vehicle ineligible",
       "type": "AutoTask",
       "flowApiName": "Mail Notification - Vehicle ineligible",
       }
       ]
       }
```

## Related Topics

- Evaluation Task Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_evaluation_task_input.htm)
