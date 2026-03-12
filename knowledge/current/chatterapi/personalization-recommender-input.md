---
title: "Personalization Recommender Input"
domain: chatterapi
topic: personalization-recommender-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.448Z
estimatedTokens: 419
keywords: [Personalization, Recommender, Input, creating]
---

# Personalization Recommender Input

> Contains the details for creating a personalization recommender.

# Personalization Recommender Input

Contains the details for creating a personalization recommender.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from the [Personalization Recommender Base Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_input.htm "The base representation for creating a personalization object.").

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataSpaceName | String | The name of the data space for the recommender. | Required | 64.0 |
| excludeFilters | Personalization Recommender Rule Group Input | The exclusion filters for the recommender. | Optional | 64.0 |
| includeFilters | Personalization Recommender Rule Group Input | The inclusion filters for the recommender. | Optional | 64.0 |
| itemDataGraphName | String | The name of the item data graph for the recommender. | Required | 64.0 |
| objectiveName | String | The custom objective for the recommender. | Optional | 64.0 |
| profileDataGraphName | String | The name of the profile data graph for the recommender. | Required | 64.0 |
| sortCriteria | Personalization Recommender Sort Criteria Input | The sort order for rule-based recommenders. | Optional | 64.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The objectiveName value can be one of: MaximizeRevenue, MaximizeClicks, or {customObjectiveApiName}. The first two are out-of-the-box objective names; the third is the API name of a custom objective defined by the user.

## Related Topics

- Personalization Recommender Base Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_input.htm)
- Personalization Recommender Rule Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_rule_group_input.htm)
- Personalization Recommender Sort Criteria Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_sort_criteria_input.htm)
