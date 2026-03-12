---
title: "Wave Asset Bundle"
domain: bi-dev-guide-rest
topic: wave-asset-bundle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.760Z
estimatedTokens: 282
keywords: [Wave, Asset, Bundle, Analytics, bundled, associated, metadata]
---

# Wave Asset Bundle

> The Analytics asset bundled with the associated metadata.

# Wave Asset Bundle

The Analytics asset bundled with the associated metadata.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| asset | Base​Wave​Asset | The primary asset for the bundle. | Small, 43.0 | 43.0 |
| components | Base​Wave​Asset[] | The metadata of components for the bundle. | Small, 50.0 | 50.0 |
| datasets | Dataset[] | A list of datasets for the bundle. | Small, 41.0 | 41.0 |
| id | String | The ID of the primary asset for the bundle. | Small, 41.0 | 41.0 |
| sobjects | Asset​Reference[] | A list of sObjects for the bundle. | Small, 50.0 | 50.0 |
| xmds | Xmd[] | A list of xmds for the bundle. | Small, 41.0 | 41.0 |

#### See Also

-   [Dashboard Bundle Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_bundle.htm "Returns or updates the dashboard bundle with the specified ID or API name.")

-   [Lens Bundle Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id_bundle.htm "Returns or updates the lens bundle with the specified ID or API name.")

## Related Topics

- Base​Wave​Asset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm)
- Dataset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Xmd (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd.htm)
- Dashboard Bundle Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id_bundle.htm)
- Lens Bundle Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id_bundle.htm)
