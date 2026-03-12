---
title: "Personalization Recommender"
domain: chatterapi
topic: personalization-recommender
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.300Z
estimatedTokens: 386
keywords: [Personalization, Recommender]
---

# Personalization Recommender

> Contains details of a personalization recommender.

# Personalization Recommender

Contains details of a personalization recommender.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from [Personalization Recommender Named Base](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_named_base.htm "The base representation for named personalization objects.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contentObject | Personalization Reference | The content object used by the recommender. |  | 64.0 |
| dataSpace | Personalization Reference | The data space used by the recommender. |  | 64.0 |
| excludeFilters | Rule Group | The exclusion filter for the recommender. |  | 64.0 |
| includeFilters | Rule Group | The inclusion filter for the recommender. |  | 64.0 |
| itemDataGraph | Personalization Reference | The item data graph used by the recommender. |  | 64.0 |
| lastRefreshedStatus | String | The status of the last refresh. |  | 64.0 |
| lastSuccessfulRefresh | String | The time when the last successful refresh happened. |  | 64.0 |
| objective | Personalization Reference | The objective of the recommender. |  | 64.0 |
| profileDataGraph | Personalization Reference | The profile data graph used by the recommender. |  | 64.0 |
| sortCriteria | Sort Criteria | The sort criteria for the recommender. |  | 64.0 |
| status | String | The status of the recommender. |  | 64.0 |

## Related Topics

- Personalization Recommender Named Base (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_named_base.htm)
- Personalization Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_reference.htm)
- Rule Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_rule_group.htm)
- Sort Criteria (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_sort_criteria.htm)
