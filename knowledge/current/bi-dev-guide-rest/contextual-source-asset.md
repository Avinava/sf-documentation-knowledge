---
title: "Contextual Source Asset"
domain: bi-dev-guide-rest
topic: contextual-source-asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.098Z
estimatedTokens: 234
keywords: [Contextual, Source, Asset, representation, Analytics, dashboard]
---

# Contextual Source Asset

> A contextual representation of an Analytics dashboard.

# Contextual Source Asset

A contextual representation of an Analytics dashboard.

## Properties

ContextualSourceAsset inherits properties from the abstract [BaseWaveAsset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm "The base Analytics asset."). These base properties appear in ContextualSourceAsset alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dashboard​Id | ID | The 18 character ID of the dashboard. | Small, 57.0 | 57.0 |
| external​State | Dashboard​Saved​View​State | The external state of the contextual asset. | Small, 57.0 | 57.0 |
| locations | Dashboard​Context​Location[] | A list of the location for the contextual asset. | Small, 57.0 | 57.0 |
| saved​View | Asset​Reference | The saved view of the dashboard. | Small, 57.0 | 57.0 |

## Related Topics

- BaseWaveAsset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm)
- Dashboard​Saved​View​State (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view_step_state.htm)
- Dashboard​Context​Location (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_context_location.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
