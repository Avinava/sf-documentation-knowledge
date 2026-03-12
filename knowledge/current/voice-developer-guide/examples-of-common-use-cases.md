---
title: "Examples of Common Use Cases"
domain: voice-developer-guide
topic: examples-of-common-use-cases
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.608Z
estimatedTokens: 1475
keywords: [Examples, Common, Cases, Salesforce, Amazon, Web, Services, provide, help, started, Service, Cloud, Voice, illustrate, how]
---

# Examples of Common Use Cases

> Salesforce and Amazon Web Services provide examples to help you get started using
    Service Cloud Voice. These examples illustrate how to implement common use cases such as SMS
    transfers, linking calls to cases, and voicemail setup. The examples are foundational, so you
    can build upon them to support your company’s business processes.

# Examples of Common Use Cases

Salesforce and Amazon Web Services provide examples to help you get started using Service Cloud Voice. These examples illustrate how to implement common use cases such as SMS transfers, linking calls to cases, and voicemail setup. The examples are foundational, so you can build upon them to support your company’s business processes.

Your business processes might be a bit different than those reflected in the examples. In many cases, you can modify an example to achieve your desired result. For instance, an example that shows how to automatically link a call record to a case record can be modified to link to a lead record or other type of record.

Each example indicates the ease of implementation and estimated time to implement. They assume a familiarity with basic Salesforce admin skills.

Amazon Connect’s solutions team also offers implementation examples for Service Cloud Voice. These examples demonstrate how to complete tasks like letting customers leave voicemails for reps. We’ve introduced a selection of them in [Examples from Amazon Connect](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_connect_examples.htm "Review Service Cloud Voice implementation examples created by Amazon Connect’s solutions team. The examples cover scenarios such as voicemail setup and external line routing for reps."). For a full list, see the [Amazon Connect Campground for Service Cloud Voice in GitHub](https://github.com/amazon-connect/amazon-connect-salesforce-scv). Salesforce does not maintain the examples provided by Amazon Connect.

-   **[Pass Data from the Interactive Voice Response (IVR) System](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_interactive_voice_response.htm)**
    This example explains how to pass data from the Interactive Voice Response (IVR) system in Amazon Connect to your Salesforce org.
-   **[Set Up Call Transcription](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_set_up_transcription.htm)**
    To convert call conversations to text, set up real-time call transcription. The transcripts appear in the voice call record in real time and after the call. Service Cloud Voice supports transcription from Amazon Transcribe and Contact Lens, and both services are available with Amazon Connect.
-   **[Link New or Existing Case to Voice Call Record](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_link_case_to_record.htm)**
    This example shows how to take a caller’s inputs into the interactive voice response (IVR) system, pass them to Salesforce, and use them to create or link to Salesforce records. The example walks you through linking a case to a Voice Call record, but you can modify it to link to other Salesforce records, such as accounts and leads.
-   **[Give Customers the Option to Transfer to SMS in the Interactive Voice Response (IVR)](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_sms_transfer_ivr.htm)**
    This example builds on the methods created in the “Link New or Existing Case to Voice Call Record” recipe by adding another IVR option to switch to SMS. When a customer selects the SMS option, a Voice Call record is created and a flow sends an automated outbound SMS message.
-   **[Enable the Option to Request a Callback](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_queued_callback.htm)**
    This example shows how to set up a rep-first callback in your inbound contact flow. The contact flow defines the interactive voice response (IVR) and prompts the customer to leave a phone number for a callback.
-   **[Contact Record Sync with Amazon Connect](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_ctr_sync.htm)**
    By default, contact record (previously called contact trace record or CTR) data is automatically stored in Voice Call records, allowing your Amazon Connect instance to stay in sync with Salesforce.
-   **[Enable Voice Call Transfers Using Omni-Channel Flows and Amazon Connect](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_omni_amazon_enable_voice_call_transfers.htm)**
    Configure this feature to enable voice call transfers via Salesforce Omni-Channel flows.
-   **[Refresh a Sandbox](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_sandbox_refresh.htm)**
    Refreshing a sandbox updates its metadata from the source org.
-   **[Enable Voicemail Support](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm)**
    Configure voicemail support to route voicemail recordings and transcriptions to reps. Reps can play back the recordings and transcriptions routed to them at any time.
-   **[Set the Voice Call Record Type](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voice_call_record_type.htm)**
    Configure an Amazon Connect flow to automatically set the record type for a voice call record.
-   **[Disable Call Recording](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_disable_recording.htm)**
    Configure an Amazon Connect flow to disable recording for a voice call.
-   **[Enable the Voice Extension Page in Lightning App Builder](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voice_extension_flexipage.htm)**
    Configure this feature to let administrators add custom voice controls to their Omni-Channel softphones using the Voice Extension FlexiPage in the Lightning App Builder.
-   **[Examples from Amazon Connect](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_connect_examples.htm)**
    Review Service Cloud Voice implementation examples created by Amazon Connect’s solutions team. The examples cover scenarios such as voicemail setup and external line routing for reps.

## Related Topics

- Examples from Amazon Connect (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_connect_examples.htm)
- Pass Data from the Interactive Voice Response (IVR) System (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_interactive_voice_response.htm)
- Set Up Call Transcription (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_set_up_transcription.htm)
- Link New or Existing Case to Voice Call Record (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_link_case_to_record.htm)
- Give Customers the Option to Transfer to SMS in the Interactive Voice Response (IVR) (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_sms_transfer_ivr.htm)
- Enable the Option to Request a Callback (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_queued_callback.htm)
- Contact Record Sync with Amazon Connect (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_ctr_sync.htm)
- Enable Voice Call Transfers Using Omni-Channel Flows and Amazon Connect (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_omni_amazon_enable_voice_call_transfers.htm)
- Refresh a Sandbox (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_sandbox_refresh.htm)
- Enable Voicemail Support (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_voicemail.htm)
