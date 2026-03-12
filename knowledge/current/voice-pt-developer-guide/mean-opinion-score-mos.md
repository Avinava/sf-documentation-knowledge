---
title: "Mean Opinion Score (MOS)"
domain: voice-pt-developer-guide
topic: mean-opinion-score-mos
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.063Z
estimatedTokens: 426
keywords: [Mean, Opinion, Score, MOS, Support, Service, Cloud, Voice, Partner, Telephony]
---

# Mean Opinion Score (MOS)

> Support MOS using Service Cloud Voice for Partner Telephony.

# Mean Opinion Score (MOS)

Support MOS using Service Cloud Voice for Partner Telephony.

The Mean Opinion Score (MOS) is a commonly used metric to measure the overall voice call quality. The MOS is a rating from 1 to 5, with 1 being the lowest score, and 5 being the highest. This rating is standardized by the International Telecommunications Union ITU-T.

The standard ITU-T G.107 defines the algorithm we use to calculate the G.711 MOS score, based on network performance metrics (for example, latency, jitter and packet loss).

In order to support MOS as a Service Cloud Voice partner:

1.  Specify rep configuration the field config.supportsMos using the setAgentConfig method.
2.  Publish the UPDATE\_AUDIO\_STATS event using the publishEvent method to report the audio stats during the call (between the call getting connected and ending). Stats are ignored before the call is connected and after you specify isAudioStatsCompleted as true in the AudioStats payload of the publishEvent method.

In order to get the MOS:

1.  The audio stats are collected during the call. The MOS is calculated when the connector specifies isAudioStatsCompleted as true in the last UPDATE\_AUDIO\_STATS publishEvent payload. The value is stored in the Mean Opinion Score in the VoiceCall record.
2.  The Salesforce admin must add the Mean Opinion Score in the VoiceCall layout to show the score in VoiceCall record UI.

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")
