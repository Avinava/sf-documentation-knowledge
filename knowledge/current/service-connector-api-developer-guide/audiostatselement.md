---
title: "AudioStatsElement"
domain: service-connector-api-developer-guide
topic: audiostatselement
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.488Z
estimatedTokens: 185
keywords: [AudioStatsElement, audio, stats, element, include, input, channel, output, Objects]
---

# AudioStatsElement

> Represents audio stats element, which can include audio
        input channel stats and audio output channel stats.

# AudioStatsElement

Represents audio stats element, which can include audio input channel stats and audio output channel stats.

## Constructor

new AudioStatsElement(param)

## Objects Where Used

-   [AudioStats](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_audiostatsgroup.htm "Represents audio stats, which contains an array of AudioStatsElement objects.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with this object. |
| param.inputChannelStats | TypeStatsInfoDescriptionThe audio input channel stats info. |
| param.outputChannelStats | TypeStatsInfoDescriptionThe audio output channel stats info. |

## Related Topics

- AudioStats (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_audiostatsgroup.htm)
- StatsInfo (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_statsinfo.htm)
