---
title: "Dataflow Input"
domain: bi-dev-guide-rest
topic: dataflow-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.726Z
estimatedTokens: 204
keywords: [Dataflow, Input, Analytics]
---

# Dataflow Input

> An Analytics dataflow.

# Dataflow Input

An Analytics dataflow.

Properties

DataflowInput inherits properties from the abstract [BaseAssetInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_input.htm "The base Analytics asset input."). These base properties appear alongside DataflowInput specific properties in the following table.

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| definition | Object | The dataflow definition. | Required | 50.0 |
| history​Label | String | The history label to tag the saved dataflow version. | Optional | 50.0 |

#### See Also

-   [Dataflow Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflows_id.htm "Returns a dataflow. Reverts a dataflow to a previous version.")

## Related Topics

- BaseAssetInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_input.htm)
- Dataflow Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflows_id.htm)
