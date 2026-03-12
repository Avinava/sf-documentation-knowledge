---
title: "Personalization Experiment Input"
domain: chatterapi
topic: personalization-experiment-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.390Z
estimatedTokens: 699
keywords: [Personalization, Experiment, Input, creating]
---

# Personalization Experiment Input

> Contains the details for creating a personalization experiment.

# Personalization Experiment Input

Contains the details for creating a personalization experiment.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from the [Personalization Experiment Base Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_base_input.htm "The base representation for creating a personalization object.").

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The experiment's API name. | Required | 65.0 |
| label | String | The experiment's UI label. | Required | 65.0 |
| description | String | An optional description for the experiment. | Optional | 65.0 |
| dataSpaceName | String | The API name of the personalization point's data space. | Required | 65.0 |
| profileDataGraphName | String | The API name of the profile data graph. | Optional | 65.0 |
| cohorts | Personalization Experiment Cohort Input | List of ABn Experiment Cohorts. | Required | 65.0 |
| schemaName | String | API name of the personalization schema. The data space prefix must match dataSpaceName. | Required | 65.0 |
| source | Personalization Experiment Source Enum | The Experiment’s source. | Required | 65.0 |
| sourceRecordId | ID | Reference to the origin record, such as a Flow. Generates an edit link when combined with the source enum. | Optional | 65.0 |
| primaryMetrics | Personalization Experiment Primary Metric Reference Input | Primary metrics for evaluating experiment performance and success. | Optional | 65.0 |
| secondaryMetrics | Personalization Experiment Metric Reference Input | Metrics for additional performance and behavior insights. | Optional | 65.0 |
| criteria | String | JSON defining targeting or segmentation rules. | Optional | 65.0 |
| minimumRequiredParticipants | Integer | Minimum required participants (300–5000). Ignored if winnerSelectionMode is manual. | Optional | 65.0 |
| chanceToWinThreshold | Double | Winning threshold (85.00–100.00). | Optional | 65.0 |
| minimumDurationInMinutes | Integer | Minimum duration in minutes (60–129600). Ignored if winnerSelectionMode is manual. | Optional | 65.0 |
| maximumDurationInMinutes | Integer | Maximum duration in minutes (min: minimumDurationInMinutes, max: 129600). Ignored if winnerSelectionMode is manual. | Optional | 65.0 |
| winnerSelectionMode | Personalization Experiment Winner Selection Mode Enum | Winner selection mode: automatic or manual. | Optional | 65.0 |
| scheduleFrequencyInMinutes | Integer | Processing frequency in minutes (30–1440). | Optional | 65.0 |
| parameters | Personalization Experiment Parameter Base Input | Required engagement signal parameters. | Optional | 65.0 |

## Related Topics

- Personalization Experiment Base Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_base_input.htm)
- Personalization Experiment Cohort Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_cohort_input.htm)
- Personalization Experiment Source Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_source_enum.htm)
- Personalization Experiment Primary Metric Reference Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_primary_metric_reference_input.htm)
- Personalization Experiment Metric Reference Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_metric_reference_input.htm)
- Personalization Experiment Winner Selection Mode Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_winner_enum.htm)
- Personalization Experiment Parameter Base Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_parameter_base_input.htm)
