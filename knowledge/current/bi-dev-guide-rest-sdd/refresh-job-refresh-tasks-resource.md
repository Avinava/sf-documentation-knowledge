---
title: "Refresh Job Refresh Tasks Resource"
domain: bi-dev-guide-rest-sdd
topic: refresh-job-refresh-tasks-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.489Z
estimatedTokens: 175
keywords: [Refresh, Job, Tasks, Resource, collection, Einstein, Discovery]
---

# Refresh Job Refresh Tasks Resource

> Returns a collection of refresh tasks for an Einstein Discovery refresh job.

# Refresh Job Refresh Tasks Resource

Returns a collection of refresh tasks for an Einstein Discovery refresh job.

Resource URL

```

```

Formats

JSON

Available Version

50.0

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| refresh​Job​Id | String | The ID of the refresh job to retrieve the refresh tasks for. | Required | 50.0 |

Response body for GET

[Smart Data Discovery Refresh Task Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_refresh_task_collection.htm "A collection of Einstein Discovery refresh task.")

## Code Examples

```
/smartdatadiscovery/refresh-jobs/<refreshJobId>/refresh-tasks
```

## Related Topics

- Smart Data Discovery Refresh Task Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_refresh_task_collection.htm)
