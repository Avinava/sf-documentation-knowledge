---
title: "StatsInfo"
domain: service-connector-api-developer-guide
topic: statsinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.626Z
estimatedTokens: 233
keywords: [StatsInfo, Representing, stats, either, audio, input, channel, output, calculate, MOS, Mean, Opinion, Score, Objects]
---

# StatsInfo

> Representing stats for either an audio input channel or an
        audio output channel. This object is used to calculate the MOS (Mean Opinion
        Score).

# StatsInfo

Representing stats for either an audio input channel or an audio output channel. This object is used to calculate the MOS (Mean Opinion Score).

## Constructor

new StatsInfo(param)

## Objects Where Used

-   [AudioStats](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_audiostats.htm "Represents audio stats element, which can include audio input channel stats and audio output channel stats.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with this object. |
| param.packetsCount | TypeNumberDescriptionThe packet count |
| param.packetsLost | TypeNumberDescriptionThe number of packets lost. |
| param.jitterBufferMillis | TypeNumberDescriptionThe jitter buffer time in milliseconds. |
| param.roundTripTimeMillis | TypeNumberDescriptionThe network round-trip time in milliseconds. |

## Related Topics

- AudioStats (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_audiostats.htm)
