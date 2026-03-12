---
title: "Wave Collection List"
domain: bi-dev-guide-rest
topic: wave-collection-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.776Z
estimatedTokens: 222
keywords: [Wave, Collection, Analytics, collections]
---

# Wave Collection List

> A list of Analytics collections.

# Wave Collection List

A list of Analytics collections.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| collections | Wave​Collection​[] | A collection of Analytics resources. | Small, 52.0 | 52.0 |
| next​Page​Token | String | The next page token if there are more records in the collection. | Small, 52.0 | 52.0 |
| total​Collection​Count | Integer | The total size of the accessible items in the collections, with no visibility or pinning filters applied. | Small, 57.0 | 57.0 |
| total​Count | Integer | The total count of collections. | Small, 52.0 | 52.0 |

#### See Also

-   [Collections Items List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_items.htm "Returns a list of Analytics collection items and creates or updates the collection item list.")

## Related Topics

- Wave​Collection​ (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection.htm)
- Collections Items List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_items.htm)
