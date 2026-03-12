---
title: "Sample Flows for Service Cloud Voice"
domain: voice-developer-guide
topic: sample-flows-for-service-cloud-voice
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.461Z
estimatedTokens: 3144
keywords: [Sample, Flows, Service, Cloud, Voice, Salesforce, several, out-of-the, box, Amazon, Connect, inbound, outbound, transfer, contact]
---

# Sample Flows for Service Cloud Voice

> Salesforce provides several out-of-the box sample flows for Amazon
      Connect you can use to create inbound, outbound, and transfer flows for your Service Cloud
      Voice contact center environment.

# Sample Flows for Service Cloud Voice

Salesforce provides several out-of-the box sample flows for Amazon Connect you can use to create inbound, outbound, and transfer flows for your Service Cloud Voice contact center environment.

The sample flows are automatically installed when you create a contact center. All sample flows begin with the name “Sample SCV.” There are two ways to access the sample flows:

-   Access the sample flows directly in Amazon Connect. Log in to your Amazon Connect instance and select Routing > Contact flows.
-   Get the JSON sample flow files from GitHub. Download the JSON files from the [Sample Service Cloud Voice flows](https://github.com/service-cloud-voice/examples-from-doc/tree/main/ContactFlows) page in GitHub and import them into your Amazon Connect instance. For instructions on how to import flows, see the [Import/export flows](https://docs.aws.amazon.com/connect/latest/adminguide/contact-flow-import-export.html) page in the Amazon Connect Administrator Guide.

The sample flows are occasionally updated and released with Salesforce contact center updates. To ensure you see the latest versions of the sample flows in Amazon Connect, first verify that your contact center is updated to the latest version. The JSON files in GitHub are always updated to the latest version.

Salesforce offers the following sample flows, which you can customize for your Service Cloud Voice contact center environment:

## Inbound Flows

-   **Sample SCV Inbound Flow**: Creates a voice call record in Salesforce for the inbound call and transfers the call to the SCV Omni-Channel subflow. Associate your phone number with this flow so customers can reach your contact center. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Inbound%20Flow)

    If you customize the Sample SCV Inbound Flow, make sure it’s configured to support voice resiliency. See the [Amazon Connect Flows Best Practices](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows_best_practices.htm "Follow these best practices to ensure your Amazon Connect flows are configured optimally and correctly. If your environment isn’t set up correctly for voice resiliency, you may experience missing calls.") page for more information.

-   **Sample SCV Inbound Flow for Direct to Rep:** Creates a voice call record in Salesforce for the inbound call and transfers the call to the SCV Direct to Rep subflow. This flow is for use cases where each rep has a unique assigned phone number and receives calls at that number. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Inbound%20Flow%20for%20Direct%20to%20Rep.json)

## Outbound Flows

-   **Sample SCV Outbound Flow With Transcription Using Amazon Transcribe**: Starts media streaming. Also starts transcription using Amazon Transcribe, capturing and transcribing audio for outbound voice calls. If you use this preferred flow, you can’t use the Sample SCV Outbound Flow With Transcription Using Amazon Transcribe flow. Since the Sample SCV Outbound Flow With [Transcription Using Contact Lens](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_lens.htm "Use Contact Lens to transcribe calls that are longer than 15 minutes. If you use Amazon Transcribe, only the first 15 minutes of a call are transcribed due to a Lambda function limitation. To trigger real-time transcription of a call with Contact Lens, enable Contact Lens and real-time transcription for Amazon Connect in your contact flow.") offers more robust transcription features, consider using that flow instead of this one. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Outbound%20Flow%20With%20Transcription%20Using%20Amazon%20Transcribe)
-   **Sample SCV Outbound Flow With Transcription Using Contact Lens**: Starts transcription using Contact Lens for Amazon Connect, capturing and transcribing audio for outbound voice calls. If you use this preferred flow, you can’t use the Sample SCV Outbound Flow With Transcription Using Amazon Transcribe flow. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Outbound%20Flow%20with%20Transcription%20using%20Contact%20Lens)
-   **Sample SCV Outbound Flow From Rep With CallerId Override**: Makes an outbound call with the caller ID displayed as the number assigned to a specific rep. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Outbound%20Flow%20From%20Rep%20With%20Caller%20ID%20Override.json)

## Transfer Flows

-   **Sample SCV Transfer Flow For Agent Transfers**: Creates a voice call record and transfers the call from one rep to another specified rep. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Transfer%20Flow%20For%20Agent%20Transfers)
-   **Sample SCV Transfer Flow For Omni-Channel Transfers**: Creates a voice call record and transfers the call from a rep to a specified Omni-Channel flow. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Transfer%20Flow%20For%20Omni-Channel%20Transfers)
-   **Sample SCV Transfer Flow For Omni Routing Transfers**: Creates a voice call record and transfers the call from a rep to a specified rep or queue using Omni-Channel Unified Routing. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Transfer%20Flow%20For%20Omni%20Routing%20Transfers.json)
-   **Sample SCV Transfer Flow For Queue Transfers**: Creates a voice call record and transfers the call from a rep to a specified queue. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Transfer%20Flow%20For%20Queue%20Transfers)

If you customize the Sample SCV Transfer flows, make sure it’s configured to support voice resiliency. See the [Amazon Connect Flows Best Practices](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows_best_practices.htm "Follow these best practices to ensure your Amazon Connect flows are configured optimally and correctly. If your environment isn’t set up correctly for voice resiliency, you may experience missing calls.") page for more information.

## Rep Whisper Flows

-   **Sample SCV Agent Whisper Flow For Amazon Transcribe**: Starts media streaming. Also starts transcription using Amazon Transcribe to prepare for inbound voice calls and voice call transfers. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Agent%20Whisper%20Flow%20for%20Amazon%20Transcribe)

## Subflows

-   **Sample SCV Callback Subflow**: Gives the caller the option to schedule a callback if the queue is busy. If the caller chooses to schedule a callback, transfers the voice call to the Callback queue. If the caller chooses to remain on the line, transfers the call to one of the SCV Transcription Subflows. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Callback%20Subflow)

    If the caller schedules a callback and then disconnects, the call can be incorrectly classified as abandoned. To correctly classify callback request drops, use a [Callback Contact Attribute block](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows_sample_flows.htm) in the flow.

    ![The SCV Callback subflow with the Callback Contact Attribute block](/docs/resources/img/en-us/260.0?doc_id=images%2Fvpice_sample_scv_callback_subflow.png&folder=voice_developer_guide)

    If you customize the Sample SCV Callback Subflow, make sure it’s configured to support voice resiliency. See the [Amazon Connect Flows Best Practices](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows_best_practices.htm "Follow these best practices to ensure your Amazon Connect flows are configured optimally and correctly. If your environment isn’t set up correctly for voice resiliency, you may experience missing calls.") page for more information.

-   **Sample SCV Direct to Rep Subflow**: Routes the call to a specific rep associated with the dialed number and transfers the call to the Sample SCV Transcription Subflow With Contact Lens. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Direct%20to%20Rep%20Subflow.json)
-   **Sample SCV Field Service Phone Call Subflow**: Connects field reps to contact center reps. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Field%20Service%20Phone%20Call%20Subflow)
-   **Sample SCV Omni-Channel Subflow - Basic Routing With Case Creation**: Creates a case for each inbound voice call, routes the call to a queue, and opens a screen-pop for the new case record when a rep accepts the call. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Omni-Channel%20Subflow%20-%20Basic%20Routing%20with%20Case%20Creation)
-   **Sample SCV Omni-Channel Subflow - Omni Routing With Case Creation**: Creates a case for each inbound voice call, routes the call using Omni-Channel Unified Routing, and opens a screen-pop for the new case record when a rep accepts the call. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Omni-Channel%20Subflow%20-%20Omni%20Routing%20With%20Case%20Creation.json)
-   **Sample SCV Omni-Channel Subflow - Omni Routing for Skills**: Creates a case for each inbound voice call, routes the call to a rep with a skill using Omni-Channel Unified Routing, and opens a screen-pop for the new case record when a rep accepts the call. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Omni-Channel%20Subflow%20-%20Omni%20Routing%20for%20Skills.json)
-   **Sample SCV Transcription Subflow With Amazon Transcribe**: Enables call recording and real-time transcription using Amazon Transcribe, and then transfers the voice call to the queue. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Transcription%20Subflow%20with%20Amazon%20Transcribe)
-   **Sample SCV Transcription Subflow With Contact Lens**: Enables call recording and real-time transcription using Contact Lens, and then transfers the voice call to the queue. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Transcription%20Subflow%20with%20Contact%20Lens)
-   **Sample SCV Voicemail Subflow**: Gives the caller the option to leave a voicemail. Reps can play the recordings and read the transcriptions of all voicemails routed to them. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Voicemail%20Subflow)
-   **Sample SCV Voicemail Subflow for Omni Routing**: Gives the caller the option to leave a voicemail when using Omni-Channel Unified Routing. Reps can play the recordings and read the transcriptions of all voicemails routed to them. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample_SCV_Voicemail_Subflow_For_Omni_Routing)

## Other Flows

These flows demonstrate how you can use the [InvokeSalesforceRestApiFunction Lambda function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm "This Lambda function calls the Salesforce REST API. You can place this Lambda function within a contact flow to create, update, or query Salesforce records.") to perform some common tasks with the Salesforce REST API.

-   **Sample\_SCV\_REST\_Check\_For\_Open\_Cases:** Checks for open cases using the InvokeSalesforceRestApiFunction Lambda function. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample_SCV_REST_Check_For_Open_Cases)
-   **Sample\_SCV\_REST\_Link\_Call\_To\_Case**: Links a voice call to an open case using the InvokeSalesforceRestApiFunction Lambda function. This flow adds on to the Sample SCV Invoke REST API Check For Open Cases flow. [JSON file](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample_SCV_REST_Link_Call_To_Case)

## Related Topics

- Amazon Connect Flows Best
                Practices (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows_best_practices.htm)
- Transcription
              Using Contact Lens (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_lens.htm)
- Amazon Connect Flows
          Best Practices (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows_best_practices.htm)
- InvokeSalesforceRestApiFunction Lambda function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm)
