---
title: "Personalization Experiment Deletion"
domain: chatterapi
topic: personalization-experiment-deletion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.238Z
estimatedTokens: 102
keywords: [Personalization, Experiment, Deletion]
---

# Personalization Experiment Deletion

> Delete a personalization experiment.

# Personalization Experiment Deletion

Delete a personalization experiment.

Resource

```

```

Available version

65.0

HTTP method

DELETE

Request parameters

| Parameter Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| IdOrName | String | The ID or API name of the experiment definition. | Required |

Response body

202

## Example

Request:

```

```

Response:

```

```

## Code Examples

```
/personalization/abn-experiments/${IdOrName}
```

```
DELETE /personalization/experiment/myDs_someExperimentApiName
```

```
Response Status Code: 202
```
