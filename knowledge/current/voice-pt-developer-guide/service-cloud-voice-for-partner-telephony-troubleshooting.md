---
title: "Service Cloud Voice for Partner Telephony Troubleshooting"
domain: voice-pt-developer-guide
topic: service-cloud-voice-for-partner-telephony-troubleshooting
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.200Z
estimatedTokens: 1160
keywords: [Service, Cloud, Voice, Partner, Telephony, Troubleshooting, Review, tips, common, problems, Omni-Channel, Doesn't, Show, AgentWork, Accept]
---

# Service Cloud Voice for Partner Telephony Troubleshooting

> Review tips for troubleshooting common problems.

# Service Cloud Voice for Partner Telephony Troubleshooting

Review tips for troubleshooting common problems.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

This guide is for telephony providers who are creating a solution that integrates Service Cloud Voice with their telephony system. If that’s not you, see the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_intro.htm) or [Salesforce Help](https://help.salesforce.com/articleView?id=service.voice_about.htm&type=5&language=en_US). To update your solution to include Bring Your Own Channel for CCaaS Messaging capabilities along with Service Cloud Voice, see the [Bring Your Own Channel Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/guide/add-messaging-to-voice.html).

## Omni-Channel Doesn't Show AgentWork to Accept or Reject Incoming Call

**Issues you could see:**

-   Omni-Channel widget doesn’t show the AgentWork user interface (UI) to accept or reject the call.
-   Omni-Channel user interface (UI) goes blank on incoming call.

**Possible causes:**

-   AgentWork creation failed. Check your connector CALL\_STARTED event payload and verify that you don’t have invalid data. Also, check that the rep is online with the correct Omni-Channel status for the assigned phone channel.
-   Salesforce Omni-Channel has an outage, which prevents pushing AgentWork from the server to the rep console UI. Check Omni-Channel service status at [trust.salesforce.com](https://trust.salesforce.com). To verify that AgentWork has been created successfully, refresh the page. Omni-Channel should load the AgentWork and allow the rep to accept or decline the call.

## The Connector Doesn’t Load Successfully

**Issues you could see:**

-   Omni-Channel widget doesn’t show the phone control panel.
-   Log in failed in Omni-Channel widget.

**Possible causes:**

-   Your org doesn’t have the proper licenses to allow you to use the Service Cloud Voice Partner Telephony product.
-   The rep isn’t assigned to the required permission set.
-   The rep isn’t added to the Contact Center.
-   The adapter URL isn’t configured correctly in your Contact Center.
    -   To find out the adapter URL of your Contact Center, you could use any Salesforce public API to read the CallCenter object.
    -   The adapter URL in the Contact Center gets inserted from the value in the ConversationVendorInfo record. When you import the Contact Center XML file in Setup, it points to the developer name of the ConversationVendorInfo record.
-   The adapter URL isn’t accessible.
-   The microphone isn’t allowed and enabled in the browser.
-   CORS-related issue. The connector is loaded in an iframe. You can try to set up CORS for your host in Salesforce Setup.

## Partner Telephony Setup Node Doesn’t Display

**Issues you could see:**

-   You can't find the Partner Telephony Setup node in Salesforce Setup.
-   You can’t find the Partner Telephony Contact Center List View node in Salesforce Setup.

**Possible causes:**

-   Your org doesn’t have the proper licenses to allow you to use the Service Cloud Voice for Partner Telephony product.
-   Service Cloud Voice for Partner Telephony product isn’t turned on.
    -   If Voice for Partner Telephony isn’t enabled in the org, the Partner Telephony Contact Center node that shows the Contact Center list view doesn’t appear in the Salesforce Setup.

## Phone Control Fails

**Issues you could see:**

-   Some of the phone controls aren’t working (for example, accept a call, hold a call, transfer a call).
-   Seeing error message or warnings in the Service Console.

**Possible causes:**

-   The connector API isn’t implemented properly.

**Troubleshooting tips:**

-   Open the browser developer console and look for errors. Pay attention to the log messages that start with \[sdk\] or \[connector\].
-   Enable the Debug mode in Salesforce to see non-minified JavaScript code in the browser developer console.
-   Use the remote simulator to compare the API parameters and responses between the demo connector and your connector implementation.

## Download Connector Logs

Partners can log messages from their connector and then download these logged messages as a text file.

See [Download Connector Logs](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_connector_logs.htm "Partners can log messages from their connector and then download these logged messages as a text file.").

## Related Topics

- Download Connector Logs (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_connector_logs.htm)
