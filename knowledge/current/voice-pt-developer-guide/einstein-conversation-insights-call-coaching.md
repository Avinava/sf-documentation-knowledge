---
title: "Einstein Conversation Insights (Call Coaching)"
domain: voice-pt-developer-guide
topic: einstein-conversation-insights-call-coaching
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.030Z
estimatedTokens: 630
keywords: [Einstein, Conversation, Insights, Call, Coaching, Provide, support, Service, Cloud, Voice, reps]
---

# Einstein Conversation Insights (Call Coaching)

> Provide support for Einstein Conversation Insights to Service Cloud Voice
  reps.

# Einstein Conversation Insights (Call Coaching)

Provide support for Einstein Conversation Insights to Service Cloud Voice reps.

In order to support Einstein Conversation Insights (ECI) for customers, vendors must perform several steps.

ECI is available in Performance and Unlimited Editions, and as an add-on in Enterprise Edition. Please reach out to your Salesforce account executive if you require one of these orgs to test your ECI integration.

For more information about setting up ECI, see [Set Up Einstein Conversation Insights](https://help.salesforce.com/s/articleView?id=sales.call_coaching_setup.htm&type=5&language=en_US) in Salesforce Help.

1.  Turn on this feature in the ConversationVendorInfo object by specifying the einsteinConversationInsightsSupported value to true. This value creates an entry in the General Settings section of Conversation Insights, which the admin can choose to toggle on or off.

    ![Einstein conversation insights](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_einstein_insights.png&folder=voice_pt_developer_guide)

2.  Implement [service\_cloud\_voice.RecordingMediaProvider](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm "Service Cloud Voice for Partner Telephony uses several Apex classes.") in the Apex class. The method getSignedUrls is called by Salesforce with named credentials (if set up for the org) and a list of vendor call keys. The named credentials can be used to make a call out to the partner system for authentication. The partner has to return a signed URL for each vendor call key (or an error) that is valid for at least five minutes. Salesforce then uses this signed URL to download the recording file for that particular voice call and analyze it. The signed URL must match these regex expressions. For AWS: https://\[a-z\\d\\.-\]\*s3\[a-z\\d\\.-\]\*amazonaws\\.com\\S\*\\.(?P<file\_extension>wav|mp3|flac|mp4|m4a). For Google Cloud: https://storage.googleapis.com/\[a-z\\d\\.-\]\*/\\S\*\\.(?P<file\_extension>wav|mp3|flac|mp4|m4a).

#### See Also

-   [Set Up Service Cloud Voice for Partner Telephony in Your Org](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_setup_svc_org.htm "When Service Cloud Voice for Partner Telephony licenses are added to an org, Salesforce admins in the org can open the Partner Telephony Setup page and follow the steps to set up their contact center. This guide describes how you can customize that experience.")

## Related Topics

- service_cloud_voice.RecordingMediaProvider (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm)
- Set Up Service Cloud Voice for Partner Telephony in Your Org (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_setup_svc_org.htm)
