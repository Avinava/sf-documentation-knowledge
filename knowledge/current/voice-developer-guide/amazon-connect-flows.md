---
title: "Amazon Connect Flows"
domain: voice-developer-guide
topic: amazon-connect-flows
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.452Z
estimatedTokens: 1427
keywords: [Amazon, Connect, Flows, flow, depicts, customer’s, voice, call, journey, beginning, end, Configure, Service, Cloud, contact]
---

# Amazon Connect Flows

> An Amazon Connect flow depicts a customer’s voice call journey from beginning to end.
    Configure Service Cloud Voice flows for your contact center to determine how Salesforce handles
    inbound calls, outbound calls, and call transfers.

# Amazon Connect Flows

An Amazon Connect flow depicts a customer’s voice call journey from beginning to end. Configure Service Cloud Voice flows for your contact center to determine how Salesforce handles inbound calls, outbound calls, and call transfers.

Each Service Cloud Voice flow is configured in Amazon Connect using a flow map made up of blocks, beginning with an Entry block and ending with a Transfer to flow or Disconnect block. To learn more about Amazon flows, see the [Amazon Connect Administrator Guide](https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html).

Salesforce provides several out-of-the box [Sample Service Cloud Voice flows](https://github.com/service-cloud-voice/examples-from-doc/tree/main/ContactFlows) in GitHub you can customize for your Service Cloud Voice contact center environment. For example, the Sample SCV Inbound Flow is used to route incoming voice calls. When a customer calls the contact center, the call triggers the inbound flow starting at the Entry block. The call then traverses the flow, block by block, stopping at each block to determine what happens next. The flow eventually arrives at the Transfer to flow block, which ends this flow and transfers the call to the Omni-Channel Subflow. If errors are encountered at any point in the flow, the call gets routed to the Disconnect block.

A subflow is a flow within a flow. Salesforce offers several out-of-the-box subflows that let you add features to a flow, such as Omni-Channel routing, callbacks, and voicemails. A subflow can’t be used on its own; instead, it must be added to a flow using the **Transfer to flow** block. You can add multiple subflows to a flow by daisy-chaining them together. In fact, some of the sample flows include several subflows daisy-chained together. For example, the Sample SCV Inbound Flow includes the Sample SCV Omni-Channel Subflow, which then transfers out to a series of other subflows ending with the Sample SCV Transcription Subflow with Contact Lens.

Here’s how an inbound call flows through the daisy chain of subflows using the Salesforce-provided "Sample SCV" flows:

1.  A call comes in, which triggers the Sample SCV Inbound Flow.
2.  The call moves through the Sample SCV Inbound Flow, creating a voice call (VoiceCall) record and setting the contact attribute for voiceCallId before it’s transferred to the Sample SCV Omni-Channel Subflow.
3.  The call moves through the Sample SCV Omni-Channel Subflow, routing and prioritizing the call based on the routing logic of the specified Omni-Channel flow. After this, the call is transferred to the Sample SCV Callback Subflow.
4.  The call moves through the Sample SCV Callback Subflow, giving the caller the option to schedule a callback if the queue is busy. If the caller chooses to schedule a callback, the call is transferred to the Callback queue. If the caller chooses to remain on the line, the call is transferred to the Sample SCV Transcription Subflow with Contact Lens.
5.  The call moves through the Sample SCV Transcription Subflow with Contact Lens, enabling real-time transcription before finally transferring the call to the queue. This ends the entire flow.

The order of the subflow chain matters. For example, for inbound calls, if you place the Omni-Channel Subflow before the Callback Subflow, callback calls will be routed correctly. If you flip the subflows by placing the Callback Subflow before the Omni-Channel Subflow, callback calls will be routed to the basic queue.

For inbound calls, you can’t point a phone number directly to a subflow; instead, point your phone number to the inbound flow. Subflows don’t create a voice call record in Salesforce; they rely on the inbound flow to do that.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

#### Note

Service Cloud Voice doesn’t support queue transfers for voice calls already in one queue and transferred to another queue using the [Transfer to queue](https://docs.aws.amazon.com/connect/latest/adminguide/transfer-to-queue.html "HTML (New Window)") block in the Amazon Connect flow. In this scenario, the call recording and transcription are available in Amazon Connect but not Salesforce. Alternatively, you can use routing profiles to transfer voice calls to groups of reps to take calls for queues they don't typically handle when certain criteria are met. See [Managing Increases in Call Volumes with Routing Profiles](https://github.com/amazon-connect/amazon-connect-salesforce-scv/blob/master/BestPractices/OverflowRouting.md "HTML (New Window)").

-   **[Amazon Connect Flows Best Practices](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows_best_practices.htm)**
    Follow these best practices to ensure your Amazon Connect flows are configured optimally and correctly. If your environment isn’t set up correctly for voice resiliency, you may experience missing calls.
-   **[Sample Flows for Service Cloud Voice](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows_sample_flows.htm)**
    Salesforce provides several out-of-the box sample flows for Amazon Connect you can use to create inbound, outbound, and transfer flows for your Service Cloud Voice contact center environment.

#### See Also

-   [*GitHub:* Sample Service Cloud Voice Flows](https://github.com/service-cloud-voice/examples-from-doc/tree/main/ContactFlows "GitHub: Sample Service Cloud Voice Flows - HTML (New Window)")

-   [Amazon Connect Flow Documentation](https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-flows.html "Amazon Connect Flow Documentation - HTML (New Window)")

## Related Topics

- Amazon Connect Flows Best Practices (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows_best_practices.htm)
- Sample Flows for Service Cloud Voice (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows_sample_flows.htm)
