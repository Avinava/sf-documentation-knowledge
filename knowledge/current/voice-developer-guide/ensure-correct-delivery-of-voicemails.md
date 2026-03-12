---
title: "Ensure Correct Delivery of Voicemails"
domain: voice-developer-guide
topic: ensure-correct-delivery-of-voicemails
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.792Z
estimatedTokens: 759
namespace: External
keywords: [Ensure, Correct, Delivery, Voicemails, voicemail, enabled, aren't, delivered, reps, subflow, callOrigin, VoiceCall, record, updated, time]
---

# Ensure Correct Delivery of Voicemails

> If you have voicemail enabled but voicemails aren't being delivered to the reps, update
  your Voicemail subflow to ensure the callOrigin field in the VoiceCall record is updated in time.
  For voicemails, the value of the callOrigin field must be Voicemail. You can update the Voicemail
  subflow to add a block to invoke the Lambda to call the SF REST API to make sure that the
  callOrigin field is updated in time, and voicemails are correctly delivered to the
  reps.

**Namespace:** `External`

# Ensure Correct Delivery of Voicemails

If you have voicemail enabled but voicemails aren't being delivered to the reps, update your Voicemail subflow to ensure the callOrigin field in the VoiceCall record is updated in time. For voicemails, the value of the callOrigin field must be Voicemail. You can update the Voicemail subflow to add a block to invoke the Lambda to call the SF REST API to make sure that the callOrigin field is updated in time, and voicemails are correctly delivered to the reps.

| applies to these telephony models |
| --- |
| Service Cloud Voice with Amazon Connect |
| Service Cloud Voice with Partner Telephony from Amazon Connect |

Before using the InvokeSalesforceRestApiFunction Lambda function, you must have OAuth authentication set up. To set up or modify authentication, see [Service Cloud Voice Authentication When Using InvokeSalesforceRestApiFunction](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_lambda_auth.htm).

To ensure voicemails are delivered to reps, add the InvokeSalesforceRestApiFunction Lambda function to the Voicemail subflow, and configure the Lambda function to include the callOrigin destination key. Once configured, every time the Voicemail subflow is triggered, it invokes the Lambda function, which updates the callOrigin field to Voicemail in the VoiceCall record.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_developer_guide)

#### Important

Perform these steps only if the voicemails aren’t correctly delivered to the reps.

To configure the Voicemail subflow to ensure voicemails are delivered to reps:

1.  [Set up or modify OAuth](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_lambda_auth.htm).
2.  In the sample SCV Voicemail Subflow, add the Invoke AWS Lambda function block to invoke the SF REST API. Add the Lambda block between the Play prompt and Set contact attributes blocks in your contact flow. ![Voice subflow](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_voicemail_flow.png&folder=voice_developer_guide)
3.  Configure the InvokeSalesforceRestApiFunction Lambda Function to update the value of the callOrigin destination key as Voicemail. Add a Set contact attributes flow block to the flow, making sure it appears before the Invoke AWS Lambda function block.
4.  Add the following attributes to the Set contact attributes flow block:
    -   Namespace: External
    -   Key: voiceCallId![Add attributes](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_voicemail_field.png&folder=voice_developer_guide)
5.  Click **Save**.

This makes sure that every time the voicemail subflow is triggered, it invokes the Lambda function to update the callOrigin field to Voicemail in the VoiceCall record.

An example flow is available in the [Github](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Voicemail%20Subflow).
