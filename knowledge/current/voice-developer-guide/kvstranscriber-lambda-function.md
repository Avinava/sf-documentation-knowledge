---
title: "kvsTranscriber Lambda Function"
domain: voice-developer-guide
topic: kvstranscriber-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.673Z
estimatedTokens: 481
keywords: [kvsTranscriber, Lambda, Function, actual, real-time, transcription, work, directly, invoked, contact, flow, triggered, kvsConsumerTrigger, call, manually]
---

# kvsTranscriber Lambda Function

> This Lambda function does the actual real-time transcription work.
      This function is not directly invoked from a contact flow. It is triggered by the
      kvsConsumerTrigger Lambda function. You do not need to call this function
    manually.

# kvsTranscriber Lambda Function

This Lambda function does the actual real-time transcription work. This function is not directly invoked from a contact flow. It is triggered by the kvsConsumerTrigger Lambda function. You do not need to call this function manually.

**Configuration:** This function is available to Service Cloud Voice customers who are using an Amazon Connect instance that’s provided by Salesforce. No additional configuration is necessary. See a [sample version of the invokeTelephonyIntegrationApi Lambda function](https://github.com/service-cloud-voice/ServiceCloudVoiceLambdas/tree/master/invokeTelephonyIntegrationApi) in GitHub.

**Usage:** The [kvsConsumerTrigger](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm "This Lambda function is the initiation point for starting real-time transcription.") Lambda function automatically calls this function. You do not need to call this function manually.

This Lambda function performs the following steps:

1.  Generates the JWT token that is required to authenticate into the Salesforce Telephony Integration API.
2.  Starts Amazon real-time transcription and hooks the audio stream (between rep and end user) to the transcription service.
3.  Parses the generated transcripts and invokes the CreateMessage API on the telephony Integration Service to stream the transcripts into Salesforce.
4.  Stops the transcription when the call ends.

To learn how to use Amazon Transcribe’s custom vocabulary and vocabulary filtering, see [Improve Amazon Transcribe's Transcription Accuracy with Custom Vocabulary and Filters](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_vocabulary.htm "Use a custom vocabulary to ensure that your transcript displays terms with the correct spelling and capitalization. Use vocabulary filters to filter or mask unwanted content, like profanity.").

## Related Topics

- kvsConsumerTrigger (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm)
- Improve Amazon Transcribe's Transcription Accuracy with Custom Vocabulary and Filters (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_vocabulary.htm)
