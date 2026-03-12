---
title: "Synchronization"
domain: health-cloud-object-reference
topic: synchronization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.349Z
estimatedTokens: 331
keywords: [Synchronization, Synchronize, calculated, score, Data, Cloud, category]
---

# Synchronization

> Synchronize the calculated score from the Data Cloud for a given score
      category.

# Synchronization

Synchronize the calculated score from the Data Cloud for a given score category. The fetched scores are stored in the HealthScore object.

The sync API first validates that the score category is mapped to a valid Data Cloud Calculated Insight. If this step is successful, the request is then passed to the Messaging queue where the scores are fetched from Data Cloud. After the messaging queue fetches the scores, they are then submitted to a bulk job that inserts the new scores in HealthScore.

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

POST

Request body for POST

Root XML tag

<HpiScoreSyncInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| categoryName | String | The name of the score category for which the score synchronization is triggered. | Required | 55.0 |
| debugMode | Boolean | For internal use only. | Optional | 55.0 |
| timestamp | String | For internal use only. | Optional | 55.0 |

Response body for POST

[HPI Score Sync Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_hpi_score_sync_output.htm "Output representation of the score synchronization request.")

## Code Examples

```
/connect/health/scores/synchronization
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect​/health/scores/synchronization
```

```
{
   "categoryName" : "HPI"
}
```

## Related Topics

- HPI Score Sync Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_hpi_score_sync_output.htm)
