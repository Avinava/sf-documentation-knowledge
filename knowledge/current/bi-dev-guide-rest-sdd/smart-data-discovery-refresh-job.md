---
title: "Smart Data Discovery Refresh Job"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-refresh-job
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.998Z
estimatedTokens: 350
keywords: [Smart, Data, Discovery, Refresh, Job, Einstein]
---

# Smart Data Discovery Refresh Job

> An Einstein Discovery refresh job.

# Smart Data Discovery Refresh Job

An Einstein Discovery refresh job.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| created​By | Smart​Data​Discovery​User | The user who created the refresh job. | Small, 50.0 | 50.0 |
| created​Date | Date | The creation date of the refresh job. | Small, 50.0 | 50.0 |
| end​Time | Date | The end time of the refresh job. | Small, 50.0 | 50.0 |
| id | String | The ID of the refresh job. | Small, 50.0 | 50.0 |
| message | String | The extended message for the status of the refresh job, if available. | Small, 50.0 | 50.0 |
| refresh​Target | Asset​Reference | The refresh target for the refresh job. | Small, 50.0 | 50.0 |
| refresh​Tasks​Url | String | The URL to the refresh tasks collection for the refresh job. | Small, 50.0 | 50.0 |
| start​Time | Date | The start time of the refresh job. | Small, 50.0 | 50.0 |
| status | Smart​Data​Discovery​Refresh​Job​Status​Enum | The status of the refresh job. Valid values are:CancelledCompleted​With​WarningsFailureNo​Runnable​TaskNot​StartedRunningScoring​Job​FailedSuccessUser​Not​Found | Small, 50.0 | 50.0 |
| type | Smart​Data​Discovery​Refresh​Job​Type​Enum | The type of the refresh job. Valid values are:ScheduledUser​Triggered | Small, 50.0 | 50.0 |
| url | String | The URL for the predict job. | Small, 48.0 | 48.0 |

## Related Topics

- Smart​Data​Discovery​User (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_user.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_asset_reference.htm)
