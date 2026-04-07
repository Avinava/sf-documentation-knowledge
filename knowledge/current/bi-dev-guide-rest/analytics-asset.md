---
title: "Analytics Asset"
domain: bi-dev-guide-rest
topic: analytics-asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:10.055Z
estimatedTokens: 442
keywords: [Analytics, Asset]
---

# Analytics Asset

> An Analytics asset.

# Analytics Asset

An Analytics asset.

## Properties

AnalyticsAsset inherits properties from the abstract [BaseWaveAssetReference](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm "The base Analytics asset."). These base properties appear in AnalyticsAsset alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| data​Refresh​Date | Date | The date when the dataset was last refreshed. | Small, 48.0 | 48.0 |
| dataset​Type | Connect​Wave​Dataset​Type​Enum | The dataset type. Valid values are:DefaultLiveStaged​DataTrended | Small, 56.0 | 56.0 |
| files | Base​File[] | The list of files used to create the asset. Valid values are:Analytics​Data​Asset​FileLens​File | Small, 47.0 | 47.0 |
| folder | Asset​Reference | The folder that the asset belongs to. | Small, 47.0 | 47.0 |
| folder​Type | Connect​Folder​Type | The folder type field for folder assets. | Small, 53.0 | 53.0 |
| icons | Template​Icons | The icons for the asset. | Small, 56.0 | 56.0 |
| outcome | Analysis​Configuration​Outcome | The analysis outcome for an Einstein Discovery asset. | Small, 55.0 | 55.0 |
| owner | Wave​User | The owner of the asset. | Small, 55.0 | 55.0 |
| status | String | The status for an Einstein Discovery asset. | Small, 55.0 | 55.0 |
| visibility | Connect​Wave​Asset​Visibility​Type | The visibility type. Valid values are:All (Show all assets)Limited (Hide assets from viewers with view access) | Small, 51.0 | 51.0 |

#### See Also

-   [Analytics Asset Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_analytics_asset_id.htm "Returns an Analytics asset by ID.")

## Related Topics

- BaseWaveAssetReference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm)
- Base​File (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_file.htm)
- Analytics​Data​Asset​File (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_analytics_data_asset_file.htm)
- Lens​File (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_file.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Template​Icons (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_icons.htm)
- Analysis​Configuration​Outcome (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_analysis_configuration_outcome.htm)
- Wave​User (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_user.htm)
- Analytics Asset Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_analytics_asset_id.htm)
