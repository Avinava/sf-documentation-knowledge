---
title: "Let Reps Control the Callback Experience"
domain: voice-pt-developer-guide
topic: let-reps-control-the-callback-experience
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.987Z
estimatedTokens: 808
keywords: [Let, Reps, Control, Callback, Experience, Customize, way, handle, callbacks]
---

# Let Reps Control the Callback Experience

> Customize the way reps handle callbacks.

# Let Reps Control the Callback Experience

Customize the way reps handle callbacks.

By default with queued callbacks, when a rep accepts a callback request, the Omni-Channel utility automatically dials the callback number and the call is immediately active.

To give reps more control, configure the callback feature so reps can decide how the call is handled when they accept a callback request. Reps can view the callback details with information about the customer’s request. Then they can transfer the callback request to another rep, initiate a callback through click-to-dial with the listed preferred phone number, or contact the end user at another phone number.

Available in API version 60.0 and later for Service Cloud Voice with Partner Telephony.

Prerequisites:

Enable the option so that customers can create callback requests.

To allow click-to-dial callbacks or transfers from Contact Requests, follow these steps.

1.  When a customer submits a contact request to request a callback, the partner creates a ContactRequest record and an associated AgentWork record. The ContactRequest has the IsCallback field set to true.
2.  A rep gets assigned the agentWork record through the Omni-Channel widget and accepts the work.
3.  The rep can review the details of the contact request and determine their next steps.
    -   If the rep is ready, they call the customer by using click-to-dial from one of the options on the Contact Request page. This callback is handled through the ContactRequest object, and it creates an additional agentWork record. To ensure that click-to-dial calls made through the content request are marked as callbacks rather than outbound calls, verify that ContentRequest.IsCallback is true.
    -   If the rep prefers to transfer the contact request and its associated agentWork instead, the rep clicks **Transfer** on the ContactRequest record page. The partner must send Salesforce the TRANSFER\_CALLBACK\_REQUEST Connector event to open the Phone transfer view in the Omni-Channel utility. When the rep identifies who they want to transfer the call to and selects **Transfer**, Salesforce sends an add\_participant event to the partner with isBlindTransfer=true.
4.  The partner listens for the AgentWorkClosed event to release the rep’s capacity so that they can receive the next call.

#### See Also

-   [Queued Callbacks](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_queued_callbacks.htm "When a customer makes an inbound call, the telephony system first creates a voice call and then routes the call to the available rep. If no rep is available and the customer requests a callback, you must publish a QUEUED_CALLBACK_STARTED event.")

-   [*Object Reference for the Salesforce Platform*: ContactRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactrequest.htm "Object Reference for the Salesforce Platform: ContactRequest - HTML (New Window)")

-   [*Salesforce Help*: Return a Callback Request](https://help.salesforce.com/s/articleView?id=service.voice_return_callbacks.htm&type=5&language=en_US "Salesforce Help: Return a Callback Request - HTML (New Window)")

## Related Topics

- Queued Callbacks (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_queued_callbacks.htm)
