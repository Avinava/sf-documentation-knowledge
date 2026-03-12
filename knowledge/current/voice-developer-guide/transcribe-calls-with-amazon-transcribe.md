---
title: "Transcribe Calls with Amazon Transcribe"
domain: voice-developer-guide
topic: transcribe-calls-with-amazon-transcribe
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.580Z
estimatedTokens: 665
keywords: [Transcribe, Calls, Amazon, real, time, transcriptions, capped, minutes, because, Lambda, function, limitation]
---

# Transcribe Calls with Amazon Transcribe

> Use Amazon Transcribe to transcribe calls in real time. With Amazon
      Transcribe, transcriptions are capped at 15 minutes because of a Lambda function
      limitation.

# Transcribe Calls with Amazon Transcribe

Use Amazon Transcribe to transcribe calls in real time. With Amazon Transcribe, transcriptions are capped at 15 minutes because of a Lambda function limitation.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise and Unlimited Editions |
| Available in: Sales Cloud, Service Cloud, and Government Cloud as an add-on license. Government Cloud is supported only on Service Cloud Voice with Amazon Connect and Service Cloud Voice with Partner Telephony from Amazon Connect. |


| Ease of Implementation | Medium |
| --- | --- |
| Estimated Time to Implement | 45 minutes |

For a list of supported transcription languages with Amazon Transcribe, see the [Amazon](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) documentation.

-   **[Set Up Call Transcription with Amazon Transcribe](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_call_transcription_with_amazon_transcribe_setup.htm)**
    To set up real-time call transcription with Amazon Transcribe, configure the Amazon Connect contact flow to invoke the kvsConsumerTrigger Lambda function, and verify the Amazon AWS region and service quota settings.
-   **[Improve Amazon Transcribe's Transcription Accuracy with Custom Vocabulary and Filters](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_vocabulary.htm)**
    Use a custom vocabulary to ensure that your transcript displays terms with the correct spelling and capitalization. Use vocabulary filters to filter or mask unwanted content, like profanity.
-   **[Amazon Transcribe's Transcription Languages Supported by Service Cloud Voice](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_setup_amazon_connect_transcription_languages.htm)**
    Service Cloud Voice supports multiple languages.

#### See Also

-   [kvsConsumerTrigger Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm "This Lambda function is the initiation point for starting real-time transcription.")

-   [Amazon Connect Flows](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows.htm "An Amazon Connect flow depicts a customer’s voice call journey from beginning to end. Configure Service Cloud Voice flows for your contact center to determine how Salesforce handles inbound calls, outbound calls, and call transfers.")

-   [*Salesforce Help:* Update Your Contact Center](https://help.salesforce.com/s/articleView?id=service.voice_update_cc.htm&type=5&language=en_US "Salesforce Help: Update Your Contact Center - HTML (New Window)")

## Related Topics

- Set Up Call Transcription with Amazon Transcribe (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_call_transcription_with_amazon_transcribe_setup.htm)
- Improve Amazon Transcribe's Transcription Accuracy with Custom Vocabulary and Filters (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_vocabulary.htm)
- Amazon Transcribe's Transcription Languages Supported by Service Cloud Voice (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_setup_amazon_connect_transcription_languages.htm)
- kvsConsumerTrigger Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm)
- Amazon Connect Flows (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows.htm)
