---
title: "Set Up Call Transcription"
domain: voice-developer-guide
topic: set-up-call-transcription
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.564Z
estimatedTokens: 482
keywords: [Call, Transcription, convert, conversations, text, real-time, transcripts, appear, voice, record, real, time, Service, Cloud, supports]
---

# Set Up Call Transcription

> To convert call conversations to text, set up real-time call
      transcription. The transcripts appear in the voice call record in real time and after the
      call. Service Cloud Voice supports transcription from Amazon Transcribe and Contact Lens, and
      both services are available with Amazon Connect.

# Set Up Call Transcription

To convert call conversations to text, set up real-time call transcription. The transcripts appear in the voice call record in real time and after the call. Service Cloud Voice supports transcription from Amazon Transcribe and Contact Lens, and both services are available with Amazon Connect.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise and Unlimited Editions |
| Available in: Sales Cloud, Service Cloud, and Government Cloud as an add-on license. Government Cloud is supported only on Service Cloud Voice with Amazon Connect and Service Cloud Voice with Partner Telephony from Amazon Connect. |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

#### Note

When an additional rep joins a call between a rep and a customer, Amazon Connect stores the audio streams from each rep in a separate channel. As a result, you might see duplicate call transcripts, and the initial reps words might be attributed to the customer. This issue applies to transcription from both Amazon Transcribe and Contact Lens.

-   **[Transcribe Calls with Amazon Transcribe](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_transcribe_with_amazon_transcribe.htm)**
    Use Amazon Transcribe to transcribe calls in real time. With Amazon Transcribe, transcriptions are capped at 15 minutes because of a Lambda function limitation.
-   **[Transcribe Longer Calls with Contact Lens](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_lens.htm)**
    Use Contact Lens to transcribe calls that are longer than 15 minutes. If you use Amazon Transcribe, only the first 15 minutes of a call are transcribed due to a Lambda function limitation. To trigger real-time transcription of a call with Contact Lens, enable Contact Lens and real-time transcription for Amazon Connect in your contact flow.

## Related Topics

- Transcribe Calls with Amazon Transcribe (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_transcribe_with_amazon_transcribe.htm)
- Transcribe Longer Calls with Contact Lens (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_lens.htm)
