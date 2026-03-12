---
title: "Dataflow"
domain: bi-dev-guide-rest
topic: dataflow
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.211Z
estimatedTokens: 322
keywords: [Dataflow, Analytics]
---

# Dataflow

> An Analytics dataflow.

# Dataflow

An Analytics dataflow.

Properties

Dataflow inherits properties from the abstract [BaseWaveAsset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm "The base Analytics asset."). These base properties appear alongside Dataflow specific properties in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| definition | Object | The representation of the dataflow nodes. | Small, 50.0 | 50.0 |
| email​Notification​Level | Connect​Email​Notification​Level​Enum | Valid types of email notification levels you can set. Valid values are:AlwaysFailuresNeverWarnings | Small, 42.0 | 42.0 |
| histories​Url | String | The URL that retrieves the dataflow histories associated with this dataflow. | Small, 46.0 | 46.0 |
| next​Scheduled​Date | Date | The time of the next scheduled run, in ISO8601 date format. | Small, 42.0 | 42.0 |
| schedule​Attributes | String | The schedule details for the dataflow, which includes the frequency and start time. | Small, 42.0 | 42.0 |

#### See Also

-   [Dataflow Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflows_id.htm "Returns a dataflow. Reverts a dataflow to a previous version.")

## Related Topics

- BaseWaveAsset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm)
- Dataflow Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflows_id.htm)
