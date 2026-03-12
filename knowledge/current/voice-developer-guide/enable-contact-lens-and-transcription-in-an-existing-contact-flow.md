---
title: "Enable Contact Lens and Transcription in an Existing Contact Flow"
domain: voice-developer-guide
topic: enable-contact-lens-and-transcription-in-an-existing-contact-flow
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.475Z
estimatedTokens: 777
keywords: [Enable, Contact, Lens, Transcription, Flow, real-time, flows, already, created, add, recording, block, post-call, analytics, Prerequisites]
---

# Enable Contact Lens and Transcription in an Existing Contact Flow

> You can enable Contact Lens and real-time transcription in contact
   flows that you already created. To enable Contact Lens and transcription in an existing contact
   flow, add the recording block to the flow and enable real-time and post-call analytics.

# Enable Contact Lens and Transcription in an Existing Contact Flow

You can enable Contact Lens and real-time transcription in contact flows that you already created. To enable Contact Lens and transcription in an existing contact flow, add the recording block to the flow and enable real-time and post-call analytics.

| Ease of Implementation | Medium |
| --- | --- |
| Estimated Time to Implement | 45 minutes |

## Prerequisites

To run through this example, update your contact center to the latest version. To get the latest version of these contact flows, see [Update Your Contact Center](https://help.salesforce.com/s/articleView?id=service.voice_update_cc.htm&type=5&language=en_US). If you don’t update your contact center, you can have older versions of the contact flows with different names.

## Add the Recording Block

Add the “Set recording and analytics behavior” recording block to the inbound, outbound, and transfer contact flows. In the block, select **Real-Time and post-call analytics in the block**.

Newer versions of the sample contact flows already have this recording block. If it’s already added to your contact flows, you don’t have to add it again.

Older versions of the sample contact flows use transcription with Amazon Transcribe. To use transcription with Contact Lens instead, remove the Invoke AWS Lambda function block that contains the kvsConsumerTrigger Lambda function and replace it with this recording block with the option enabled.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=voice_developer_guide)

#### Tip

To learn how to set the Contact Lens options, view the settings for this block in the latest, packaged contact flows, which are available in [GitHub](https://github.com/service-cloud-voice/examples-from-doc/tree/main/ContactFlows).

![The Set Recording and Analytics Behavior block is before the Transfer to Agent block in the Sample SCV Agent Transfer with Transcription Using Contact Lens contact flow.](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_contact_flow_with_contact_lens.png&folder=voice_developer_guide)

#### See Also

-   [kvsConsumerTrigger Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm "This Lambda function is the initiation point for starting real-time transcription.")

-   [Amazon Connect Flows](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows.htm "An Amazon Connect flow depicts a customer’s voice call journey from beginning to end. Configure Service Cloud Voice flows for your contact center to determine how Salesforce handles inbound calls, outbound calls, and call transfers.")

-   [*Salesforce Help:* Update Your Contact Center](https://help.salesforce.com/s/articleView?id=service.voice_update_cc.htm&type=5&language=en_US "Salesforce Help: Update Your Contact Center - HTML (New Window)")

-   [*Amazon Documentation:* Contact Lens for Amazon Connect](https://aws.amazon.com/connect/contact-lens/ "Amazon Documentation: Contact Lens for Amazon Connect - HTML (New Window)")

## Related Topics

- kvsConsumerTrigger Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm)
- Amazon Connect Flows (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_contact_flows.htm)
