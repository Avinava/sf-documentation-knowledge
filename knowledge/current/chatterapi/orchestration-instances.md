---
title: "Orchestration Instances"
domain: chatterapi
topic: orchestration-instances
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.601Z
estimatedTokens: 206
keywords: [Orchestration, Instances]
---

# Orchestration Instances

> Get orchestration instances.

# Orchestration Instances

Get orchestration instances.

Resource

```

```

Available version

54.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| related​OrchestrationId | String | The ID of an orchestration configured as context for orchestration interactive steps. | Required if relatedRecordId isn’t specified | 66.0 |
| relatedRecordId | String | The ID of a record configured as a context record for orchestration interactive steps. | Required if related​OrchestrationId isn’t specified | 54.0 |

Response body for GET

[Orchestration Instance Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flow_orchestration_instance_collection.htm "Collection of orchestration instances.")

## Code Examples

```
/connect/interaction/orchestration/instances
```

## Related Topics

- Orchestration Instance Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flow_orchestration_instance_collection.htm)
