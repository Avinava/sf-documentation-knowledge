---
title: "Link New or Existing Case to Voice Call Record"
domain: voice-developer-guide
topic: link-new-or-existing-case-to-voice-call-record
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.542Z
estimatedTokens: 2820
keywords: [Link, New, Case, Voice, Call, Record, how, take, caller’s, inputs, interactive, IVR, system, pass, Salesforce]
---

# Link New or Existing Case to Voice Call Record

> This example shows how to take a caller’s inputs into the
      interactive voice response (IVR) system, pass them to Salesforce, and use them to create or
      link to Salesforce records. The example walks you through linking a case to a Voice Call
      record, but you can modify it to link to other Salesforce records, such as accounts and
      leads.

# Link New or Existing Case to Voice Call Record

This example shows how to take a caller’s inputs into the interactive voice response (IVR) system, pass them to Salesforce, and use them to create or link to Salesforce records. The example walks you through linking a case to a Voice Call record, but you can modify it to link to other Salesforce records, such as accounts and leads.

| Ease of Implementation | Medium |
| --- | --- |
| Estimated Time to Implement | 40 minutes |

One of the advantages of Service Cloud Voice is that a Voice Call record is created to track every interaction. By capturing caller inputs from the IVR on the Voice Call record, you can use Salesforce automation tools, such as Process Builder, Flow, or APEX, to automatically create or link Salesforce records and display them to the rep for caller context. You can also report on caller selections.

In this example, we show you how to:

-   Import a sample contact flow into Amazon Connect that updates two custom fields in Salesforce.
-   Add a Salesforce flow that takes action in Salesforce based on contact flow values passed to the custom fields.

The first custom field is called IVRType. We use this field to store the calls IVR Type or selection (for example: Press 1 for a new case, Press 2 for an existing case). The second custom field, IVRInput, is used to store a customer input such as case subject or case number. The Salesforce flow creates a new case or finds an existing case and links it to the voice call record to add context for the rep.

You can modify this example to support your business processes. For example, create or find a lead instead of a case.

## Prerequisites

To run through this example:

-   You must be an AWS admin with the ability to import contact flows. To learn more, see [Import/export contact flows](https://docs.aws.amazon.com/connect/latest/adminguide/contact-flow-import-export.html) in the Amazon Connect Administrator Guide.
-   You must be a Salesforce admin with the ability to install packages. To learn more, see [Install a package](https://help.salesforce.com/articleView?id=distribution_installing_packages.htm&type=5&language=en_US) in Salesforce Help.

## Step 1: Install the Example Package

Install the [SCVCB - Voice Actions (New or Existing Case)](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t3t000002s92T&isdtp=p1) package in Salesforce. This link opens a Salesforce login page if you're not already logged in. Log in to the org where you want to install the package. This package contains the following items.

-   Custom field: IVRType\_\_c
-   Custom field: IVRInput\_\_c
-   Record-triggered flow: “SCVCB - Voice Actions”

## Step 2: Add Fields to the Voice Call Page

1.  From Setup, open the **Object Manager**.
2.  Search for and select the**Voice Call** object.
3.  Click **Page Layouts**.
4.  Select a page layout to update and add the two custom fields: IVRType and IVRInput.
5.  Save your work.

## Step 3: Activate the Flow

1.  From Setup, enter Flows in the Quick Find box, then select **Flows** under Process Automation.
2.  Open the “SCVB - Voice Actions” flow.![SCVB Voice actions flow](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_examples_link_case_flow.png&folder=voice_developer_guide)
3.  Click **Activate**. When active, the flow makes the following changes.
    -   When IVRType = ExistingCase, the flow finds the case that matches the case number entered in the IVR and links it to the Voice Call record.
    -   For any other IVRType value, a new case is created and linked to the Voice Call record.
4.  (Optional) Modify the flow to add more paths by adding conditions and actions to the Decision Element.

## Step 4: Import the “SCVCB - RouteToAgent” Contact Flow

The “SCVCB - RouteToAgent” contact flow is similar to the “[Sample SCV Inbound Flow](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Inbound%20Flow)” contact flow that Salesforce already provides. However, we’ve removed several of the play prompts so it can be reused with future flows. This flow creates the VoiceCall record, enables recording, and enables transcription.![Route to agent contact flow](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_examples_link_case_contact_flow.png&folder=voice_developer_guide)

1.  Download the [“SCVCB - RouteToAgent” contact flow](https://github.com/service-cloud-voice/examples-from-doc/blob/main/Recipes/LinkCasetoVoiceCall/SCVCB%20-%20RouteToAgent) from our GitHub repo.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

    #### Note

    From GitHub, right-click the **Raw** button to download or save the linked file. After downloading, you must remove the .txt extension (so that there is no file extension) before attempting to upload it to Amazon Connect. Alternatively, clone [our GitHub repository](https://github.com/service-cloud-voice/examples-from-doc) to download all examples at once. This contact flow resides in the Recipes/LinkCasetoVoiceCall folder.

2.  Log into your Amazon Connect instance.
    1.  From Setup in your Salesforce org, enter **Contact Centers** in the Quick Find box, then select **Contact Centers** under Voice.
    2.  In the row containing your contact center, click **Telephony Provider Settings** to open Amazon Connect.
3.  From Amazon Connect, select **Routing** | **Contact flows**.
4.  Click **Create contact flow**.
5.  On the far right of the contact flow page, click the disclosure triangle button and select **Import Flow (beta)**.
6.  Click **Select** and browse to the “SCVCB - RouteToAgent” contact flow you downloaded.
7.  In the first “Invoke AWS Lambda function” block (item 1 in screenshot), click the block to open the options and replace the function with your **xxxx-InvokeTelephonyIntegrationApiFunction** Lambda function. Click **Save**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

    #### Note

    To learn what this function does, see [InvokeTelephonyIntegrationApiFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm "The invokeTelephonyIntegrationApi function contains actions which orchestrate voice call handling and routing. The function integrates telephony events with Salesforce, ensuring calls are properly processed and directed through the appropriate Omni-Channel logic.").

8.  In the second “Invoke AWS Lambda function” block (item 2 in screenshot), click the block to open the options and replace the function with your **xxxx-kvsConsumerTrigger** Lambda function. Click **Save**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

    #### Note

    To learn what this function does, see [kvsConsumerTrigger Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm "This Lambda function is the initiation point for starting real-time transcription.").

9.  In the “Set working queue” block (item 3 in screenshot), click the block to open the options and replace the queue with your queue (for example, “BasicQueue”).
10.  Click **Publish** to save and publish the flow.

## Step 5: Import the “SCVCB - New or Existing Case” Contact Flow

The “SCVCB - New or Existing Case” contact flow asks the customer if they’re calling about an existing case or if they want to create a new case.![New or existing case contact flow](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_examples_link_case_contact_flow_2.png&folder=voice_developer_guide)

In this contact flow, we map contact attributes to custom fields on the Voice Call record by using the naming convention “sfdc-{DeveloperName}”. We use the developer name for the custom field in Salesforce, including the “\_\_c” suffix used for all custom fields. When the InvokeTelephonyIntegrationApiFunction Lambda function creates a Voice Call record, it looks for all contact attributes with this format and maps them to the appropriate Salesforce field.

1.  Download the [“SCVCB - New or Existing Case” contact flow](https://github.com/service-cloud-voice/examples-from-doc/blob/main/Recipes/LinkCasetoVoiceCall/SCVCB%20-%20New%20or%20Existing%20Case) from our GitHub repo.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

    #### Note

    From GitHub, right-click the **Raw** button to download or save the linked file. After downloading, you must remove the .txt extension (so that there is no file extension) before attempting to upload it to Amazon Connect. Alternatively, clone [our GitHub repository](https://github.com/service-cloud-voice/examples-from-doc) to download all examples at once. This contact flow resides in the Recipes/LinkCasetoVoiceCall folder.

2.  From Amazon Connect, select **Routing** | **Contact flows**.
3.  Click **Create contact flow**.
4.  On the far right of the contact flow page, click the disclosure triangle button and select **Import Flow (beta)**.
5.  Click **Select** and browse to the “SCVCB - New or Existing Case” contact flow you downloaded.
6.  In the upper “Set contact attributes” block (item 1 in screenshot), click the block to view the options. Note that two contact attributes are set: sfdc-IVRType\_\_c is set to ExistingCase, and sfdc-IVRInput\_\_c is set to the four-digit input from the caller.
7.  In the lower “Set contact attributes” block (item 2 in screenshot), click the block to view the options. Note that two contact attributes are set: sfdc-IVRType\_\_c is set to NewCase, and sfdc-IVRInput\_\_c is set to New Voice Case. You can change this value to customize the case subject based on your business process.
8.  In the “Transfer to flow” block (item 3 in screenshot), click the block to view the options. Remove the existing flow and replace it with “SCVCB - RouteToAgent”, which you published earlier.
9.  Click **Publish**.

## Test This Example

Here’s how to test this example.

1.  In Amazon Connect, from the Routing menu, select **Phone numbers**.
2.  Click the phone number you use for testing.
3.  Change the **Contact Flow / IVR** value to SCVCB - New Or Existing Case.
4.  Click **Save**.
5.  In Salesforce, log in to Omni-Channel so you are ready to accept calls.
6.  Dial the number and test the new contact flow.
7.  Accept the call in Omni-Channel:
    1.  If you selected New Case, you see that a new case has been created and linked to the Voice record in the Related Record field.
    2.  If you selected Existing Case, you see the case linked to the Voice record in the Related Record field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

#### Note

This example assumes a four-digit case number. If your case numbers use a different number of digits, modify the example.

1.  In the “SCVCB - New Or Existing Case” contact flow, open the “Store customer contact” block and change the Custom Maximum Digits value.
2.  In the “SCVCB - Voice Actions” flow, update the Get8DigitCaseNumber formula to append the necessary number of zeros to match the Salesforce case number.

## Related Topics

- InvokeTelephonyIntegrationApiFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm)
- kvsConsumerTrigger Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm)
