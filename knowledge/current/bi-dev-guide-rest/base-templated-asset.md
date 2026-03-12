---
title: "Base Templated Asset"
domain: bi-dev-guide-rest
topic: base-templated-asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.018Z
estimatedTokens: 314
keywords: [Base, Templated, Asset, Analytics, created, template]
---

# Base Templated Asset

> A base Analytics asset created from a template.

# Base Templated Asset

A base Analytics asset created from a template.

## Properties

Inherited by [Dashboard](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard.htm "An Analytics dashboard.") and [Lens](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens.htm "Am Analytics lenses.").

BaseTemplatedAsset inherits properties from the abstract [BaseWaveAssetReference](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm "The base Analytics asset."). These base properties appear in BaseTemplatedAsset alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cloned​Template​Origin | String | If the asset was cloned from an asset that was created from a template, this is the template origin of the original asset. | Small, 56.0 | 56.0 |
| template​Asset​Source​Name | String | If the asset was created from a template, this is the corresponding template asset developer name. | Small, 52.0 | 52.0 |
| template​Source​Id | String | If the asset was created from a template, this is the corresponding template name or ID. | Small, 52.0 | 52.0 |

## Related Topics

- Dashboard (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard.htm)
- Lens (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens.htm)
- BaseWaveAssetReference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm)
