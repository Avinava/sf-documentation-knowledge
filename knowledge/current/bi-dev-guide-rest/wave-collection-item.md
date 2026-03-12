---
title: "Wave Collection Item"
domain: bi-dev-guide-rest
topic: wave-collection-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.770Z
estimatedTokens: 295
keywords: [Wave, Collection, Item, Analytics, resources]
---

# Wave Collection Item

> An item in a collection of Analytics resources.

# Wave Collection Item

An item in a collection of Analytics resources.

Properties

| Parameter Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| asset​Type | Collection​Item​Asset​Type​Enum | The collection item asset type. Valid values are:DashboardLens | Small, 52.0 | 52.0 |
| collection​Item​Id | String | The id of the association between the collection and asset item. | Small, v52.0 | 52.0 |
| files | Base​File[] | The list of files used to create the asset item. Valid values are:Analytics​Data​Asset​FileLens​File | Small, v52.0 | 52.0 |
| folder | Asset​Reference | The folder metadata for the asset item. | Small, v52.0 | 52.0 |
| visibility | Connect​Wave​Asset​Visibility​Type | Indicates whether the asset is hidden from users with view access or not. Valid values are:All (Show all assets)Limited (Hide assets from viewers with view access) | Small, v52.0 | 52.0 |

#### See Also

-   [Collections Items List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_items.htm "Returns a list of Analytics collection items and creates or updates the collection item list.")

## Related Topics

- Base​File (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_file.htm)
- Analytics​Data​Asset​File (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_analytics_data_asset_file.htm)
- Lens​File (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_file.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Collections Items List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_items.htm)
