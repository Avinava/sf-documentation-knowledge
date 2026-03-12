---
title: "Set Up Call Transcription with Amazon Transcribe"
domain: voice-developer-guide
topic: set-up-call-transcription-with-amazon-transcribe
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.433Z
estimatedTokens: 547
keywords: [Call, Transcription, Amazon, Transcribe, real-time, configure, Connect, contact, flow, invoke, kvsConsumerTrigger, Lambda, function, verify, AWS]
---

# Set Up Call Transcription with Amazon Transcribe

> To set up real-time call transcription with Amazon Transcribe,
      configure the Amazon Connect contact flow to invoke the kvsConsumerTrigger Lambda function,
      and verify the Amazon AWS region and service quota settings.

# Set Up Call Transcription with Amazon Transcribe

To set up real-time call transcription with Amazon Transcribe, configure the Amazon Connect contact flow to invoke the kvsConsumerTrigger Lambda function, and verify the Amazon AWS region and service quota settings.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise and Unlimited Editions |
| Available in: Sales Cloud, Service Cloud, and Government Cloud as an add-on license. Government Cloud is supported only on Service Cloud Voice with Amazon Connect and Service Cloud Voice with Partner Telephony from Amazon Connect. |


| Ease of Implementation | Medium |
| --- | --- |
| Estimated Time to Implement | 20 minutes |

1.  Configure the Amazon Connect contact flow to invoke the kvsConsumerTrigger Lambda function.

    If you need help with building a contact flow with this function, use one of these packaged contact flows that already have the kvsConsumerTrigger Lambda function set up.

    -   Sample SCV Agent Whisper Flow for Amazon Transcribe
    -   Sample SCV Outbound Flow With Transcription Using Amazon Transcribe

    To get the latest versions of these contact flows, see [Update Your Contact Center](https://help.salesforce.com/s/articleView?id=service.voice_update_cc.htm&type=5&language=en_US).

2.  Select an AWS region where Amazon Transcribe is available that is closest to where your contact center is located geographically. By default, the region for the transcription Lambda function is set to us-west-2, which is the Amazon Transcribe data center in Oregon. For best performance, select the AWS region that's closest to your contact center. For information about AWS regions that support Amazon Connect, see the [AWS Regional Services](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/) topic in the AWS documentation.
3.  If your organization streams many call transcriptions at the same time, ask AWS to increase the default service quota for concurrent transcription jobs for Amazon Transcribe. See [Increase Amazon Service Quota](https://help.salesforce.com/s/articleView?id=service.voice_setup_aws_service_quotas.htm&type=5&language=en_US).
