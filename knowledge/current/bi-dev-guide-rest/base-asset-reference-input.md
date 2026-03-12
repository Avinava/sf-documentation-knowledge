---
title: "Base Asset Reference Input"
domain: bi-dev-guide-rest
topic: base-asset-reference-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.648Z
estimatedTokens: 236
keywords: [Base, Asset, Input, Analytics]
---

# Base Asset Reference Input

> The base Analytics asset.

# Base Asset Reference Input

The base Analytics asset.

Inherited by [AssetReferenceInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm "An Analytics asset reference."), [SlackReferenceInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_slack_reference_input.htm "The reference for a Slack entity."), and [TypedAssetReferenceInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_typed_asset_reference_input.htm "A typed Analytics asset reference.").

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Short description of the asset | Required for POST; Optional in PATCH | 36.0 |
| name | String | The asset developer name. | Required for POST; Not allowed to edit in PATCH | 36.0 |
| label | String | The asset label. | Optional in POST and PATCH | 37.0 |

## Related Topics

- AssetReferenceInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm)
- SlackReferenceInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_slack_reference_input.htm)
- TypedAssetReferenceInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_typed_asset_reference_input.htm)
