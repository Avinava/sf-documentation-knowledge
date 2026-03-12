---
title: "MultiorgHandleContactEventsFunction Lambda Function"
domain: voice-developer-guide
topic: multiorghandlecontacteventsfunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.481Z
estimatedTokens: 302
keywords: [MultiorgHandleContactEventsFunction, Lambda, Function, handles, disconnect, event, missed, abandoned, call, ensures, Pending, Service, Routing, PSR, record]
---

# MultiorgHandleContactEventsFunction Lambda Function

> This Lambda function handles the disconnect event for a missed or abandoned call, and
  ensures that the Pending Service Routing (PSR) record is cleared in Salesforce.

# MultiorgHandleContactEventsFunction Lambda Function

This Lambda function handles the disconnect event for a missed or abandoned call, and ensures that the Pending Service Routing (PSR) record is cleared in Salesforce.

Applies to this telephony model.

-   Service Cloud Voice with Partner Telephony from Amazon Connect (Voice manually integrated with your Amazon Connect through XML import)

Configuration: This function is available if you have a Partner Amazon Contact Center with a multi-org set up created by running the multi-org [cloudformation stack](https://github.com/service-cloud-voice/ServiceCloudVoiceLambdas/tree/master/cloudformation). This Lambda is installed with the Service Cloud Voice contact center version 19.0 and later versions. It is installed in your AWS account when you run the multi-org [cloudformation stack](https://github.com/service-cloud-voice/ServiceCloudVoiceLambdas/tree/master/cloudformation).

Usage: This Lambda function is required for the multi-org set up to read the SecretName from a cache using the contactID. You don’t have to invoke this Lambda function manually. After a call disconnects, the Amazon EventBridge automatically invokes this Lambda function.
