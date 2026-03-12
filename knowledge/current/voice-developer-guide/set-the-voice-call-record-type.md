---
title: "Set the Voice Call Record Type"
domain: voice-developer-guide
topic: set-the-voice-call-record-type
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.588Z
estimatedTokens: 512
keywords: [Voice, Call, Record, Configure, Amazon, Connect, flow, automatically]
---

# Set the Voice Call Record Type

> Configure an Amazon Connect flow to automatically set the record
      type for a voice call record.

# Set the Voice Call Record Type

Configure an Amazon Connect flow to automatically set the record type for a voice call record.

The record type determines the page layout of a voice call record. Configure an Amazon Connect flow to automatically set the record type for a voice call record. For example, configure an inbound flow in Amazon Connect to automatically set inbound voice calls to a “Platinum” record type. Whenever a call comes in through the inbound flow, the voice call record displays the page layout that’s associated with the “Platinum” record type. After a voice call record is set, reps can manually change its record type through the Salesforce Lightning Experience UI.

This configuration applies to the following telephony models:

-   Service Cloud Voice with Amazon Connect
-   Service Cloud Voice with Partner Telephony from Amazon Connect

This feature is available in the Winter '23 and later releases.

This example explains how to configure the Sample SCV Inbound Flow to automatically set the record type whenever a voice call goes through the flow.

To run through this example:

-   You must be an AWS admin with the ability to create flows in Amazon Connect.
-   You must be a Salesforce admin.

To configure a flow so that voice calls are automatically set to a record type:

1.  Find the 18-digit alphanumeric ID of the record type you want the flow to use. For example, 012S30000004B5VIAU.
2.  From the Amazon Connect console, select **Routing > Flows**.
3.  Click the name of the flow.
4.  Add a **Set contact attributes** flow block to the flow, making sure it appears before the Invoke AWS Lambda function block.
5.  Add the following attribute to the Set contact attributes flow block:
    -   Namespace: User defined
    -   Key: sfdc-RecordTypeId
    -   Select **Set manually** and set the value to the 18-digit ID of the record type you want to display.
6.  Click **Save**.

Whenever a call comes in through this flow, the voice call record displays the page layout for the record type you specified.
