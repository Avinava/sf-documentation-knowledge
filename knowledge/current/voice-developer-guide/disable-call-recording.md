---
title: "Disable Call Recording"
domain: voice-developer-guide
topic: disable-call-recording
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.528Z
estimatedTokens: 455
keywords: [Disable, Call, Recording, Configure, Amazon, Connect, flow, voice]
---

# Disable Call Recording

> Configure an Amazon Connect flow to disable recording for a voice call.

# Disable Call Recording

Configure an Amazon Connect flow to disable recording for a voice call.

There are times when you don’t want to record a voice call. Follow these steps to disable call recording and to disable the Recording control for reps in the Omni-Channel widget. With the Recording control disabled, reps understand that the call isn’t recorded and aren’t able to toggle recording on or off.

This configuration applies to these telephony models:

-   Service Cloud Voice with Amazon Connect
-   Service Cloud Voice with Partner Telephony from Amazon Connect

This feature is available in Spring ’24 and later releases.

This example explains how to configure a sample flow to disable call recording for a voice call that goes through the flow.

To run through this example:

-   You must be an AWS admin with the ability to create flows in Amazon Connect.
-   You must be a Salesforce admin.

To configure a flow so that voice calls aren’t recorded:

1.  From the Amazon Connect console, select **Routing > Flows**.
2.  Select the name of the flow.
3.  If the flow has a Set recording and analytics behavior block, confirm that **Call recording** is set to **Off**.
4.  Add a Set contact attributes flow block to the flow, or edit an existing Set contact attributes block.
5.  Add these attributes to the Set contact attributes flow block:
    -   Namespace: User defined
    -   Key: callRecordingDisabled
    -   Select **Set manually** and set the value to true.
6.  Save your changes.

    Whenever a call comes in through this flow, the voice call isn’t recorded, and the Omni-Channel widget accurately reflects the recording state.

    ![Recording turned off in Omni-Channel](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice-examples-recording-disabled-omni.png&folder=voice_developer_guide)
