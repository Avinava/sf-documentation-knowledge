---
title: "Base Asset Reference"
domain: bi-dev-guide-rest
topic: base-asset-reference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.002Z
estimatedTokens: 324
keywords: [Base, Asset, Analytics]
---

# Base Asset Reference

> The base Analytics asset.

# Base Asset Reference

The base Analytics asset.

Inherited by [Asset Reference](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm "An Analytics asset reference."), [Image Asset Reference](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_image_asset_reference.htm "A image asset for Analytics."), [Slack Reference](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_slack_reference.htm "The reference for a Slack entity."), and [Typed Asset Reference](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_typed_asset_reference.htm "A typed Analytics asset reference.").

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The 18 character ID of the asset. | Small, 36.0 | 36.0 |
| label | String | The asset label. | Small, 36.0 | 36.0 |
| name | String | The asset developer name. | Small, 36.0 | 36.0 |
| namespace | String | The namespace that qualifies the asset name. The default is the current organization's namespace, which is "empty namespace" for all organizations, except those developer edition orgs that have set a namespace. | Small, 37.0 | 37.0 |
| url | String | The asset URL. | Small, 36.0 | 36.0 |

## Related Topics

- Asset Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Image Asset Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_image_asset_reference.htm)
- Slack Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_slack_reference.htm)
- Typed Asset Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_typed_asset_reference.htm)
