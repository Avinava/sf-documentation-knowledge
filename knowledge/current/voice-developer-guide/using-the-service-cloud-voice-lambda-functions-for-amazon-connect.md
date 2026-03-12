---
title: "Using the Service Cloud Voice Lambda Functions for Amazon
  Connect"
domain: voice-developer-guide
topic: using-the-service-cloud-voice-lambda-functions-for-amazon-connect
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.682Z
estimatedTokens: 2633
keywords: [Service, Cloud, Voice, Lambda, Functions, Amazon, Connect, Salesforce, instance, provisioning, Lambdas, contact, flows]
---

# Using the Service Cloud Voice Lambda Functions for Amazon
  Connect

> Salesforce provides a set of Lambda functions, which are available within your Amazon
  Connect instance after provisioning the instance with Service Cloud Voice. You can use these
  Lambdas in Amazon Connect contact flows.

# Using the Service Cloud Voice Lambda Functions for Amazon Connect

Salesforce provides a set of Lambda functions, which are available within your Amazon Connect instance after provisioning the instance with Service Cloud Voice. You can use these Lambdas in Amazon Connect contact flows.

These Lambdas interact with Salesforce to perform the following actions:

-   Create a voice call ([InvokeTelephonyIntegrationApiFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm "The invokeTelephonyIntegrationApi function contains actions which orchestrate voice call handling and routing. The function integrates telephony events with Salesforce, ensuring calls are properly processed and directed through the appropriate Omni-Channel logic.")).
-   Start real-time transcription and save transcripts to Salesforce ([kvsConsumerTrigger](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm "This Lambda function is the initiation point for starting real-time transcription."), [kvsTranscriber](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvstranscriber.htm "This Lambda function does the actual real-time transcription work. This function is not directly invoked from a contact flow. It is triggered by the kvsConsumerTrigger Lambda function. You do not need to call this function manually.")).
-   Sync data between a contact record (previously called contact trace record or CTR) and a VoiceCall object ([CTRDataSyncFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm "After the contact record (previously called contact trace record or CTR) is created in Amazon, this Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values of multiple VoiceCall object fields. This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream.")).
-   Invoke the Salesforce REST API to perform CRUD operations on Salesforce objects, such as cases, accounts, or custom objects ([InvokeSalesforceRestApiFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm "This Lambda function calls the Salesforce REST API. You can place this Lambda function within a contact flow to create, update, or query Salesforce records.")).

For more detail, refer to the reference pages for the Lambda functions.

-   **[How to Use Salesforce Lambda Functions](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_functions.htm)**
    Salesforce provides several Lambda functions for use in your Service Cloud Voice contact flows. These functions are used by the sample contact flows, and you can also use them in your own contact flows.
-   **[Service Cloud Voice Authentication When Using InvokeSalesforceRestApiFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_auth.htm)**
    OAuth is required if you want to use the InvokeSalesforceRestApiFunction Lambda function. If you need to set up or modify the OAuth, refer to these instructions.
-   **[InvokeSalesforceRestApiFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm)**
    This Lambda function calls the Salesforce REST API. You can place this Lambda function within a contact flow to create, update, or query Salesforce records.
-   **[InvokeTelephonyIntegrationApiFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm)**
    The invokeTelephonyIntegrationApi function contains actions which orchestrate voice call handling and routing. The function integrates telephony events with Salesforce, ensuring calls are properly processed and directed through the appropriate Omni-Channel logic.
-   **[ContactLensConsumerFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensconsumerfunction.htm)**
    This Lambda function gets real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to the ContactLensProcessorFunction Lambda function.
-   **[ContactLensProcessorFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensprocessorfunction.htm)**
    This Lambda function processes real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to Salesforce. This Lambda function is invoked by the ContactLensConsumerFunction Lambda function with the generated real-time transcripts and events.
-   **[ContactDataSync Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactdatasyncfunction.htm)**
    This Lambda function fetches real-time transcripts generated by Contact Lens for Amazon Connect and uploads them to Salesforce using the Connect REST API. You can manually invoke this function to backfill missing transcripts in bulk. For multi-org use cases, the function reads the secretName and accessTokenSecretName from its payload and fetches the correct configuration values from the fetched secretName.
-   **[CTRDataSyncFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm)**
    After the contact record (previously called contact trace record or CTR) is created in Amazon, this Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values of multiple VoiceCall object fields. This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream.
-   **[HandleContactEventsFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_handlecontactevents.htm)**
    This Lambda function handles the disconnect event for a missed or abandoned call and ensures that the PendingServiceRouting (PSR) record is cleaned up in Salesforce. This function is automatically invoked by an Amazon EventBridge rule after a disconnect. You don’t need to call this function manually.
-   **[MultiorgContactLensConsumerFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_multi_contactlens.htm)**
    This Lambda function gets real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to the ContactLensProcessorFunction Lambda function.
-   **[MultiorgHandleContactEventsFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contactevents_multi.htm)**
    This Lambda function handles the disconnect event for a missed or abandoned call, and ensures that the Pending Service Routing (PSR) record is cleared in Salesforce.
-   **[MultiorgPostCallAnalysisTriggerFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_postcall_multi.htm)**
    This Lambda function automatically gets sentiment data from a contact center’s Amazon S3 bucket for post call analysis.
-   **[MultiorgVoiceMailPackagingFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_voicemail_multi.htm)**
    This Lambda function creates a VoiceCall record, attaches the voicemail recording and transcription files to the record, and routes it to the Omni-Channel flow.
-   **[PostCallAnalysisTriggerFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_postCallAnalysisTriggerFunction.htm)**
    This Lambda function automatically gets sentiment data from a contact center’s Amazon S3 bucket for post-call analysis.
-   **[RealtimeAlertLambda Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_realtimeAlert.htm)**
    This Lambda publishes the RealtimeAlertEvent platform event using the Salesforce REST API. This function is called by CloudWatch alarms in your Amazon Connect instance. You don’t need to call this function manually.
-   **[VoiceMailAudioProcessingFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailaudioprocessingfunction.htm)**
    This Lambda function processes voicemail recordings.
-   **[VoiceMailPackagingFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailpackagingfunction.htm)**
    This Lambda function creates a VoiceCall record, attaches the voicemail recording and transcription files to the record, and routes it all to the Omni-Channel flow.
-   **[VoiceMailTranscribeFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailtranscribefunction.htm)**
    This Lambda function transcribes voicemail recordings.
-   **[kvsConsumerTrigger Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm)**
    This Lambda function is the initiation point for starting real-time transcription.
-   **[kvsTranscriber Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvstranscriber.htm)**
    This Lambda function does the actual real-time transcription work. This function is not directly invoked from a contact flow. It is triggered by the kvsConsumerTrigger Lambda function. You do not need to call this function manually.
-   **[Query AWS Lambda Functions to Analyze a Voice Call](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_query.htm)**
    Query AWS Lambda function logs and Amazon Connect flows, and use the query results to analyze and troubleshoot the events that happen throughout the stages of a single voice call.

#### See Also

-   [Sample Amazon Connect Flows for Service Cloud Voice](https://github.com/service-cloud-voice/examples-from-doc/tree/main/ContactFlows "Sample Amazon Connect Flows for Service Cloud Voice - HTML (New Window)")

-   [How to Use Salesforce Lambda Functions](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_functions.htm "Salesforce provides several Lambda functions for use in your Service Cloud Voice contact flows. These functions are used by the sample contact flows, and you can also use them in your own contact flows.")

## Related Topics

- InvokeTelephonyIntegrationApiFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm)
- kvsConsumerTrigger (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm)
- kvsTranscriber (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvstranscriber.htm)
- CTRDataSyncFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm)
- InvokeSalesforceRestApiFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm)
- How to Use Salesforce Lambda Functions (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_functions.htm)
- Service Cloud Voice Authentication When Using InvokeSalesforceRestApiFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_auth.htm)
- InvokeSalesforceRestApiFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm)
- InvokeTelephonyIntegrationApiFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm)
- ContactLensConsumerFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensconsumerfunction.htm)
