---
title: "Enable Voice Call Transfers Using Omni-Channel Flows and Amazon Connect"
domain: voice-developer-guide
topic: enable-voice-call-transfers-using-omni-channel-flows-and-amazon-connect
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.545Z
estimatedTokens: 1085
keywords: [Enable, Voice, Call, Transfers, Omni-Channel, Flows, Amazon, Connect, Configure, feature, via, Salesforce]
---

# Enable Voice Call Transfers Using Omni-Channel Flows and Amazon Connect

> Configure this feature to enable voice call transfers via Salesforce
      Omni-Channel flows.

# Enable Voice Call Transfers Using Omni-Channel Flows and Amazon Connect

Configure this feature to enable voice call transfers via Salesforce Omni-Channel flows.

This configuration applies to the following telephony models:

-   Service Cloud Voice with Amazon Connect
-   Service Cloud Voice with Partner Telephony from Amazon Connect

To enable this feature for Service Cloud Voice with Partner Telephony, go to [Enable Voice Call Transfers Using Omni-Channel Flows](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_omni_enable_voice_call_transfers.htm).

Omni-Channel flows can be used to transfer voice calls through External Routing. Configure this feature to enable voice call transfers using Omni-Channel flows. When this feature is enabled, all active flows of process type "Omni-Channel Flow" that are assigned to the phone channel appear in the Omni-Channel widget for reps to select as transfer destinations.

Configuring the feature includes: 1) creating an Omni-Channel flow in Salesforce to route calls to a rep or queue, 2) creating a Service Cloud Voice contact flow in Amazon Connect to transfer and route voice calls, 3) creating an Amazon Connect quick connect of type “queue” to transfer voice calls using the newly created contact flow, and editing the Salesforce contact center details by selecting the quick connect to be used for the Omni-Channel flow transfer.

To enable voice call transfers using Omni-Channel flow and Amazon Connect:

1.  Log in to Salesforce and create an Omni-Channel flow, using the “Voice Calls Routed to Agents and Queues” template as a guide.
2.  Log in to Amazon AWS and create a contact flow in Amazon Connect, using the [Sample SCV Transfer Flow for Omni-Channel Transfers](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Transfer%20Flow%20For%20Omni-Channel%20Transfers) contact flow in GitHub as a template. The contact flow generates a transfer voice call and routes the call using the [Execute an Omni-Channel Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_omniflow_execute.htm) REST API.
3.  Log in to Amazon AWS and create an Amazon Connect quick connect with the following settings:
    -   **Name**: Enter a unique name for the quick connect. This is the name that you’ll select when you connect the quick connect to your contact center in Salesforce.
    -   **Type**: Select **Queue**.
    -   **Destination**: Select the destination queue. This can be any queue, such as Amazon Connect’s default BasicQueue.
    -   **Contact flow**: Select the name of the contact flow you created.
    -   **Description**: Optionally enter a brief description of the quick connect.
4.  Log in to Salesforce and edit the Contact Center Details page in Salesforce by setting the Quick Connect for Omni-Channel Flow Transfers field to the name of the Amazon Connect quick connect you created.

When a rep transfers a voice call to the Omni-Channel flow, Salesforce uses the Amazon Connect UpdateContactAttributes action to set a contact attribute as the fully qualified name of the Omni-Channel flow of the parent contact. The call is transferred to the quick connect that’s selected in the “Quick Connect for Omni-Channel Flow Transfers” field of the Contact Center Details page in Salesforce. The contact flow defined in the quick connect creates a voice call like it would with other voice call transfers, and then executes the Omni-Channel flow using the [Execute an Omni-Channel Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_omniflow_execute.htm) API passing the flow name from contact attribute.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

#### Note

-   Make sure the reps and queues are mapped to Amazon Connect ARN. If you don't, the Execute an Omni-Channel Flow request returns an error. Rep and queue mappings are configured in the Contact Center Details page in Salesforce.
-   Don't add the newly created quick connect directly to the list of transfer destinations in the Omni-Channel softphone. If you do, transfers to the quick connect will fail.
