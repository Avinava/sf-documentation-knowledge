---
title: "Give Customers the Option to Transfer to SMS in the Interactive Voice Response
    (IVR)"
domain: voice-developer-guide
topic: give-customers-the-option-to-transfer-to-sms-in-the-interactive-voice-response-i
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.576Z
estimatedTokens: 2667
keywords: [Give, Customers, Option, Transfer, SMS, Interactive, Voice, IVR, builds, created, “Link, New, Case, Call, Record”]
---

# Give Customers the Option to Transfer to SMS in the Interactive Voice Response
    (IVR)

> This example builds on the methods created in the “Link New or
      Existing Case to Voice Call Record” recipe by adding another IVR option to switch to SMS. When
      a customer selects the SMS option, a Voice Call record is created and a flow sends an
      automated outbound SMS message.

# Give Customers the Option to Transfer to SMS in the Interactive Voice Response (IVR)

This example builds on the methods created in the “Link New or Existing Case to Voice Call Record” recipe by adding another IVR option to switch to SMS. When a customer selects the SMS option, a Voice Call record is created and a flow sends an automated outbound SMS message.

| Ease of Implementation | Medium |
| --- | --- |
| Estimated Time to Implement | 1 hour |

## Prerequisites

To run through this example:

-   You must have at least one Digital Engagement license to enable SMS capabilities.
-   You must have a working [SMS channel](https://help.salesforce.com/articleView?id=livemessage_setup.htm&type=5&language=en_US) in Salesforce.
-   You must complete the previous example: [Link New or Existing Case to Voice Call Record](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_link_case_to_record.htm "This example shows how to take a caller’s inputs into the interactive voice response (IVR) system, pass them to Salesforce, and use them to create or link to Salesforce records. The example walks you through linking a case to a Voice Call record, but you can modify it to link to other Salesforce records, such as accounts and leads.").

To learn more about SMS Text Messaging with Salesforce, see [Set Up SMS Text Messaging](https://help.salesforce.com/articleView?id=livemessage_setup_sms_channels.htm&type=5&language=en_US).

## Step 1: Create an SMS Messaging Template

1.  From Setup, enter Messaging Templates in the Quick Find box, then select **Messaging Templates**.
2.  Click **New**.
3.  Complete the fields as follows.

    | Field Name | Value |
    | --- | --- |
    | Template Name | IVRTransfer |
    | Developer Name | IVRTransfer |
    | Message | Enter your message. For example: Our messaging team is here to help you! Please respond to this message to connect with an agent. |

4.  Click **Save**.

![Messaging template](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_examples_transfer_sms_message_template.png&folder=voice_developer_guide)

## Step 2: Update Your “SCVB - Voice Actions” Flow

1.  Copy the **Developer Name** for your Messaging channel. You’ll use this exact value in the flow that you’re going to update.
    1.  From Setup, enter Messaging Settings in the Quick Find box, then select **Messaging Settings**.
    2.  Click **Edit** for your desired SMS channel.
    3.  Record the value in the **Developer Name** field. For example, Text\_US\_15551234567. This value is used later for the Messaging Channel Unique Name.
2.  From Setup, enter Flows in the Quick Find box, then select **Flows** under **Process Automation**.
3.  Open the “SCVB - Voice Actions” flow.
4.  Add an outcome to the “IVRSelection” decision element.
    1.  Click **Edit Element** on the decision element.
    2.  Click the **+** next to **Outcome Order**.
    3.  Complete the fields as follows.

        | Field Name | Value |
        | --- | --- |
        | Label | IVRTransfer |
        | Condition Requirements to Execute Outcome | All Conditions are Are Met (AND) |
        | Resource | $Record.IVRType__cIVRType__c is a custom field for the VoiceCall Salesforce object. |
        | Operator | Equals |
        | Value | IVRTransferThis value matches the value set in the Contact Flow. |

    4.  Click **Done** to save the new outcome.![Edit decision for flow](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_examples_transfer_sms_flow_decision.png&folder=voice_developer_guide)
5.  On the “IVRTransfer” branch, click the **+** to add an element action.
    1.  On the Add Element screen, select **Action**.![Add action element](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_examples_transfer_sms_flow_add_element.png&folder=voice_developer_guide)
    2.  From the New Action page, search for and select **Messaging Notification**.
    3.  Complete the fields as follows.

        | Field Name | Value |
        | --- | --- |
        | Label | SendTransferSMS |
        | Messaging Channel Unique Name | Enter the Developer Name for your messaging channel that you recorded earlier. For example, Text_US_15551234567. |
        | Messaging Template Unique Name | Select the template you previously created (IVRTransfer). |
        | Context Record ID | Change the toggle to “Include” and enter {!$Record.Id}. |
        | Recipient Phone Number | Change the toggle to “Include” and select New Resource for the field value. Complete the fields as follows, and then click Done.Resource Type: FormulaAPI Name: SMSPhoneData Type: TextFormula: Enter RIGHT({!$Record.FromPhoneNumber}, 10). In other markets, such as in the UK, if the caller number is already in E164 format, use {!$Record.FromPhoneNumber} to ensure the outbound SMS is sent.NoteAmazon Connect passes in the caller’s phone number in E164 format. We use a formula to convert the number to the necessary format. (This example assumes US-based phone numbers. For example, +155512234567 is converted to 5551234567.) |
        | Recipient Record ID | Change the toggle to “Include” and enter {!$Record.Id}. |

    4.  Click **Done** to save the new action.![New flow action](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_examples_transfer_sms_flow_action.png&folder=voice_developer_guide)
6.  On your flow with the new outcome, click **Save As**, and then click **Save**.![Completed flow](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_examples_transfer_sms_flow_completed.png&folder=voice_developer_guide)
7.  Click **Activate** to activate your flow.

## Step 3: Import the “SCVCB - SMS Transfer” Contact Flow

When the “SCVCB - SMS Transfer” contact flow is called, it creates a voice call record with the IVRSelection equal to SMSTransfer.![SMS transfer contact flow](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_examples_transfer_sms_contact_flow.png&folder=voice_developer_guide)

1.  Download the [“SCVCB - SMS Transfer” contact flow](https://github.com/service-cloud-voice/examples-from-doc/blob/main/Recipes/TransfertoSMSinIVR/SCVCB%20-%20SMS%20Transfer) from our GitHub repo.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

    #### Note

    From GitHub, right-click the **Raw** button to download or save the linked file. After downloading, you must remove the .txt extension (so that there is no file extension) before attempting to upload it to Amazon Connect. Alternatively, clone [our GitHub repository](https://github.com/service-cloud-voice/examples-from-doc) to download all examples at once. This contact flow resides in the Recipes/TransfertoSMSinIVR folder.

2.  From Amazon Connect, select **Routing** | **Contact flows**.
3.  Click **Create contact flow**.
4.  On the far right of the contact flow page, click the disclosure triangle button and select **Import Flow (beta)**.
5.  Click **Select** and browse to the “SCVCB - SMS Transfer” contact flow you downloaded.
6.  In the “Set contact attributes” block (item 1 in screenshot), ensure that the Destination attribute matches the API name of the IVRSelection field you have on the Voice Call record. For example, sfdc-IVRType\_\_c.
7.  Update the function in the “Invoke AWS Lambda function” block. Select **xxxx-InvokeTelephonyIntegrationApiFunction**.
8.  In the “Invoke AWS Lambda function” block (item 2 in screenshot), click the block to open the options and replace the function with your **xxxx-InvokeTelephonyIntegrationApiFunction** Lambda function. Click **Save**.
9.  Click **Publish**.

## Step 4: Add SMS to the “SCVCB - New Or Existing Case” Contact Flow

Update the “SCVCB - New Or Existing Case” contact flow from the previous example ([Link New or Existing Case to Voice Call Record](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_link_case_to_record.htm "This example shows how to take a caller’s inputs into the interactive voice response (IVR) system, pass them to Salesforce, and use them to create or link to Salesforce records. The example walks you through linking a case to a Voice Call record, but you can modify it to link to other Salesforce records, such as accounts and leads.")) to include the SMS option.![Updated new or existing case flow](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_examples_transfer_sms_contact_flow_2.png&folder=voice_developer_guide)

1.  Open the contact flow “SCVCB - New Or Existing Case”.
2.  Update the “Get customer input” block.
    1.  Click the “Get customer input” block.
    2.  To update the text-to-speech entry to include SMS as option 3, change the text to: Thank you for calling. Press 1 if you are calling about an existing case. Press 2 if you are calling about a new case. Or press 3 to Message with our team.
    3.  Scroll to the bottom of the block and click **Add another condition**.
    4.  For the new option, enter 3.
    5.  Click **Save**.
3.  Add a new “Transfer to flow” block (item 1 in screenshot).
    1.  From the left panel, in the “Terminate/Transfer” section, drag the “Transfer to flow” block onto the contact flow.
    2.  Open the block and select **SCVB - SMS Transfer**, which is the contact flow you previously created.

        ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=voice_developer_guide)

        #### Tip

        If you don’t see this flow, go back to that contact flow and click **Publish**. Only published flows appear in the list.

    3.  Click **Save**.
4.  Connect Option 3 of the “Get customer input” block to the left side of this “Transfer to flow” block.
5.  Add an error message to the “Transfer to flow” block (item 2 in screenshot).
    1.  From the left panel, in the “Interact” section, drag the “Play prompt” block to the right of the “Transfer to flow” block.
    2.  Open the “Play prompt” block and select **Text-to-speech or chat text**.
    3.  Enter this text: Error with transfer to SMS flow..
    4.  Click **Save**.
6.  Connect the output of the “Play prompt” block to one of the closest “Disconnect” blocks.
7.  Click **Publish**.

## Test This Example

To test this example, call your number. You should now hear an option 3 for SMS transfer. Press 3 on your phone. The following events should occur:

1.  A Voice Call record is created with IVRSelection equal to SMSTransfer.
2.  You receive an SMS on your phone with the message that you configured in your template. Reply to the message to initiate a messaging session. Make sure your rep is logged in with the appropriate Omni-Channel presence status for Messaging.

If you don’t received an SMS, check the Messaging logs.

## Related Topics

- Link New or Existing Case to Voice Call Record (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_link_case_to_record.htm)
