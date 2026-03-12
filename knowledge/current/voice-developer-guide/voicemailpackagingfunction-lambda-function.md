---
title: "VoiceMailPackagingFunction Lambda Function"
domain: voice-developer-guide
topic: voicemailpackagingfunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.696Z
estimatedTokens: 601
keywords: [VoiceMailPackagingFunction, Lambda, Function, creates, VoiceCall, record, attaches, voicemail, recording, transcription, files, routes, Omni-Channel, flow]
---

# VoiceMailPackagingFunction Lambda Function

> This Lambda function creates a VoiceCall record, attaches the
      voicemail recording and transcription files to the record, and routes it all to the
      Omni-Channel flow.

# VoiceMailPackagingFunction Lambda Function

This Lambda function creates a VoiceCall record, attaches the voicemail recording and transcription files to the record, and routes it all to the Omni-Channel flow.

**Configuration:** Configure this function if you want to set up voicemail.

This function applies to the [Service Cloud Voice with Partner Telephoney from Amazon Connect](https://help.salesforce.com/s/articleView?id=service.voice_turn_on_parent.htm&type=5&language=en_US) telephony setup.

**Description:**This function creates a VoiceCall record, attaches the voicemail recording and transcription files to the record, and routes it all to the Omni-Channel flow. This function isn't directly invoked from a contact flow. It's triggered when a voicemail transcription file is added to the voicemail\_transcriptions folder in the contact center’s Amazon S3 bucket.

This Lambda function performs the following steps:

1.  Gets the voicemail recording and transcription files from the contact center’s Amazon S3 bucket.
2.  Creates a VoiceCall record. Sets the callOrigin parameter to Voicemail, and sets other parameters, including from, to, and duration.
3.  Attaches the voicemail recording and the transcription files to the VoiceCall record.
4.  Routes the VoiceCall record to the Omni-Channel flow that was configured in the contact center.

For an example, see [Set Up Voicemail](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm "Configure voicemail support to route voicemail recordings and transcriptions to reps. Reps can play back the recordings and transcriptions routed to them at any time.").

#### See Also

-   [Enable Voicemail Support](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm "Configure voicemail support to route voicemail recordings and transcriptions to reps. Reps can play back the recordings and transcriptions routed to them at any time.")

-   [VoiceMailAudioProcessingFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailaudioprocessingfunction.htm "This Lambda function processes voicemail recordings.")

-   [VoiceMailTranscribeFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailtranscribefunction.htm "This Lambda function transcribes voicemail recordings.")

## Related Topics

- Set Up Voicemail (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm)
- Enable Voicemail Support (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm)
- VoiceMailAudioProcessingFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailaudioprocessingfunction.htm)
- VoiceMailTranscribeFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailtranscribefunction.htm)
