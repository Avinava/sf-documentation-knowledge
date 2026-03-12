---
title: "ContactLensProcessorFunction Lambda Function"
domain: voice-developer-guide
topic: contactlensprocessorfunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.634Z
estimatedTokens: 990
keywords: [ContactLensProcessorFunction, Lambda, Function, processes, real-time, transcripts, intelligence, signals, generated, Contact, Lens, Amazon, Connect, Salesforce, invoked]
---

# ContactLensProcessorFunction Lambda Function

> This Lambda function processes real-time transcripts and intelligence
      signals generated from Contact Lens for Amazon Connect and sends them to Salesforce. This
      Lambda function is invoked by the ContactLensConsumerFunction Lambda function with the generated
      real-time transcripts and events.

# ContactLensProcessorFunction Lambda Function

This Lambda function processes real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to Salesforce. This Lambda function is invoked by the ContactLensConsumerFunction Lambda function with the generated real-time transcripts and events.

**Configuration:** This function is available to Service Cloud Voice customers who are using an Amazon Connect instance that’s provided by Salesforce. This function is available in Service Cloud Voice contact center 11.1 and later versions.

**Usage:** This function performs these actions:

1.  Reads the transcripts sent from the [ContactLensConsumerFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensconsumerfunction.htm "This Lambda function gets real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to the ContactLensProcessorFunction Lambda function.") Lambda function in real time and sends the transcripts to Salesforce.
2.  Processes the transcripts using the [Create Transcripts in Bulk](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript_bulk.htm "Creates transcripts in bulk across multiple voice calls in real time. These voice calls can include inbound calls, transfer calls, outbound calls, callback calls, and consult calls.") (/telephony/v1/voiceCalls/messages) REST API.
3.  Processes the conversation intelligence signals sent from the [ContactLensConsumerFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensconsumerfunction.htm "This Lambda function gets real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to the ContactLensProcessorFunction Lambda function.") Lambda function in real time and sends the signals to Salesforce.

This function supports inbound calls, transfer calls, outbound calls, and callback calls.

-   **[Increase Performance of the ContactLensProcessor Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensprocessorfunction_increase_performance.htm)**
    For contact center 11.1 and above, you can enable Contact Lens to use the AWS SSM Lambda extension to fetch keys from the parameter store. This extension increases the Lambda function’s performance. To use this enhancement, configure the ContactLensProcessor Lambda function by adding the AWS-Parameters-and-Secrets-Lambda-Extension layer and the USE\_SSM\_LAMBDA\_EXTENSION environment variable for the Lambda function.

#### See Also

-   [Create Transcripts in Bulk](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript_bulk.htm "Creates transcripts in bulk across multiple voice calls in real time. These voice calls can include inbound calls, transfer calls, outbound calls, callback calls, and consult calls.")

-   [ContactLensConsumerFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensconsumerfunction.htm "This Lambda function gets real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to the ContactLensProcessorFunction Lambda function.")

-   [Increase Performance of the ContactLensProcessor Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensprocessorfunction_increase_performance.htm "For contact center 11.1 and above, you can enable Contact Lens to use the AWS SSM Lambda extension to fetch keys from the parameter store. This extension increases the Lambda function’s performance. To use this enhancement, configure the ContactLensProcessor Lambda function by adding the AWS-Parameters-and-Secrets-Lambda-Extension layer and the USE_SSM_LAMBDA_EXTENSION environment variable for the Lambda function.")

## Related Topics

- ContactLensConsumerFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensconsumerfunction.htm)
- Create Transcripts in Bulk (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript_bulk.htm)
- Increase Performance of the ContactLensProcessor Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensprocessorfunction_increase_performance.htm)
- ContactLensConsumerFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensconsumerfunction.htm)
