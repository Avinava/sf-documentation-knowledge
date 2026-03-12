---
title: "Smart Data Discovery Refresh Task"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-refresh-task
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.007Z
estimatedTokens: 378
keywords: [Smart, Data, Discovery, Refresh, Task, Einstein]
---

# Smart Data Discovery Refresh Task

> An Einstein Discovery refresh task.

# Smart Data Discovery Refresh Task

An Einstein Discovery refresh task.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| created​By | Smart​Data​Discovery​User | The user who created the refresh task. | Small, 50.0 | 50.0 |
| created​Date | Date | The creation date of the refresh task. | Small, 50.0 | 50.0 |
| end​Time | Date | The end time of the refresh task. | Small, 50.0 | 50.0 |
| id | String | The ID of the refresh task. | Small, 50.0 | 50.0 |
| message | String | The extended message for the status of the refresh task, if available. | Small, 50.0 | 50.0 |
| refresh​Target | Asset​Reference | The refresh target for the refresh task. | Small, 50.0 | 50.0 |
| refreshed​AI​Model | Asset​Reference | The refreshed AI model. | Small, 50.0 | 50.0 |
| source | Smart​Data​Discovery​Refresh​Task​Source | The input source used for the refresh task. | Small, 50.0 | 50.0 |
| start​Time | Date | The start time of the refresh job. | Small, 50.0 | 50.0 |
| status | Smart​Data​Discovery​Refresh​Task​Status​Enum | The status of the refresh task. Valid values are:Analysis​Not​FoundCancelledDataset​Join​Fields​MissingDataset​Not​FoundDataset​Not​UpdatedFailureLimits​ReachedModel​Schema​ChangedNot​StartedOutcome​Values​ChangedPoisson​Distribution​DisabledRunningStory​Creation​FailureSuccessUser​Not​FoundWarning​Threshold​Reached | Small, 50.0 | 50.0 |
| url | String | The URL for the predict job. | Small, 48.0 | 48.0 |

## Related Topics

- Smart​Data​Discovery​User (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_user.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_asset_reference.htm)
- Smart​Data​Discovery​Refresh​Task​Source (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_refresh_task_source.htm)
