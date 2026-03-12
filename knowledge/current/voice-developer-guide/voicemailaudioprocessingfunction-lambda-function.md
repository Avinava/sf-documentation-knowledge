---
title: "VoiceMailAudioProcessingFunction Lambda Function"
domain: voice-developer-guide
topic: voicemailaudioprocessingfunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.694Z
estimatedTokens: 534
keywords: [VoiceMailAudioProcessingFunction, Lambda, Function, processes, voicemail, recordings]
---

# VoiceMailAudioProcessingFunction Lambda Function

> This Lambda function processes voicemail recordings.

# VoiceMailAudioProcessingFunction Lambda Function

This Lambda function processes voicemail recordings.

**Configuration:** Configure this function if you want to set up voicemail.

This function applies to the [Service Cloud Voice with Partner Telephony from Amazon Connect](https://help.salesforce.com/s/articleView?id=service.voice_turn_on_parent.htm&type=5&language=en_US) telephony setup.

**Description:** Use this function to process voicemail recordings. This function isn’t directly invoked from a contact flow. It’s triggered when Amazon Connect generates a Contact Record (previously called contact trace record or CTR) event.

This Lambda function performs the following steps:

1.  Gets the voicemail recordings from Amazon Kinesis.
2.  Processes the data. Converts the chunks of recordings into a WAV file, calculates the duration of the file, and tags the file with metadata.
3.  Puts the files into the voicemail\_recordings folder in the contact center’s Amazon S3 bucket.

For an example, see [Set Up Voicemail](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm "Configure voicemail support to route voicemail recordings and transcriptions to reps. Reps can play back the recordings and transcriptions routed to them at any time.").

#### See Also

-   [Enable Voicemail Support](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm "Configure voicemail support to route voicemail recordings and transcriptions to reps. Reps can play back the recordings and transcriptions routed to them at any time.")

-   [VoiceMailTranscribeFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailtranscribefunction.htm "This Lambda function transcribes voicemail recordings.")

-   [VoiceMailPackagingFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailpackagingfunction.htm "This Lambda function creates a VoiceCall record, attaches the voicemail recording and transcription files to the record, and routes it all to the Omni-Channel flow.")

## Related Topics

- Set Up Voicemail (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm)
- Enable Voicemail Support (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm)
- VoiceMailTranscribeFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailtranscribefunction.htm)
- VoiceMailPackagingFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailpackagingfunction.htm)
