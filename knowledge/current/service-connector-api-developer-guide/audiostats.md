---
title: "AudioStats"
domain: service-connector-api-developer-guide
topic: audiostats
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.492Z
estimatedTokens: 296
keywords: [AudioStats, audio, stats, array, AudioStatsElement, objects, Functions]
---

# AudioStats

> Represents audio stats, which contains an array of AudioStatsElement objects.

# AudioStats

Represents audio stats, which contains an array of AudioStatsElement objects.

## Constructor

new AudioStats(param)

## Functions Where Used

-   [publishEvent()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm "Publishes an event to Salesforce. The event payload is verified to ensure that it’s the correct type before it’s published. Use this method to publish an event from a desk phone or directly from the partner connector.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with this object. |
| param.stats | TypeArray<AudioStatsElement>DescriptionAn array of audio stats elements. |
| param.callId | TypestringDescriptionThe unique call ID. |
| param.isAudioStatsCompleted | TypebooleanDescriptionThis value is true when the audio stats are completed. When true, Salesforce calculates the Mean Opinion Score (MOS) and updates the VoiceCall record based on the callId. For more information, see https://developer.salesforce.com/docs/atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_mos.htm . |

## Related Topics

- publishEvent() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)
- AudioStatsElement (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_audiostats.htm)
