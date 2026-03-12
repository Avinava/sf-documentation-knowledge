---
title: "Add Support for Voice Resiliency"
domain: voice-pt-developer-guide
topic: add-support-for-voice-resiliency
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.229Z
estimatedTokens: 359
keywords: [Add, Support, Voice, Resiliency, ensures, calls, number, conversations, over, limit, background, service, affected]
---

# Add Support for Voice Resiliency

> Voice resiliency ensures that calls can still go through when the number of conversations
        is over limit or when the background service is affected.

# Add Support for Voice Resiliency

Voice resiliency ensures that calls can still go through when the number of conversations is over limit or when the background service is affected.

The voice resiliency service allows customers to continue using basic voice features such as inbound calling, outbound calling, call transfers, and callbacks when the conversation entities creation fails. During this period, certain features and functionalities may be impacted. See the [Voice Resiliency for Service Cloud Voice](https://help.salesforce.com/s/articleView?id=000395549&type=1&language=en_US) knowledge article for more information about voice resiliency.

If your environment isn’t set up correctly for voice resiliency, you may experience missing calls. To support voice resiliency, make sure that in the event of a call failure the call still gets routed to the rep or queue.

Configure the following steps to ensure your environment is set up correctly for voice resiliency.

1.  If the [Create a Voice Call Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm) API (/telephony/v1/voiceCalls) fails, perform up to three retries. Retries may fail if, for example, you've reached the conversation limit.
2.  If the retries continue to fail, still route the call to the rep or queue, and send the CALL\_STARTED event through the connector.
