---
title: "Explainability Logs (GET)"
domain: omnistudio
topic: explainability-logs-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.447Z
estimatedTokens: 496
keywords: [Explainability, Logs, GET, Retrieves, explainability, logs, expression, step, elements, which, explanation, messages, configured.]
---

# Explainability Logs (GET)

> Retrieves explainability logs for expression step elements for which
      explanation messages are configured.

# Explainability Logs (GET)

Retrieves explainability logs for expression step elements for which explanation messages are configured.

Resource

```

```

Resource Example

```

```

Available version

56.0

Requires Chatter

No

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action​Context​Code | String | The record ID within the context of the associated application's action that’s used to retrieve action logs. | Optional | 56.0 |
| application​SubType | String | The subtype of the associated application for which the explainability log is generated. This matches one of the valid values in the ExplainabilityActionDef . ApplicationSubtype field. | Optional | 56.0 |
| application​Type | String | The name of the application for which the explainability service is run. This matches one of the valid values in the ExplainabilityActionDef .ApplicationType field. | Optional | 56.0 |
| createdAfter | String | A valid date time after which the explainability log records are returned. | Optional | 56.0 |
| createdBefore | String | A valid date time before which the explainability log records are returned. | Optional | 56.0 |
| pageSize | Integer | The number of explainability log records to return. The value can range from 200 to 500. | Optional | 56.0 |
| processType | String | The process type of the associated application for which the explainability action log is generated. This matches one of the valid values in the ExplainabilityActionDef ProcessType field. | Optional | 56.0 |
| queryMore | String | A string returned from the previous request, which you must pass to the next request to get the next page. | Optional | 56.0 |

Response body for GET

[Explainability Logs](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_explainability_logs.htm "Output representation of the list of explainability action logs.")

## Code Examples

```
/connect/business-rules/explainability/logs
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect
/business-rules/explainability/logs?actionContextCode=001x0000005DmI3AAK
```

## Related Topics

- Explainability Logs (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_explainability_logs.htm)
