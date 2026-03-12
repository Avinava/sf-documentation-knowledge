---
title: "Enable Voicemail Support"
domain: voice-developer-guide
topic: enable-voicemail-support
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.603Z
estimatedTokens: 3521
keywords: [Enable, Voicemail, Support, Configure, route, recordings, transcriptions, reps, play, back, routed, any, time, Prerequisites, Step]
---

# Enable Voicemail Support

> Configure voicemail support to route voicemail recordings and transcriptions to reps.
    Reps can play back the recordings and transcriptions routed to them at any time.

# Enable Voicemail Support

Configure voicemail support to route voicemail recordings and transcriptions to reps. Reps can play back the recordings and transcriptions routed to them at any time.

| Ease of Implementation | Medium |
| --- | --- |
| Estimated Time to Implement | 30 minutes |

This configuration applies to the [Service Cloud Voice with Partner Telephony from Amazon Connect](https://help.salesforce.com/s/articleView?id=service.voice_turn_on_parent.htm&type=5&language=en_US) telephony setup.

This feature is available in the Spring '23 and later releases.

In this example, we show you how to set up your system to support voicemail. There are two ways to enable Voicemail support, depending on how you provisioned the Amazon Connect instance when you created the contact center:

-   If the contact center was created using a new Amazon Connect instance, you must upgrade to contact center version 11.0 or later to get the latest Lambda functions.
-   If the contact center was created using an existing Amazon Connect instance, you must configure Kinesis as the event source to work with the Lambda functions in the ServiceCloudVoiceLambdas serverless app.

In this example, you’ll perform the following steps to enable voicemail support for Service Cloud Voice with Partner Telephony from Amazon Connect.

1.  Add and configure the VoiceMailAudioProcessingFunction Lambda function. This step only applies if the contact center was created using an existing Amazon Connect instance.
2.  Enable Amazon EventBridge.
3.  Configure an EventBridge Rule for the VoiceMailTranscribeFunction Lambda function.
4.  Configure an EventBridge Rule for the VoiceMailPackagingFunction Lambda function.
5.  Bind the voicemail subflow to the inbound flow in Amazon Connect.

This example applies to both contact centers created using a new or existing Amazon Connect instance.

See Lambda Functions for more information about the VoiceMailAudioProcessingFunction, VoiceMailTranscriberFunction, and VoiceMailPackagingFunction Lambda functions.

To access Amazon Web Services documentation, go to [https://docs.aws.amazon.com](https://docs.aws.amazon.com).

## Prerequisites

Complete the prerequisites before you perform the steps:

-   Verify that you have AWS root user or AWS administrator credentials.
-   Deploy the ServiceCloudVoiceLambdas.
-   If the contact center was originally created using a new Amazon Connect instance, upgrade the contact center to version 11.0 or later.
-   Note the name of the S3 bucket you’ll use to store the voicemail recordings and transcription files. The S3 object name is in the format <contactcentername-salesforceuniquerandomID>.

To implement this use case:

## Step 1: Add and Configure the VoiceMailAudioProcessingFunction Lambda Function.

Perform this step if the contact center was created using an existing Amazon Connect instance. Skip this step if the contact center was created using a new Amazon Connect instance.

Add and configure an Amazon Kinesis trigger to notify the VoiceMailAudioProcessingFunction Lambda function when an Amazon Contact Record (previously called contact trace record or CTR) event is generated after a caller leaves a voicemail message and hangs up.

1.  From the AWS Management Console, go to the AWS Lambda service and select **Functions**.
2.  In the Function name list, click **VoiceMailAudioProcessingFunction**.
3.  Click **+Add trigger**.
4.  In the Trigger configuration section, select **Kinesis** from the dropdown menu.
5.  Set the Batch size to **10**.
6.  Set the Starting position to **Trim Horizon**.

    ![Amazon Kinesis trigger configuration](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_example_voicemail_voicemailaudioprocessingfunction_amazon_kinesis_trigger.png&folder=voice_developer_guide)

7.  Click **Add**.
8.  Click the **Configuration** tab, select **Environment variables**, and then click **Edit**.
9.  Find the s3\_recordings\_bucket key and replace the testVoiceMailBucket value with the name of the contact center S3 bucket that will store the voicemail recordings and transcriptions. For example, contactcenter-123456789123. You can select an S3 bucket that you already use for Service Cloud Voice.

    ![Amazon Kinesis environment varilable configuration](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_example_voicemail_voicemailaudioprocessingfunction_aws_lambda_env_variable_s3bucket.png&folder=voice_developer_guide)

10.  Click **Save**.

## Step 2: Enable Amazon EventBridge

Enable Amazon EventBridge so it can trigger actions.

1.  From the AWS Management Console, open the Amazon S3 console at [https://console.aws.amazon.com/s3/](https://console.aws.amazon.com/s3/).
2.  In the Buckets list, click the name of the S3 bucket that will store the voicemail recordings and transcriptions. You can select an S3 bucket that’s already used for Service Cloud Voice purposes.
3.  Click the **Properties** tab.
4.  In the Amazon EventBridge section, click **Edit**.
5.  In the Edit Amazon EventBridge screen, under **Send notifications to Amazon EventBridge for all events in this bucket**, select the **On** option.

    ![Amazon EventBridge enable notifications for all events in bucket](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_example_voicemail_amazon_eventbridge_enable.png&folder=voice_developer_guide)

6.  Click **Save changes**.

## Step 3: Configure an Amazon EventBridge Rule for VoiceMailTranscribeFunction

Configure an EventBridge rule to notify the VoiceMailTranscribeFunction when voicemail recordings are added to the voicemail\_recordings folder in the contact center’s Amazon S3 bucket.

1.  From the AWS Management Console, go to **Amazon EventBridge > Rules**.
2.  Click **Create rule**.
3.  In the Define rule detail screen, give the rule a name and optional description. Leave the other default settings.

    ![Amazon EventBridge define VoiceMailTranscribeFunction rule](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_example_voicemail_voicemailtranscribefunction_amazon_eventbridge_define_rule.png&folder=voice_developer_guide)

4.  Click **Next**.
5.  In the Build event pattern screen, scroll down to the Event pattern section and click **Custom patterns (JSON editor)**.
6.  Copy the following JSON sample event and paste it into the Event pattern text box, replacing the name of the bucket with your contact center’s S3 object name:

    { "detail-type": \["Object Created"\], "source": \["aws.s3"\], "detail": { "bucket": { "name": \["contactcenter-123456789123"\] // replace with contact center S3 bucket name }, "object": { "key": \[{ "prefix": "voicemail\_recordings/" }\] } } }

    ![Amazon EventBridge define event pattern for VoiceMailTranscribeFunction rule](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_example_voicemail_voicemailtranscribefunction_amazon_eventbridge_event_pattern.png&folder=voice_developer_guide)

7.  Click **Next**.
8.  In the Select target(s) screen, set the Select a target dropdown to Lambda function, and set the Function to the VoiceMailTranscribeFunction function.

    ![Amazon EventBridge add Lambda function to VoiceMailTranscribeFunction rule](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_example_voicemail_voicemailtranscribefunction_amazon_eventbridge_event_select_targets.png&folder=voice_developer_guide)

9.  Click **Next** twice.
10.  In the Review and create screen, review the settings for your new EventBridge rule and click **Create rule**.

## Step 4: Configure an Amazon EventBridge Rule for VoiceMailPackagingFunction

Configure an EventBridge rule to notify the VoiceMailPackagingFunction when voicemail transcriptions are added to the voicemail\_transcriptions folder in the contact center’s Amazon S3 bucket.

1.  From the AWS Management Console, go to Amazon EventBridge > Rules.
2.  Click Create rule.
3.  In the Define rule detail screen, give the rule a name and optional description. Leave the other default settings.

    ![Amazon EventBridge define event pattern for VoiceMailPackagingFunction rule](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_example_voicemail_voicemailpackagingfunction_amazon_eventbridge_define_rule.png&folder=voice_developer_guide)

4.  Click **Next**.
5.  In the Build event pattern screen, scroll down to the Event pattern section and click Custom patterns (JSON editor).
6.  Copy the following JSON sample event and paste it into the Event pattern text box, replacing the name of the bucket with your contact center’s S3 object name:

    { "detail-type": \["Object Created"\], "source": \["aws.s3"\], "detail": { "bucket": { "name": \["contactcenter-123456789123"\] // replace with contact center S3 bucket name }, "object": { "key": \[{ "prefix": "voicemail\_transcripts/" }\] } } }

    ![Amazon EventBridge define event pattern for VoiceMailPackagingFunction rule](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_example_voicemail_voicemailpackagingfunction_amazon_eventbridge_event_pattern.png&folder=voice_developer_guide)

7.  Click **Next**.
8.  In the Select target(s) screen, click the Select a target dropdown and select **Lambda function**. Click the **Function** dropdown and select **VoiceMailPackagingFunction**.
9.  Click **Next** twice.
10.  In the Review and create screen, review the settings for your new EventBridge rule and click **Create rule**.

     ![Amazon EventBridge add Lambda function to VoiceMailPackagingFunction rule](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_example_voicemail_voicemailpackagingfunction_amazon_eventbridge_select_targets.png&folder=voice_developer_guide)


## Step 5: Add the Voicemail Subflow in Amazon Connect

Bind the voicemail subflow to the inbound flow. You must have permissions to create flows in Amazon Connect.

1.  From the Amazon Connect console, select **Routing > Contact Flow**.
2.  Make a copy of the Sample SCV Voicemail Subflow. Click the **Sample SCV Voicemail Subflow**, click the dropdown arrow next to the Save button, select **Save As**, enter a name for the voicemail subflow, and click **Save**.
3.  Click the inbound flow where you’ll add the voicemail subflow.
4.  Add a **Transfer to flow** flow block and configure it to **Set manually: <Name of the voicemail subflow>**.
5.  Add a **Get customer input** flow block and configure prompts to give the caller the option to either proceed with the voice call or leave a voicemail message.
6.  Insert the **Get customer input** flow block into the inbound flow so the voice call option transfers to the **Transfer to flow: Omni-Channel** flow block and the voicemail option transfers to the **Transfer to flow: Voicemail** flow block.
7.  Click **Save**.

![Sample Voicemail Contact Flow in Amazon Connect](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_example_voicemail_aws_contact_flow_byoa.png&folder=voice_developer_guide)

## Voicemail Process

The diagram illustrates the voicemail process that happens when a caller initiates a voice call with the contact center.

(1) A caller initiates a voice call with the contact center, which triggers an Amazon Connect inbound flow to begin. When the flow reaches the Get customer input prompt flow block, the caller chooses to leave a voicemail message.

(2) After the caller leaves the voicemail message and hangs up, Amazon Connect generates a Contact Record (previously called contact trace record or CTR) event and streams the voicemail data to Amazon Kinesis.

(3) The contact record event triggers the VoiceMailAudioProcessingFunction Lambda function to get the voicemail recordings from Amazon Kinesis and saves them as WAV files to the voicemail\_recordings folder in the contact center’s Amazon S3 bucket.

(4) Every time a voicemail recording file is added to the voicemail\_recordings folder, an EventBridge rule triggers the VoiceMailTranscriberFunction Lambda function to read the files in the S3 bucket, transcribe the recordings, and save the files into the voicemail\_transcriptions folder in the contact center’s Amazon S3 bucket.

(5) Every time a voicemail recording file is added to the voicemail\_transcriptions folder, an EventBridge rule triggers the VoiceMailPackagingFunction Lambda function to create a VoiceCall record, attach the voicemail recording and transcription files to the record, and route it all to the Omni-Channel flow that was configured in the contact center.

The rep who receives the voice call can play back the voicemail recording and read the transcription at any time.

![Sample Voicemail Process Flow with Amazon Connect](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_example_voicemail_process_flow_byoa.png&folder=voice_developer_guide)

-   **[Ensure Correct Delivery of Voicemails](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_pt_voicemail_subflow.htm)**
    If you have voicemail enabled but voicemails aren't being delivered to the reps, update your Voicemail subflow to ensure the callOrigin field in the VoiceCall record is updated in time. For voicemails, the value of the callOrigin field must be Voicemail. You can update the Voicemail subflow to add a block to invoke the Lambda to call the SF REST API to make sure that the callOrigin field is updated in time, and voicemails are correctly delivered to the reps.

#### See Also

-   [VoiceMailAudioProcessingFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailaudioprocessingfunction.htm "This Lambda function processes voicemail recordings.")

-   [VoiceMailTranscribeFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailtranscribefunction.htm "This Lambda function transcribes voicemail recordings.")

-   [VoiceMailPackagingFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailpackagingfunction.htm "This Lambda function creates a VoiceCall record, attaches the voicemail recording and transcription files to the record, and routes it all to the Omni-Channel flow.")

## Related Topics

- Ensure Correct Delivery of Voicemails (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_pt_voicemail_subflow.htm)
- VoiceMailAudioProcessingFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailaudioprocessingfunction.htm)
- VoiceMailTranscribeFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailtranscribefunction.htm)
- VoiceMailPackagingFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_voicemailpackagingfunction.htm)
