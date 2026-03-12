---
title: "CTRDataSyncFunction Lambda Function"
domain: voice-developer-guide
topic: ctrdatasyncfunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.644Z
estimatedTokens: 1183
keywords: [CTRDataSyncFunction, Lambda, Function, contact, record, previously, trace, CTR, created, Amazon, automatically, syncs, data, VoiceCall, finalizes]
---

# CTRDataSyncFunction Lambda Function

> After the contact record (previously called contact trace record or CTR) is created in Amazon, this
      Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values
      of multiple VoiceCall object fields. This function is available to Service Cloud Voice
      customers who are using an Amazon Connect instance and connecting to a Kinesis stream.

# CTRDataSyncFunction Lambda Function

After the contact record (previously called contact trace record or CTR) is created in Amazon, this Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values of multiple VoiceCall object fields. This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream.

**Configuration**: This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream. The configuration is automatically performed when you create a contact center in Voice.

**Description**: This function performs these actions:

1.  Synchronizes data between a contact record from Amazon and a VoiceCall record by taking the data from the Amazoncontact record and updating the VoiceCallrecord.
2.  As part of the update, if the function finds that a VoiceCall record doesn’t exist, it creates one. This behavior is useful for missed or abandoned calls.
3.  If the CallDisposition field in the VoiceCall record isn’t already set, sets it to Completed.

The following data is synced between the [Data model for Amazon Connect contact records](https://docs.aws.amazon.com/connect/latest/adminguide/ctr-data-model.html) and a [VoiceCall record](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm):

| Amazon Connect Contact Record Attribute | VoiceCall Field | Notes |
| --- | --- | --- |
| InitiationTimestamp | CallStartDateTime |  |
| DisconnectTimestamp | CallEndDateTime |  |
| InitiationTimestamp and DisconnectTimestamp | CallDurationInSeconds | CallDurationInSeconds is inferred from InitiationTimestamp and DisconnectTimestamp. |
| Agent.ConnectedToAgentTimestamp | CallAcceptDateTime | The CallAcceptDateTime value matches the Agent.ConnectedToAgentTimestamp value, even if it’s null. |
| Agent.CustomerHoldDuration | CustomerHoldDuration | The DurationInSeconds field on the VoiceCallRecording record gets its value by adding Agent.CustomerHoldDuration and Agent.AgentInteractionDuration from the Amazon contact record. |
| Agent.LongestHoldDuration | LongestHoldDuration |  |
| Agent.NumberOfHolds | NumberOfHolds |  |
| Agent.AgentInteractionDuration |  | This value isn’t mapped to a VoiceCall field. However, the DurationInSeconds field on the VoiceCallRecording record gets its value by adding Agent.CustomerHoldDuration and Agent.AgentInteractionDuration from the Amazon contact record. |
| Queue.EnqueueTimestamp | CallQueuedDateTime |  |
| Queue.Name | QueueName |  |
| InitiationMethod | CallType (only when creating a new record) | This value is used to infer values for ToPhoneNumber and FromPhoneNumber. Also used for the CallType field if creating a new VoiceCall record.Supported InitiationMethod values include:APIINBOUNDOUTBOUNDCALLBACKTRANSFER |
| SystemEndpoint.Address | ToPhoneNumber or FromPhoneNumber | If InitiationMethod is Inbound, the value is mapped to ToPhoneNumber (when creating a new record). If InitiationMethod is Outbound, this value is mapped to FromPhoneNumber. |
| CustomerEndpoint.Address | ToPhoneNumber or FromPhoneNumber | If InitiationMethod is Inbound, the value is mapped to FromPhoneNumber. If initiationMethod is Outbound, this value is mapped to ToPhoneNumber (when creating a new record). |
| Recording.Location | CallRecordingId | The VoiceCall record creates a reference to the VoiceCallRecording record using the CallRecordingId reference ID field. |

**Usage**: The data synchronization automatically starts when a contact record is generated. You don’t need to call this function manually.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=voice_developer_guide)

#### Tip

The CustomerHoldDuration and NumberOfHolds fields don’t have values until after the CTRDataSyncFunction Lambda function runs. As such, to determine if the Lambda function is done, search for these values in these fields.

-   **[Customize Synced Contact Record Fields Using CTRDataSyncFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_ctrdatasync.htm)**
    Although the provided CTRDataSyncFunction Lambda automatically syncs many of the fields between Amazon’s contact record (previously called contact trace record or CTR) and a VoiceCall record, you can customize this function to sync additional fields.

#### See Also

-   [*Salesforce Help:* Configure Your Amazon Connect Instance](https://help.salesforce.com/articleView?id=voice_setup_amazon_connect_details.htm&language=en_US "Salesforce Help: Configure Your Amazon Connect Instance - HTML (New Window)")

## Related Topics

- Customize Synced Contact Record Fields Using CTRDataSyncFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_ctrdatasync.htm)
