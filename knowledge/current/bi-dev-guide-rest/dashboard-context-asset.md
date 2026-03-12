---
title: "Dashboard Context Asset"
domain: bi-dev-guide-rest
topic: dashboard-context-asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.123Z
estimatedTokens: 240
keywords: [Dashboard, Context, Asset, contextual, representation, embedded, Analytics]
---

# Dashboard Context Asset

> A contextual representation of an embedded Analytics dashboard.

# Dashboard Context Asset

A contextual representation of an embedded Analytics dashboard.

Properties

DashboardContextAsset inherits properties from the abstract [BaseWaveAsset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm "The base Analytics asset."). These base properties appear in DashboardContextAsset alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dashboard​Id | ID | The 18 character ID of the dashboard. | Small, 57.0 | 57.0 |
| dashboard​Saved​View​Id | String | The ID of the dashboard saved view, if present. | Small, 57.0 | 57.0 |
| external​State | String | The external state to apply to the embedded dashboard. | Small, 57.0 | 57.0 |
| locations | Dashboard​Context​Location[] | A list of the locations where the dashboard is embedded. | Small, 57.0 | 57.0 |

## Related Topics

- BaseWaveAsset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm)
- Dashboard​Context​Location (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_context_location.htm)
