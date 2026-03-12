---
title: "kvsConsumerTrigger Lambda Function"
domain: voice-developer-guide
topic: kvsconsumertrigger-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.671Z
estimatedTokens: 477
keywords: [kvsConsumerTrigger, Lambda, Function, initiation, point, starting, real-time, transcription]
---

# kvsConsumerTrigger Lambda Function

> This Lambda function is the initiation point for starting real-time
      transcription.

# kvsConsumerTrigger Lambda Function

This Lambda function is the initiation point for starting real-time transcription.

**Configuration:** This function is available to Service Cloud Voice customers who are using an Amazon Connect instance that’s provided by Salesforce. No additional configuration is necessary. See a [sample version of the invokeTelephonyIntegrationApi Lambda function](https://github.com/service-cloud-voice/ServiceCloudVoiceLambdas/tree/master/invokeTelephonyIntegrationApi) in GitHub.

**Sample Contact Flows That Use This Function:** Sample\_SCV\_Inbound\_Flow\_With\_Transcription, Sample SCV Outbound Flow with Transcription Using Contact Lens, Sample SCV Outbound Flow with Transcription Using Amazon Transcribe. To download these flows, visit our [Sample Contact Flows](https://github.com/service-cloud-voice/examples-from-doc/tree/main/ContactFlows) folder in GitHub.

**Usage:** The kvsConsumerTrigger Lambda is invoked from a contact flow to begin transcription. The function triggers the [kvsTranscriber](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvstranscriber.htm "This Lambda function does the actual real-time transcription work. This function is not directly invoked from a contact flow. It is triggered by the kvsConsumerTrigger Lambda function. You do not need to call this function manually.") Lambda function with the necessary information to start real-time transcription. To learn how to use Amazon Transcribe’s custom vocabulary and vocabulary filtering, see [Improve Amazon Transcribe's Transcription Accuracy with Custom Vocabulary and Filters](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_vocabulary.htm "Use a custom vocabulary to ensure that your transcript displays terms with the correct spelling and capitalization. Use vocabulary filters to filter or mask unwanted content, like profanity.").

## Related Topics

- kvsTranscriber (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvstranscriber.htm)
- Improve Amazon Transcribe's Transcription Accuracy with Custom Vocabulary and Filters (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_vocabulary.htm)
