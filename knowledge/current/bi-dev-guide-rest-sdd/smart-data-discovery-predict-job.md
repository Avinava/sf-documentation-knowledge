---
title: "Smart Data Discovery Predict Job"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-predict-job
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:59.778Z
estimatedTokens: 538
keywords: [Smart, Discovery, Predict, Job, Einstein]
---

> An Einstein Discovery predict job.

# Smart Data Discovery Predict Job

An Einstein Discovery predict job.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| batch​Size | Integer | The number of records processed per batch. | Small, 49.0 | 49.0 |
| created​By | Smart​Data​Discovery​User | The user who created the predict job. | Small, 48.0 | 48.0 |
| created​Date | Date | The creation date of the predict job. | Small, 48.0 | 48.0 |
| failed​Records | Integer | The total number of records that failed to process. | Small, 49.0 | 49.0 |
| filters | Smart​Data​Discovery​Filter[] | A list of filters applied to determine whether a row was scored by the predict job. | Small, 48.0 | 48.0 |
| id | String | The ID of the predict job. | Small, 48.0 | 48.0 |
| label | String | The label of the predict job. | Small, 48.0 | 48.0 |
| last​Modified​By | Smart​Data​Discovery​User | The user who last modified the predict job. | Small, 48.0 | 48.0 |
| last​Modified​Date | Date | The last modified date of the predict job. | Small, 48.0 | 48.0 |
| message | String | The extended message for the status of the predict job, if available. | Small, 48.0 | 48.0 |
| name | String | The developer name of the predict job. | Small, 48.0 | 48.0 |
| prediction​Definition | Asset​Reference | The prediction definition information for the predict job. | Small, 48.0 | 48.0 |
| processed​Records | Integer | The total number of records that processed, including failures. | Small, 49.0 | 49.0 |
| status | Smart​Data​Discovery​Predict​Job​Status​Enum | The status of the predict job. Valid values are:CancelledCompletedFailedIn​ProgressNot​StartedPaused | Small, 48.0 | 48.0 |
| subscribed​Entity | String | The entity the predict job is subscribed to. | Small, 48.0 | 48.0 |
| total​Records | Integer | The total number of records that processed. | Small, 49.0 | 49.0 |
| url | String | The URL for the predict job. | Small, 48.0 | 48.0 |
| use​Terminal​State​Filter | Boolean | Indicates whether the job scored any record NOT matching the terminal state filter on the goal (true) or not (false). | Small, 49.0 | 49.0 |

## Related Topics

- Smart​Data​Discovery​User (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_user.htm)
- Smart​Data​Discovery​Filter (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_filter.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_asset_reference.htm)
