---
title: "HandleContactEventsFunction Lambda Function"
domain: voice-developer-guide
topic: handlecontacteventsfunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.650Z
estimatedTokens: 538
keywords: [HandleContactEventsFunction, Lambda, Function, handles, disconnect, event, missed, abandoned, call, ensures, PendingServiceRouting, PSR, record, cleaned, Salesforce]
---

# HandleContactEventsFunction Lambda Function

> This Lambda function handles the disconnect event for a missed or
      abandoned call and ensures that the PendingServiceRouting (PSR) record is cleaned up in
      Salesforce. This function is automatically invoked by an Amazon EventBridge rule after a
      disconnect. You don’t need to call this function manually.

# HandleContactEventsFunction Lambda Function

This Lambda function handles the disconnect event for a missed or abandoned call and ensures that the PendingServiceRouting (PSR) record is cleaned up in Salesforce. This function is automatically invoked by an Amazon EventBridge rule after a disconnect. You don’t need to call this function manually.

**Configuration:** This function is available to Service Cloud Voice customers who are using an Amazon Connect instance that’s provided by Salesforce. This Lambda is installed with Service Cloud Voice contact center version 8.0 or later. See [Update Your Contact Center](https://help.salesforce.com/s/articleView?id=service.voice_update_cc.htm&type=5&language=en_US) for more details. No additional configuration is necessary. See a [sample version of the invokeTelephonyIntegrationApi Lambda function](https://github.com/service-cloud-voice/ServiceCloudVoiceLambdas/tree/master/invokeTelephonyIntegrationApi) in GitHub.

**Usage:** You don’t need to call this function manually.

This function calls the [InvokeTelephonyIntegrationApiFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm "The invokeTelephonyIntegrationApi function contains actions which orchestrate voice call handling and routing. The function integrates telephony events with Salesforce, ensuring calls are properly processed and directed through the appropriate Omni-Channel logic.") Lambda function using the cancelOmniFlowExecution method. This method cancels the the Omni-Channel flow and calls the [Clear Routing](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_clear_routing.htm "Deletes the PendingServiceRouting (PSR) record for a voice call. This API doesn’t need to be called for most scenarios; the PSR record is automatically deleted when the call is no longer being routed. However, there are some scenarios, like for missed or abandoned calls when using partner telephony systems (excluding Amazon Connect), where you must explicitly call this API to clear the PSR record.") REST API to clear the PendingServiceRouting (PSR) record.

## Related Topics

- InvokeTelephonyIntegrationApiFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm)
- Clear Routing (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_clear_routing.htm)
