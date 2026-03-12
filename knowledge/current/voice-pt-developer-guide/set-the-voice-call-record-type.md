---
title: "Set the Voice Call Record Type"
domain: voice-pt-developer-guide
topic: set-the-voice-call-record-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.225Z
estimatedTokens: 307
keywords: [Voice, Call, Record, Customize, layout]
---

# Set the Voice Call Record Type

> Customize the page layout of a voice call record.

# Set the Voice Call Record Type

Customize the page layout of a voice call record.

The record type determines the page layout of a voice call record. Configure your system to automatically set the record type when you create the voice call record by passing in “RecordTypeId”:”RECORD\_TYPE” inside the callAttributes parameter, where RECORD\_TYPE is the unique identifier for the voice call record type. For example, {"callAttributes": "{"RecordTypeId": "012300000012BYNQAG"}"}.

After a voice call record is set, reps can manually change its record type through the Salesforce Lightning Experience UI.

#### See Also

-   [*Service Cloud Voice Implementation Guide:* Create a Voice Call Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm "Service Cloud Voice Implementation Guide: Create a Voice Call Record - HTML (New Window)")

-   [*Salesforce Object Reference for the Salesforce Platform:* VoiceCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm "Salesforce Object Reference for the Salesforce Platform: VoiceCall
    - HTML (New Window)")
