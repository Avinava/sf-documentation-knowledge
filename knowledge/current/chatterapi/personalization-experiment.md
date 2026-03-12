---
title: "Personalization Experiment"
domain: chatterapi
topic: personalization-experiment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.283Z
estimatedTokens: 467
keywords: [Personalization, Experiment]
---

# Personalization Experiment

> Contains details of a personalization Experiment.

# Personalization Experiment

Contains details of a personalization Experiment.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from [Personalization Experiment Named Base](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_experiment_named_base.htm "The base representation for named personalization objects.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataSpaceName | String | The API name of the experiment's data space. |  | 65.0 |
| cohorts | Personalization Experiment Cohort | The list of experiment cohorts. |  | 65.0 |
| schemaName | String | The API name of the personalization schema. If the name includes a data space prefix, it must match dataSpaceName. |  | 65.0 |
| source | Personalization Experiment Source Enum | The Experiment's source. |  | 65.0 |
| sourceReferenceId | ID | Reference to the origin record. Generates an edit link when combined with the source enum. |  | 65.0 |
| status | Personalization Experiment Entity Status Enum | The Experiment's status. |  | 65.0 |
| state | Personalization Experiment State Enum | The Experiment's state. |  | 65.0 |
| startedDate | Date | The date and time the experiment started. |  | 65.0 |
| stoppedDate | Date | The date and time the experiment stopped. |  | 65.0 |
| profileDataGraphName | String | The API name of the profile data graph. |  | 65.0 |
| criteria | CriteriaRepresentation | Targeting and segmentation rules. |  | 65.0 |
| primaryMetric | Personalization Experiment Metric Reference | Primary metric for evaluating experiment performance. |  | 65.0 |
| secondaryMetrics | Personalization Experiment Metric Reference | Metrics for additional performance and behavior insights. |  | 65.0 |

## Related Topics

- Personalization Experiment Named Base (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_experiment_named_base.htm)
- Personalization Experiment Cohort (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_experiment_cohort.htm)
- Personalization Experiment Source Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_source_enum.htm)
- Personalization Experiment Entity Status Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_entity_status_enum.htm)
- Personalization Experiment State Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_state_enum.htm)
- Personalization Experiment Metric Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_experiment_metric_reference.htm)
