---
title: "Pass Data from the Interactive Voice Response (IVR) System"
domain: voice-developer-guide
topic: pass-data-from-the-interactive-voice-response-ivr-system
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.532Z
estimatedTokens: 848
keywords: [Pass, Data, Interactive, Voice, IVR, System, explains, how, Amazon, Connect, Salesforce, org, Prerequisites, Step, Custom]
---

# Pass Data from the Interactive Voice Response (IVR) System

> This example explains how to pass data from the Interactive Voice
      Response (IVR) system in Amazon Connect to your Salesforce org.

# Pass Data from the Interactive Voice Response (IVR) System

This example explains how to pass data from the Interactive Voice Response (IVR) system in Amazon Connect to your Salesforce org.

| Ease of Implementation | Easy |
| --- | --- |
| Estimated Time to Implement | 20 minutes |

## Prerequisites

If your contact center was created before the Spring ’21 release, download the [Sample SCV Inbound Flow](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ContactFlows/Sample%20SCV%20Inbound%20Flow) contact flow from the [Service Cloud Voice repo on Github](https://github.com/service-cloud-voice/examples-from-doc). Import it into Amazon Connect if it’s not already imported. Be sure to update the Invoke AWS Lambda function block so that it correctly points to the Lambda function in your Amazon Connect instance. If your contact center was created after the Spring ’21 release, this contact flow is already installed into Amazon Connect.

To implement this use case, you need either the AWS root user or AWS administrator credentials.

## Step 1: Create a Custom Field on the VoiceCall Object

Create a custom field on the VoiceCall object in your Salesforce org that corresponds to the data that you want passed from the IVR.

1.  From Setup, at the top of the page, select **Object Manager**.
2.  In the Quick Find box, type Voice Call and select the **Voice Call** object.
3.  Select **Fields & Relationships** from the left pane.
4.  Select **New** to create a field.
5.  Follow the steps to create a custom field to hold the data. A text field is the most flexible, but you can use any type of supported field. Geolocation and read-only fields aren’t supported types for custom fields. To learn more about creating custom fields, see [Create Custom Fields](https://help.salesforce.com/articleView?id=adding_fields.htm&type=5&language=en_US).

## Step 2: Modify the Contact Flow

Add a “Set contact attributes” block in your contact flow to add custom field data.

1.  Log in to your Amazon Connect instance.
2.  Hover over **Routing**, then click **Flows**.
3.  Select the **Sample SCV Inbound Flow** contact flow (or whichever inbound flow you’re using).
4.  Create a “Set contact attributes” block *before* the [InvokeTelephonyIntegrationApiFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm "The invokeTelephonyIntegrationApi function contains actions which orchestrate voice call handling and routing. The function integrates telephony events with Salesforce, ensuring calls are properly processed and directed through the appropriate Omni-Channel logic.") Lambda function call. For the destination attribute, specify the name of the custom field with the “sfdc-” prefix added. The value of this attribute is the data to pass into the custom field For example, MyField\_\_c would become sfdc-MyField\_\_c. For the value, specify whatever data you want stored in your VoiceCall record.

    ![Custom field in contact flow](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_example_set_user_defined_contract_attribute.png&folder=voice_developer_guide)

5.  Publish the updated contact flow.

## Test This Example

To test this example, perform an inbound call and review the VoiceCall record that is created for that call. The field is set with the value from the Amazon Connect contact flow.

## Related Topics

- InvokeTelephonyIntegrationApiFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm)
