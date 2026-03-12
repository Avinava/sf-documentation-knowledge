---
title: "Start Calls"
domain: voice-pt-developer-guide
topic: start-calls
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.180Z
estimatedTokens: 1330
keywords: [Start, Calls, guidelines, starting]
---

# Start Calls

> This section provides guidelines related to starting calls.

# Start Calls

This section provides guidelines related to starting calls.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

This guide is for telephony providers who are creating a solution that integrates Service Cloud Voice with their telephony system. If that’s not you, see the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_intro.htm) or [Salesforce Help](https://help.salesforce.com/articleView?id=service.voice_about.htm&type=5&language=en_US). To update your solution to include Bring Your Own Channel for CCaaS Messaging capabilities along with Service Cloud Voice, see the [Bring Your Own Channel Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/guide/add-messaging-to-voice.html).

-   **[Accept Inbound Calls in Omni-Channel](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_accept_inbound_calls.htm)**
    Now that you’ve added support for inbound calls, open the Voice Call Simulator and click New Inbound Call.
-   **[Integrate Incoming Voice Call Creation](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_integrate_incoming_call_creation.htm)**
    For inbound calls, when the telephony system receives the incoming call and prepares to route the call to a rep, the telephony system can invoke Service Cloud Voice REST APIs to create the essential Voice Call record to represent the conversation.
-   **[Record Linking](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_record_linking.htm)**
    Use record linking to associate a voice call with other related records.
-   **[Queued Callbacks](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_queued_callbacks.htm)**
    When a customer makes an inbound call, the telephony system first creates a voice call and then routes the call to the available rep. If no rep is available and the customer requests a callback, you must publish a QUEUED\_CALLBACK\_STARTED event.
-   **[Let Reps Control the Callback Experience](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_click_to_dial_callbacks.htm)**
    Customize the way reps handle callbacks.
-   **[Outbound Dialers with Service Cloud Voice for Partner Telephony](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_outbound_dialers.htm)**
    You can use a preview dialer or a progressive dialer with Service Cloud Voice for Partner Telephony.
-   **[Enable the Phone Book for Outbound Calls](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_enable_phone_book.htm)**
    Enable the phone book so reps can use their speed-dial list to make rep-to-rep and rep-to-queue calls. When the phone book is enabled, a rep can view a list of reps and queues in the Omni-Channel utility and place a call to the destination rep. For rep-to-queue calls, a rep selects the queue from the phone book, which determines which rep to contact.
-   **[Set the Voice Call Record Type](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voice_call_record_type.htm)**
    Customize the page layout of a voice call record.
-   **[Send Voicemails to Reps](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicemail.htm)**
    Let customers send your reps voicemails that reps can review along with a transcription.
-   **[Hide Call Controls](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_hide_call_controls.htm)**
    You can hide many of the call control buttons that appear to the rep in the Omni-Channel widget. These buttons can be hidden or shown for each call. By default, buttons are visible.
-   **[Manage Multiparty Calls and Consult Calls](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_multiparty_consult_calls.htm)**
    Include up to six participants on a voice call, including the rep and customer. In addition to the six participants, a supervisor can listen in or barge in. While on a call with a customer, a rep can make a separate consult call before merging the calls together or ending the consult call. During the consult call, multiparty call participants are on a type of hold. Telephony partners specify whether to disable hold music so that call group participants can continue their conversation.
-   **[Map Telephony Error Codes to Salesforce Outbound Call Errors](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_outbound_error.htm)**
    When an outbound call fails, intercept the error in your connector implementation, and map it to a specific Salesforce error constant by populating the error.type field. Return the rejected Promise containing the specific error type to show a descriptive error message to the rep in the Omni-Channel console.

#### See Also

-   [Call Scenario Diagrams](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_call_scenario_diagrams.htm "Understand different call scenarios, such as a rep receiving or declining an inbound call or multiparty and consult calls.")

## Related Topics

- Accept Inbound Calls in Omni-Channel (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_accept_inbound_calls.htm)
- Integrate Incoming Voice Call Creation (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_integrate_incoming_call_creation.htm)
- Record Linking (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_record_linking.htm)
- Queued Callbacks (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_queued_callbacks.htm)
- Let Reps Control the Callback Experience (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_click_to_dial_callbacks.htm)
- Outbound Dialers with Service Cloud Voice for Partner Telephony (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_outbound_dialers.htm)
- Enable the Phone Book for Outbound Calls (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_enable_phone_book.htm)
- Set the Voice Call Record Type (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voice_call_record_type.htm)
- Send Voicemails to Reps (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicemail.htm)
- Hide Call Controls (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_hide_call_controls.htm)
