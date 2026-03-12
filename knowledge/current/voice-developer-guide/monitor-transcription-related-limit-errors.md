---
title: "Monitor Transcription-Related Limit Errors"
domain: voice-developer-guide
topic: monitor-transcription-related-limit-errors
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.780Z
estimatedTokens: 591
keywords: [Monitor, Transcription-Related, Limit, Errors, org, exceeds, transcription, utterances, longer, transcribed, Track, hits, custom, VoiceCall]
---

# Monitor Transcription-Related Limit Errors

> When your org exceeds the transcription limit, utterances are no longer transcribed.
  Track when your org hits the transcription limit by using a custom field on the VoiceCall
  object.

# Monitor Transcription-Related Limit Errors

When your org exceeds the transcription limit, utterances are no longer transcribed. Track when your org hits the transcription limit by using a custom field on the VoiceCall object.

When your org hits the transcription limit during a call, the kvsTranscriber Lambda function creates a contact attribute named sf\_realtime\_transcription\_status\_\_c and sets its value to the limit error message. When the call ends, the CTRDataSync Lambda function passes this value to Salesforce, updating the custom field on the affected VoiceCall record for the call where the transcription exceeded the limit. If the custom field on the VoiceCall record is populated, it means that the org exceeded the limit during that call. You can look at VoiceCall records or create a custom report to aggregate the data.

1.  In Salesforce, create a custom field called sf\_realtime\_transcription\_status\_\_c on the VoiceCall object.
2.  Add the custom field to the VoiceCall record page layout.
3.  Create a custom report that pulls records where the sf\_realtime\_transcription\_status\_\_c field value is populated to see which calls were impacted by the transcription limit.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_developer_guide)

#### Important

If you change the name of the custom field to a different value than sf\_realtime\_transcription\_status\_\_c, you must manually modify both [kvsTranscriber](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvstranscriber.htm "This Lambda function does the actual real-time transcription work. This function is not directly invoked from a contact flow. It is triggered by the kvsConsumerTrigger Lambda function. You do not need to call this function manually.") and [CTRDataSync](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm "After the contact record (previously called contact trace record or CTR) is created in Amazon, this Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values of multiple VoiceCall object fields. This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream.") Lambda functions to accept the new name.

## Related Topics

- kvsTranscriber (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvstranscriber.htm)
- CTRDataSync (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm)
