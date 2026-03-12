---
title: "ContactLensConsumerFunction Lambda Function"
domain: voice-developer-guide
topic: contactlensconsumerfunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.631Z
estimatedTokens: 669
keywords: [ContactLensConsumerFunction, Lambda, Function, real-time, transcripts, intelligence, signals, generated, Contact, Lens, Amazon, Connect, ContactLensProcessorFunction]
---

# ContactLensConsumerFunction Lambda Function

> This Lambda function gets real-time transcripts and intelligence
      signals generated from Contact Lens for Amazon Connect and sends them to the
      ContactLensProcessorFunction Lambda function.

# ContactLensConsumerFunction Lambda Function

This Lambda function gets real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to the ContactLensProcessorFunction Lambda function.

**Configuration:** This function is available to Service Cloud Voice customers who are using an Amazon Connect instance that’s provided by Salesforce. This function is available in Service Cloud Voice contact center 9.0 and later versions. Starting in contact center version 11.1, we split this Lambda function into two by introducing the ContactLensProcessorFunction Lambda function to improve performance.

**Usage:** This function performs these actions:

1.  Reads the transcripts generated from Contact Lens in real time and sends them to the [ContactLensProcessorFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensprocessorfunction.htm "This Lambda function processes real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to Salesforce. This Lambda function is invoked by the ContactLensConsumerFunction Lambda function with the generated real-time transcripts and events.") Lambda function.
2.  Reads the conversation intelligence signals generated from Contact Lens in real time and sends them to the [ContactLensProcessorFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensprocessorfunction.htm "This Lambda function processes real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to Salesforce. This Lambda function is invoked by the ContactLensConsumerFunction Lambda function with the generated real-time transcripts and events.") Lambda function.

This function supports inbound calls, transfer calls, outbound calls, and callback calls.

#### See Also

-   [Create Transcripts in Bulk](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript_bulk.htm "Creates transcripts in bulk across multiple voice calls in real time. These voice calls can include inbound calls, transfer calls, outbound calls, callback calls, and consult calls.")

-   [ContactLensProcessorFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensprocessorfunction.htm "This Lambda function processes real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to Salesforce. This Lambda function is invoked by the ContactLensConsumerFunction Lambda function with the generated real-time transcripts and events.")

## Related Topics

- ContactLensProcessorFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensprocessorfunction.htm)
- Create Transcripts in Bulk (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript_bulk.htm)
- ContactLensProcessorFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensprocessorfunction.htm)
