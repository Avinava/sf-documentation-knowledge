---
title: "MultiorgPostCallAnalysisTriggerFunction Lambda Function"
domain: voice-developer-guide
topic: multiorgpostcallanalysistriggerfunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.788Z
estimatedTokens: 203
keywords: [MultiorgPostCallAnalysisTriggerFunction, Lambda, Function, automatically, sentiment, data, contact, center’s, Amazon, bucket, post, call, analysis]
---

# MultiorgPostCallAnalysisTriggerFunction Lambda Function

> This Lambda function automatically gets sentiment data from a contact center’s Amazon S3
  bucket for post call analysis.

# MultiorgPostCallAnalysisTriggerFunction Lambda Function

This Lambda function automatically gets sentiment data from a contact center’s Amazon S3 bucket for post call analysis.

Applies to this telephony model.

-   Service Cloud Voice with Partner Telephony from Amazon Connect (Voice manually integrated with your Amazon Connect through XML import)

Configuration: This function is available if you have a Partner Amazon Contact Center with a multi-org set up created by running the multi-org [cloudformation stack](https://github.com/service-cloud-voice/ServiceCloudVoiceLambdas/tree/master/cloudformation). This Lambda is installed with the Service Cloud Voice contact center version 19.0 and later versions.

Usage: This Lambda function is designed for use in a multi-org set up for post call analysis.
