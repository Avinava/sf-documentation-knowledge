---
title: "Enable the Phone Book for Outbound Calls"
domain: voice-pt-developer-guide
topic: enable-the-phone-book-for-outbound-calls
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.038Z
estimatedTokens: 1008
keywords: [Enable, Phone, Book, Outbound, Calls, reps, their, speed-dial, rep-to-rep, rep-to-queue, enabled, rep, view, queues, Omni-Channel]
---

# Enable the Phone Book for Outbound Calls

> Enable the phone book so reps can use their speed-dial list to make rep-to-rep and
    rep-to-queue calls. When the phone book is enabled, a rep can view a list of reps and
    queues in the Omni-Channel utility and place a call to the destination rep. For rep-to-queue
    calls, a rep selects the queue from the phone book, which determines which rep to
    contact.

# Enable the Phone Book for Outbound Calls

Enable the phone book so reps can use their speed-dial list to make rep-to-rep and rep-to-queue calls. When the phone book is enabled, a rep can view a list of reps and queues in the Omni-Channel utility and place a call to the destination rep. For rep-to-queue calls, a rep selects the queue from the phone book, which determines which rep to contact.

This feature leverages the Service Cloud Connector API getPhoneContacts() function to get the list of phone contacts and contact types that appear in the Omni-Channel utility.

This feature applies to the following telephony model:

-   Service Cloud Voice with Partner Telephony

## Enable the Phone Book

Perform the following steps using the Connector API to enable the phone book feature.

1.  When implementing getCapabilities(), set the value of hasPhoneBook in CapabilitiesResult to true.
2.  When implementing dial(), set the appropriate callType for the agent (rep) and queue contact types. For example, if contact type is 'agent', set callType to InternalCall, which represents a call made between reps within a contact center. In our demo implementation of dial(), contact type ‘agent’ is set to callType InternalCall, and contact type ‘queue’ is set to callType Outbound.
3.  To ensure internalCall works seamlessly, make sure the Salesforce administrator configures support for rep-to-rep calls at the org level by selecting the **Voice Call (VoiceCall)** Change Data Capture entity.
4.  When a rep makes a phone book InternalCall, the rep’s participantType should be Initial\_Caller, and the receiving rep’s participantType should be Agent in your CallResult. See the demo implementation of dial() for an example.
5.  To ensure the reps’ respective names appear in voice call transcripts, make sure the participantId appears in the transcripts. See the Create a Transcript API for more information.
6.  When two reps share the same voice call record for callType InternalCall, the first rep (Rep 1) is a standard user with restricted access to the [VoiceCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm) object, while the second rep (Rep 2) becomes the owner of the VoiceCall record. This might cause Rep 1 to lose access to the VoiceCall record. To ensure Rep 1 can access the VoiceCall record, create sharing rules based on group membership by adding all reps who use the phone book feature as members of a Salesforce group that has “Read Only” access created for that group.

## Test the Phone Book

1.  In the **Capabilities** section of your Service Cloud Voice ([demo connector](https://github.com/salesforce-misc/byo-demo-connector/blob/main/public/remote.html)) phone simulator, select **Support Phone Book**. You can also find the hasPhoneBook capability listed in the [baseConnector.js demo connector file in GithHub](https://github.com/salesforce/scv-connector-base/blob/master/src/main/baseConnector.js).
2.  In the Omni-Channel utility, click the phone book icon (person avatar) just to the right of the phone number field.
3.  Verify the directory of rep and queue contacts appears.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

If two reps are on a phone book InternalCall and one of the reps transfers the call to a third rep, the new VoiceCall record created for the third rep will be callType Transfer.

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

-   [*Salesforce Help* Configure the Phone Book for Outbound Calls](https://help.salesforce.com/s/articleView?id=service.voice_phone_book.htm&type=5&language=en_US "Salesforce Help Configure the Phone Book for Outbound Calls - HTML (New Window)")
