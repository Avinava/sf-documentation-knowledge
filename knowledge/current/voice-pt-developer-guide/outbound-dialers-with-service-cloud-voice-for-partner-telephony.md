---
title: "Outbound Dialers with Service Cloud Voice for Partner Telephony"
domain: voice-pt-developer-guide
topic: outbound-dialers-with-service-cloud-voice-for-partner-telephony
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.922Z
estimatedTokens: 364
keywords: [Outbound, Dialers, Service, Cloud, Voice, Partner, Telephony, preview, dialer, progressive, Push]
---

# Outbound Dialers with Service Cloud Voice for Partner Telephony

> You can use a preview dialer or a progressive dialer with Service Cloud Voice for Partner
        Telephony.

# Outbound Dialers with Service Cloud Voice for Partner Telephony

You can use a preview dialer or a progressive dialer with Service Cloud Voice for Partner Telephony.

## Preview (Push) Dialer

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

The PREVIEW\_CALL\_STARTED Connector API call is no longer supported starting with the Winter '23 release.

To use a preview dialer, create a preview dialer Lightning component and then use the startPreviewCall method in the [Aura-based Toolkit API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_aura_telephony_actions.htm) to initiate outbound calls. Calling this method ensures that the [VoiceCall record](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm) has the **CallType** field set to Outbound and the **CallOrigin** field set to Preview. See the [Sample Aura Component in GitHub](https://github.com/service-cloud-voice/examples-from-doc/tree/main/ToolkitAPI/SampleAuraComponent).

## Progressive Dialer

A progressive dialer works similarly to inbound calls. The vendor telephony system dials the customer without notifying the rep. After the customer picks up the call, the vendor follows the inbound call flow (that is, create a Voice Call, send CALL\_STARTED, accept or decline).
