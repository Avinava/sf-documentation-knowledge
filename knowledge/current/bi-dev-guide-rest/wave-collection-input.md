---
title: "Wave Collection Input"
domain: bi-dev-guide-rest
topic: wave-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.927Z
estimatedTokens: 308
keywords: [Wave, Collection, Input, Analytics, resources]
---

# Wave Collection Input

> A collection of Analytics resources.

# Wave Collection Input

A collection of Analytics resources.

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| color | String | The configured color for the collection, represented as a hexadecimal value. | Optional | 52.0 |
| description | String | The description for the collection. | Optional | 52.0 |
| label | String | The label of the collection. | Required | 52.0 |
| pins | Wave​Collection​Pin​Input[] | The list of pinning rules for the collection. | Optional | 52.0 |
| shares | Wave​Folder​Share​Input​[] | The list of sharing rules for the collection. | Optional | 52.0 |
| collection​Type | Collection​Type​Enum | The collection type. Valid values are: Static | Required | 52.0 |

#### See Also

-   [Collection List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections.htm "Returns a list of collections or creates a collection. Each collection contains Analytics resource items.")

-   [Collections Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_collections.htm "Returns, updates, or deletes a collection. Each collection contains Analytics resource items.")

## Related Topics

- Wave​Collection​Pin​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_pin_input.htm)
- Wave​Folder​Share​Input​ (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_share_input.htm)
- Collection List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections.htm)
- Collections Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_collections.htm)
