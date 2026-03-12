---
title: "VoiceMailTranscribeFunction Lambda Function"
domain: voice-developer-guide
topic: voicemailtranscribefunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.699Z
estimatedTokens: 519
keywords: [VoiceMailTranscribeFunction, Lambda, Function, transcribes, voicemail, recordings]
---

# VoiceMailTranscribeFunction Lambda Function

> This Lambda function transcribes voicemail
    recordings.

# VoiceMailTranscribeFunction Lambda Function

This Lambda function transcribes voicemail recordings.

**Configuration:** Configure this function if you want to set up voicemail.

This function applies to the [Service Cloud Voice with Partner Telephoney from Amazon Connect](https://help.salesforce.com/s/articleView?id=service.voice_turn_on_parent.htm&type=5&language=en_US) telephony setup.

**Description:** This function transcribes voicemail recordings. This function isn't directly invoked from a contact flow. It's triggered when a voicemail recording file is added to the voicemail\_recordings folder in the contact center’s Amazon S3 bucket.

This Lambda function performs the following steps:

1.  Gets the voicemail recording files from the contact center’s Amazon S3 bucket.
2.  Transcribes the recordings.
3.  Puts the files into the voicemail\_transcriptions folder in the contact center’s Amazon S3 bucket.

For an example, see [Set Up Voicemail](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm "Configure voicemail support to route voicemail recordings and transcriptions to reps. Reps can play back the recordings and transcriptions routed to them at any time.").

#### See Also

-   [Enable Voicemail Support](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm "Configure voicemail support to route voicemail recordings and transcriptions to reps. Reps can play back the recordings and transcriptions routed to them at any time.")

-   [VoiceMailAudioProcessingFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailaudioprocessingfunction.htm "This Lambda function processes voicemail recordings.")

-   [VoiceMailPackagingFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailpackagingfunction.htm "This Lambda function creates a VoiceCall record, attaches the voicemail recording and transcription files to the record, and routes it all to the Omni-Channel flow.")

## Related Topics

- Set Up Voicemail (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm)
- Enable Voicemail Support (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm)
- VoiceMailAudioProcessingFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailaudioprocessingfunction.htm)
- VoiceMailPackagingFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailpackagingfunction.htm)
