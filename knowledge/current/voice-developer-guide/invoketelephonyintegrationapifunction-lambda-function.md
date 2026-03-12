---
title: "InvokeTelephonyIntegrationApiFunction Lambda Function"
domain: voice-developer-guide
topic: invoketelephonyintegrationapifunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.665Z
estimatedTokens: 1883
keywords: [InvokeTelephonyIntegrationApiFunction, Lambda, Function, invokeTelephonyIntegrationApi, actions, orchestrate, voice, call, handling, routing, integrates, telephony, events, Salesforce, ensuring]
---

# InvokeTelephonyIntegrationApiFunction Lambda Function

> The invokeTelephonyIntegrationApi function contains actions which
      orchestrate voice call handling and routing. The function integrates telephony events with
      Salesforce, ensuring calls are properly processed and directed through the appropriate
      Omni-Channel logic.

# InvokeTelephonyIntegrationApiFunction Lambda Function

The invokeTelephonyIntegrationApi function contains actions which orchestrate voice call handling and routing. The function integrates telephony events with Salesforce, ensuring calls are properly processed and directed through the appropriate Omni-Channel logic.

**Configuration:** This function is available to Service Cloud Voice customers who are using an Amazon Connect instance that’s provided by Salesforce. No additional configuration is necessary. See a [sample version of the invokeTelephonyIntegrationApi Lambda function](https://github.com/service-cloud-voice/ServiceCloudVoiceLambdas/tree/master/invokeTelephonyIntegrationApi) in GitHub.

**Description:** Use this Lambda function to create a VoiceCall record, execute an Omni-Channel flow, create a ContactRequest record for a callback, or route a voice call to a rep, queue, or flow. Creating a VoiceCall is essential to get the call working, which is why this function is typically one of the first blocks in your contact flow for an inbound call. This Lambda is invoked to perform the following actions:

-   Create a VoiceCall for an inbound call. This action occurs when a customer calls into the call center.
-   Create a VoiceCall for a call transfer. This action occurs when a rep transfers to another rep or queue.
-   Create a ContactRequest for a callback. This action occurs when a customer requests a callback and provides their phone number for a rep to return their call.
-   Execute an Omni-Channel flow. This action occurs when work is ready to be routed.
-   Cancel an Omni-Channel flow. This action occurs when an existing flow needs to be canceled.
-   Route a voice call. This action occurs when a voice call or transferred voice call is ready to be routed through Omni-Channel Unified Routing with Salesforce as the routing engine.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_developer_guide)

#### Important

When a Lambda function hasn’t been invoked after a period of time, the AWS framework unloads the function from memory. The next time the function is invoked, it is “cold” and takes longer to load into memory. This delay can cause a timeout in the contact flow. To avoid this behavior, [learn how to keep this function warm](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_keep_warm.htm "When a Lambda function hasn’t been invoked after a period of time, the AWS framework unloads the function from memory. The next time the function is invoked, it is “cold” and takes longer to load into memory. This delay can cause a timeout in the contact flow. These instructions describe how to keep your Lambda function “warm” using a Lambda function trigger.").

**Usage:** Place this Lambda within one of the relevant contact flows (either for an inbound call or a transfer). This Lambda takes a methodName attribute as an argument. This attribute indicates the specific action that the Lambda must perform.

| Action | Attribute Key | Attribute Value |
| --- | --- | --- |
| Create a voice call for an inbound call | methodName | createVoiceCall |
| Create a voice call for a transfer | methodName | createTransferVC |
| Request routing instructions from an Omni-Channel flow and create a PendingServiceRequest.NoteCalls routed with this method appear in the Queue Backlog tab of Command Center for Service. If a PendingServiceRequest isn’t created and the voice call isn’t routed by Omni-Channel, then the Queue Backlog tab doesn’t show the call. For example, calls that are manually assigned to a rep don’t appear in that tab.Optionally, provide these inputs:flowDevName. Set the Omni-Channel flow using its developer name.fallbackQueue. Set the fallback queue using its Salesforce queue developer name or ID.Custom parameters with prefix flowInput-. Set additional inputs to the Omni-Channel flow.By default, Service Cloud Voice uses the Omni-Channel flow (or fallback queue) specified for the phone channel that matches the dialed number. If the dialed number doesn’t match an existing phone channel, you can optionally set the Omni-Channel flow or fallback queue in these input parameters. The fallback queue is used only if the specified flow doesn’t exist or one isn’t specified. | methodName | executeOmniFlow |
| Cancels an Omni-Channel flow that was previously executed. This method also calls the Clear Routing REST API to clear the PendingServiceRouting (PSR) record. | methodName | cancelOmniFlowExecution |
| Creates a callback request for a voice call by creating a ContactRequest record. Omni-Channel routes the contact request based on the contact center channel’s Callback Routing selection. For Omni-Channel Unified Routing only. | methodName | callbackExecution |
| Routes or transfers a voice call to a rep, agent, queue, or flow. Creates a PendingServiceRequest. For Omni-Channel Unified Routing only.Provide these inputs:routingTarget. Specify the Omni-Channel routing target using a Salesforce agent ID, queue ID, or Omni-Channel flow ID. Required.fallbackQueue. Set the fallback queue using its ID, if a flow is the routingTarget. Optional.Custom parameters with prefix flowInput-. Set additional inputs to the Omni-Channel flow, if a flow is the routingTarget. Optional. | methodName | routeVoiceCall |

When creating a voice call record, you can also specify custom data to be added to fields on the VoiceCall record. To add custom data, create a **Set contact attributes** block before the Lambda call. For the destination attribute, specify the name of the custom field with the “sfdc-” prefix added. The value of this attribute is the data to pass into the custom field For an example, see [Pass Data from the Interactive Voice Response (IVR) System](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_interactive_voice_response.htm "This example explains how to pass data from the Interactive Voice Response (IVR) system in Amazon Connect to your Salesforce org.").

| Output Attribute Name | Description |
| --- | --- |
| voiceCallId | ID of the voice call. |

| Output Attribute Name | Description |
| --- | --- |
| agent | The rep to route the call to |
| queue | The queue to route the call to |
| errors | List of errors why the call couldn’t be routed |

| Output Attribute Name | Description |
| --- | --- |
| recordId | ID of the contact request for a callback. |

-   **[Keep the InvokeTelephonyIntegrationApiFunction Lambda Function Warm](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_keep_warm.htm)**
    When a Lambda function hasn’t been invoked after a period of time, the AWS framework unloads the function from memory. The next time the function is invoked, it is “cold” and takes longer to load into memory. This delay can cause a timeout in the contact flow. These instructions describe how to keep your Lambda function “warm” using a Lambda function trigger.

#### See Also

-   [Keep the InvokeTelephonyIntegrationApiFunction Lambda Function Warm](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_keep_warm.htm "When a Lambda function hasn’t been invoked after a period of time, the AWS framework unloads the function from memory. The next time the function is invoked, it is “cold” and takes longer to load into memory. This delay can cause a timeout in the contact flow. These instructions describe how to keep your Lambda function “warm” using a Lambda function trigger.")

## Related Topics

- learn how to keep this function
            warm (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_keep_warm.htm)
- Clear Routing (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_clear_routing.htm)
- Pass Data from the Interactive Voice Response (IVR) System (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_interactive_voice_response.htm)
- Keep the InvokeTelephonyIntegrationApiFunction Lambda Function Warm (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_keep_warm.htm)
