---
title: "Post-Call Contact Record Sync with the Update VoiceCall API"
domain: voice-pt-developer-guide
topic: post-call-contact-record-sync-with-the-update-voicecall-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.145Z
estimatedTokens: 387
keywords: [Post-Call, Contact, Record, Sync, VoiceCall, API, updates, call, ended, call-related, unavailable, creation, stage, callDuration, numberOfHold]
---

# Post-Call Contact Record Sync with the Update VoiceCall API

> This API updates a VoiceCall record after the call has ended. Use this API to update
    call-related parameters that are unavailable during the VoiceCall creation stage, such as
    callDuration and numberOfHold.

# Post-Call Contact Record Sync with the Update VoiceCall API

This API updates a VoiceCall record after the call has ended. Use this API to update call-related parameters that are unavailable during the VoiceCall creation stage, such as callDuration and numberOfHold.

The Update VoiceCall API is an asynchronous operation. You can’t query for the status of the API call. To learn more, see [Update VoiceCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_update.htm).

The parameter disconnectReason indicates the reason the call was disconnected. When a caller schedules a callback and then disconnects, the disconnectReason must be set as CALLBACK. Without this setting the initial call will be classified incorrectly as abandoned.

For production orgs you can use the Service Cloud Voice REST API: https://{org\_domain\_name}.my.salesforce-scrt.com/telephony/v1.

Use the org domain name as defined in the first step of [Set Up SSO Connected App and Salesforce with Identity Provider](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sso.htm "Set up single sign-on (SSO) for your solution.").

This API uses JWT authorization to communicate with Salesforce.

#### See Also

-   [*Voice Implementation Guide:* Update VoiceCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_update.htm "Voice Implementation Guide: Update VoiceCall - HTML (New Window)")

## Related Topics

- Set
                Up SSO Connected App and Salesforce with Identity Provider (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sso.htm)
