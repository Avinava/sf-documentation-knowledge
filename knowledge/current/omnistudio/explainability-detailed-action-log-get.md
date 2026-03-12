---
title: "Explainability Detailed Action Log (GET)"
domain: omnistudio
topic: explainability-detailed-action-log-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.181Z
estimatedTokens: 367
keywords: [Explainability, Detailed, Action, Log, GET, Retrieve, detailed, action, logs, combine, log, segments, generate, consolidated, explainability, log.]
---

# Explainability Detailed Action Log (GET)

> Retrieve detailed action logs and combine log segments to generate a consolidated
    explainability action log.

# Explainability Detailed Action Log (GET)

Retrieve detailed action logs and combine log segments to generate a consolidated explainability action log.

Resource

```

```

Resource example

```

```

Available version

61.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionContextCode | String | Record ID within the context of the associated application's action that can be used to retrieve the action log | Required | 61.0 |
| actionLogDateTime | String | Date and time when the explainability action log records are to be returned Date format - yyyy-MM-ddTHH:mm:ss.SSSZ. | Required | 61.0 |
| applicationSubType | String | Subtype of the associated application for which the explainability log is generated. | Required | 61.0 |
| applicationType | String | Name of the application for which the explainability service is run. | Required | 61.0 |
| processType | String | Type of business process associated with the explainability action. | Required | 61.0 |
| uniqueIdentifier | String | A unique ID that's associated with a specific explainability action log. | Required | 61.0 |

Response body for GET

[Explainability Detailed Action Log Detail](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_explainability_detailed_action_log_detail.htm "Output representation of explainability action log in detail.")

## Code Examples

```
/connect/decision-explainer/detailed-action-log
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/decision-explainer/detailed-action-log?actionContextCode=001xx000003GYiCAAW&applicationType=0&applicationSubType=BREDES&processType=BREDES&actionLogDateTime=2024-03-06T05:09:32.000Z&uniqueIdentifier=f89eff41-94ed-4fe7-9b72-f6df2bb5f4aa
```

## Related Topics

- Explainability Detailed Action Log Detail (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_explainability_detailed_action_log_detail.htm)
