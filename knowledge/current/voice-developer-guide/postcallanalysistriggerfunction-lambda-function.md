---
title: "PostCallAnalysisTriggerFunction Lambda Function"
domain: voice-developer-guide
topic: postcallanalysistriggerfunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.684Z
estimatedTokens: 440
keywords: [PostCallAnalysisTriggerFunction, Lambda, Function, automatically, sentiment, data, contact, center’s, Amazon, bucket, post-call, analysis]
---

# PostCallAnalysisTriggerFunction Lambda Function

> This Lambda function automatically gets sentiment data from a contact
      center’s Amazon S3 bucket for post-call analysis.

# PostCallAnalysisTriggerFunction Lambda Function

This Lambda function automatically gets sentiment data from a contact center’s Amazon S3 bucket for post-call analysis.

**Configuration:** This function is available to Service Cloud Voice customers who are using an Amazon Connect instance that’s provided by Salesforce. This Lambda is installed with Service Cloud Voice contact center version 11.0 or later. See [Update Your Contact Center](https://help.salesforce.com/s/articleView?id=service.voice_update_cc.htm&type=5&language=en_US) for more details. No additional configuration is necessary. See a [sample version of the invokeTelephonyIntegrationApi Lambda function](https://github.com/service-cloud-voice/ServiceCloudVoiceLambdas/tree/master/invokeTelephonyIntegrationApi) in GitHub.

**Usage:** You don’t need to call this function manually.

When set up, an Amazon EventBridge rule automatically triggers these actions.

1.  The PostCallAnalysis Lambda function reads the post-call intelligence files from the contact center Amazon S3 bucket.
2.  The PostCallAnalysis Lambda function parses the signal data in the files and reshapes it for the Salesforce Telephony Integration API to consume.
3.  The Telephony Integration API saves the signals in the Salesforce database, ready to use for post-call sentiment analysis.

#### See Also

-   [Store a Post-Call Conversation Event](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_post-call_conversation_event.htm "Store post-call conversation events generated from intelligence sources, such as Amazon Connect Contact Lens, into the conversation data store. Users can also specify the target objects (for example, VoiceCall, ConversationEntry) related to the specific event.")

## Related Topics

- Store a Post-Call Conversation Event (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_post-call_conversation_event.htm)
