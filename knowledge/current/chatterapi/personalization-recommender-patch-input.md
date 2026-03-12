---
title: "Personalization Recommender Patch Input"
domain: chatterapi
topic: personalization-recommender-patch-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.444Z
estimatedTokens: 229
keywords: [Personalization, Recommender, Patch, Input, editing]
---

# Personalization Recommender Patch Input

> Contains the details for editing a personalization recommender.

# Personalization Recommender Patch Input

Contains the details for editing a personalization recommender.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from the [Personalization Recommender Base Patch Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_patch_input.htm "The base representation for editing a personalization object.").

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| includeFilters | Personalization Recommender Rule Group Input | The filters applied before rendering recommendations to decide items to include. | Optional | 65.0 |
| excludeFilters | Personalization Recommender Rule Group Input | The filters applied before rendering recommendations to decide items to exclude. | Optional | 65.0 |

## Related Topics

- Personalization Recommender Base Patch Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_patch_input.htm)
- Personalization Recommender Rule Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_rule_group_input.htm)
