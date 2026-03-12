---
title: "Lens Source Asset"
domain: bi-dev-guide-rest
topic: lens-source-asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.364Z
estimatedTokens: 140
keywords: [Lens, Source, Asset, contextual, representation, Analytics]
---

# Lens Source Asset

> A contextual representation of an Analytics lens.

# Lens Source Asset

A contextual representation of an Analytics lens.

## Properties

LensSourceAsset inherits properties from the abstract [BaseWaveAsset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm "The base Analytics asset.").

| Parameter Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dashboard​Id | ID | The 18-character id of a dashboard. | Small, 58.0 | 58.0 |
| saved​View | Asset​Reference | The saved view of a dashboard. | Small, 58.0 | 58.0 |

## Related Topics

- BaseWaveAsset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
