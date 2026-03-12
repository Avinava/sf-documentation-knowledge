---
title: "Synchronization Status"
domain: health-cloud-object-reference
topic: synchronization-status
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.301Z
estimatedTokens: 182
keywords: [Synchronization, Status, Fetch, score, category]
---

# Synchronization Status

> Fetch the synchronization status for a given score
    category.

# Synchronization Status

Fetch the synchronization status for a given score category.

Resource

```

```

Resource example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

GET

Request parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| scoreCategory | String | The name of the score category for which the score synchronization status must be fetched. | Required | 55.0 |

Response body for GET

[HPI Score Sync State Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_hpi_score_sync_state_output.htm "Output representation of the score synchronization status request.")

## Code Examples

```
/connect/health/scores/synchronization/status/${scoreCategory}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect​/health/scores/synchronization/status/HPI
```

## Related Topics

- HPI Score Sync State Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_hpi_score_sync_state_output.htm)
