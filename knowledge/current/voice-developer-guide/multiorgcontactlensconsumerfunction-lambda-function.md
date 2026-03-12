---
title: "MultiorgContactLensConsumerFunction Lambda Function"
domain: voice-developer-guide
topic: multiorgcontactlensconsumerfunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.786Z
estimatedTokens: 183
keywords: [MultiorgContactLensConsumerFunction, Lambda, Function, real-time, transcripts, intelligence, signals, generated, Contact, Lens, Amazon, Connect, ContactLensProcessorFunction]
---

# MultiorgContactLensConsumerFunction Lambda Function

> This Lambda function gets real-time transcripts and intelligence signals generated from
  Contact Lens for Amazon Connect and sends them to the ContactLensProcessorFunction Lambda
  function.

# MultiorgContactLensConsumerFunction Lambda Function

This Lambda function gets real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to the ContactLensProcessorFunction Lambda function.

Applies to this telephony model.

-   Service Cloud Voice with Partner Telephony from Amazon Connect (Voice manually integrated with your Amazon Connect through XML import)

Configuration: This Lambda is installed with the Service Cloud Voice contact center version 19.0 and later versions. This Lambda function is created in your AWS account, when you execute the CloudFormation template to set up multi-org.

Usage: This function reads the SecretName from a cache using the contactID.
