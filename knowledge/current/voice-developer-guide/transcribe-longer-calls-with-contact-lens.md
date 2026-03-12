---
title: "Transcribe Longer Calls with Contact Lens"
domain: voice-developer-guide
topic: transcribe-longer-calls-with-contact-lens
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.465Z
estimatedTokens: 611
keywords: [Transcribe, Longer, Calls, Contact, Lens, minutes, Amazon, call, transcribed, due, Lambda, function, limitation, trigger, real-time]
---

# Transcribe Longer Calls with Contact Lens

> Use Contact Lens to transcribe calls that are longer than 15 minutes. If you use Amazon
  Transcribe, only the first 15 minutes of a call are transcribed due to a Lambda function
  limitation. To trigger real-time transcription of a call with Contact Lens, enable Contact Lens
  and real-time transcription for Amazon Connect in your contact flow.

# Transcribe Longer Calls with Contact Lens

Use Contact Lens to transcribe calls that are longer than 15 minutes. If you use Amazon Transcribe, only the first 15 minutes of a call are transcribed due to a Lambda function limitation. To trigger real-time transcription of a call with Contact Lens, enable Contact Lens and real-time transcription for Amazon Connect in your contact flow.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise and Unlimited Editions |
| Available in: Sales Cloud, Service Cloud, and Government Cloud as an add-on license. Government Cloud is supported only on Service Cloud Voice with Amazon Connect and Service Cloud Voice with Partner Telephony from Amazon Connect. |


For a list of supported transcription languages with Contact Lens, see the [Amazon documentation](https://docs.aws.amazon.com/connect/latest/adminguide/supported-languages.html#supported-languages-contact-lens "HTML (New Window)").

-   **[Verify that Contact Lens in Amazon Connect is Enabled](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_lens_enable.htm)**
    Contact Lens must be enabled to transcribe calls. To verify that Contact Lens is enabled, you must have AWS IAM permissions with the ability to view Contact Lens details in Amazon Connect.
-   **[Create a Contact Flow with Contact Lens](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_lens_in_new_flow.htm)**
    To help you get started, use the packaged sample contact flows already set up with Contact Lens.
-   **[Enable Contact Lens and Transcription in an Existing Contact Flow](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_lens_in_existing_flow.htm)**
    You can enable Contact Lens and real-time transcription in contact flows that you already created. To enable Contact Lens and transcription in an existing contact flow, add the recording block to the flow and enable real-time and post-call analytics.
-   **[Improve Contact Lens Transcription Accuracy with a Custom Vocabulary](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_lens_custom_vocabulary.htm)**
    Add one or more custom vocabularies to transcribe domain specific terminology correctly. Use it to fix the capitalization and spelling of domain-specific lingo and to mask text. To mask text, enter the term in the custom vocabulary file and display the term as \*\*\*.

## Related Topics

- Verify that Contact Lens in Amazon Connect is Enabled (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_lens_enable.htm)
- Create a Contact Flow with Contact Lens (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_lens_in_new_flow.htm)
- Enable Contact Lens and Transcription in an Existing Contact Flow (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_lens_in_existing_flow.htm)
- Improve Contact Lens Transcription Accuracy with a Custom Vocabulary (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_lens_custom_vocabulary.htm)
