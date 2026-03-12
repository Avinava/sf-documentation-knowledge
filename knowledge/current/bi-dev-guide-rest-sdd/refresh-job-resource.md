---
title: "Refresh Job Resource"
domain: bi-dev-guide-rest-sdd
topic: refresh-job-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.485Z
estimatedTokens: 148
keywords: [Refresh, Job, Resource, Einstein, Discovery]
---

# Refresh Job Resource

> Returns an Einstein Discovery refresh job.

# Refresh Job Resource

Returns an Einstein Discovery refresh job.

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
| refresh​Job​Id | String | The ID of the refresh job to retrieve. | Required | 50.0 |

Response body for GET

[Smart Data Discovery Refresh Job](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_refresh_job.htm "An Einstein Discovery refresh job.")

## Code Examples

```
/smartdatadiscovery/refresh-jobs/<refreshJobId>
```

## Related Topics

- Smart Data Discovery Refresh Job (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_refresh_job.htm)
