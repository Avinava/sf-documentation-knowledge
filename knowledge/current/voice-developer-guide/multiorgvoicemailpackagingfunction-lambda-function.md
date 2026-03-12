---
title: "MultiorgVoiceMailPackagingFunction Lambda Function"
domain: voice-developer-guide
topic: multiorgvoicemailpackagingfunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.888Z
estimatedTokens: 251
keywords: [MultiorgVoiceMailPackagingFunction, Lambda, Function, creates, VoiceCall, record, attaches, voicemail, recording, transcription, files, routes, Omni-Channel, flow]
---

# MultiorgVoiceMailPackagingFunction Lambda Function

> This Lambda function creates a VoiceCall record, attaches the voicemail recording and
  transcription files to the record, and routes it to the Omni-Channel flow.

# MultiorgVoiceMailPackagingFunction Lambda Function

This Lambda function creates a VoiceCall record, attaches the voicemail recording and transcription files to the record, and routes it to the Omni-Channel flow.

Applies to this telephony model.

-   Service Cloud Voice with Partner Telephony from Amazon Connect (Voice manually integrated with your Amazon Connect through XML import)

Configuration: This function is available if you have a Partner Amazon Contact Center with a multi-org set up created by running the multi-org [cloudformation stack](https://github.com/service-cloud-voice/ServiceCloudVoiceLambdas/tree/master/cloudformation). This Lambda is installed with the Service Cloud Voice contact center version 19.0 and later versions.. It is installed in your AWS account when you run the multi-org [cloudformation stack](https://github.com/service-cloud-voice/ServiceCloudVoiceLambdas/tree/master/cloudformation).

Usage: This Lambda function is designed for use in a multi-org set up.
