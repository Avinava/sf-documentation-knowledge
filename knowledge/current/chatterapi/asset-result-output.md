---
title: "Asset Result Output"
domain: chatterapi
topic: asset-result-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.460Z
estimatedTokens: 153
keywords: [Asset, Result, Output, Connect, REST, API, representation, lifecycle-managed, assets]
---

# Asset Result Output

> Connect REST API output representation for lifecycle-managed
      assets.

# Asset Result Output

Connect REST API output representation for lifecycle-managed assets.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| asset | Asset Output | ID of the asset on which the API was called. | Big, 50.0 | 50.0 |
| assetAction | Asset Action Output | ID of the asset action created as a result of the API call. | Big, 50.0 | 50.0 |
| assetActionSources | Asset Action Source Output[] | Asset action sources. | Big, 50.0 | 50.0 |
| assetStatePeriods | Asset State Period Output[] | Asset state periods. | Big, 50.0 | 50.0 |

## Related Topics

- Asset Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_calm_asset_output.htm)
- Asset Action Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_calm_asset_action_output.htm)
- Asset Action Source Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_calm_asset_action_source_output.htm)
- Asset State Period Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_calm_asset_state_period_output.htm)
