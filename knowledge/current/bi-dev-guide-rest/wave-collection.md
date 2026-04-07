---
title: "Wave Collection"
domain: bi-dev-guide-rest
topic: wave-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:58.035Z
estimatedTokens: 464
keywords: [Wave, Collection, Analytics, resources]
---

> A collection of Analytics resources.

# Wave Collection

A collection of Analytics resources.

Properties

| Parameter Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| collection​Type | Collection​Type​Enum | The collection type. Valid values are: Static | Small, v52.0 | 52.0 |
| color | String | The configured color for the collection, represented as a hexadecimal value. | Supplemental, v52.0 | 52.0 |
| is​Pinned | Boolean | Indicates whether this collection is pinned for the current user (true) or not (false). | Small, v52.0 | 52.0 |
| is​Visible | Boolean | Indicates whether this collection is visible for the current user (true) or not (false). | Small, v57.0 | 57.0 |
| item​List | Wave​Collection​Item​List[] | The list of items in the collection. | Small, 52.0 | 52.0 |
| items​Url | Boolean | The URL to get the items in the collection. | Small, v52.0 | 52.0 |
| pinned​By | Collection​Created​By​Type​Enum | The type of user who created the pin. Valid values are:AdminNoneUser | Small, v57.0 | 57.0 |
| pins | Collection​Pin[] | The list of pinning rules for the collection. | Small, 52.0 | 52.0 |
| shares | Wave​Folder​Share[] | The list of sharing rules for the collection. | Small, 52.0 | 52.0 |

#### See Also

-   [Collections List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections.htm "Returns a list of collections or creates a collection. Each collection contains Analytics resource items.")

-   [Collections Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_collections.htm "Returns, updates, or deletes a collection. Each collection contains Analytics resource items.")

-   [Collections Item Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_item.htm "Deletes an item from the collection.")

## Related Topics

- Wave​Collection​Item​List (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection_item_list.htm)
- Collection​Pin (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_collection_pin.htm)
- Wave​Folder​Share (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder_share.htm)
- Collections List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections.htm)
- Collections Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_collections.htm)
- Collections Item Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_item.htm)
