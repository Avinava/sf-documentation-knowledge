---
title: "Customize Synced Contact Record Fields Using CTRDataSyncFunction"
domain: voice-developer-guide
topic: customize-synced-contact-record-fields-using-ctrdatasyncfunction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.520Z
estimatedTokens: 682
keywords: [Customize, Synced, Contact, Record, CTRDataSyncFunction, Although, provided, Lambda, automatically, syncs, Amazon’s, previously, trace, CTR, VoiceCall]
---

# Customize Synced Contact Record Fields Using CTRDataSyncFunction

> Although the provided CTRDataSyncFunction Lambda automatically syncs
            many of the fields between Amazon’s contact record (previously called contact trace record or CTR) and a VoiceCall record,
            you can customize this function to sync additional fields.

# Customize Synced Contact Record Fields Using CTRDataSyncFunction

Although the provided CTRDataSyncFunction Lambda automatically syncs many of the fields between Amazon’s contact record (previously called contact trace record or CTR) and a VoiceCall record, you can customize this function to sync additional fields.

The [CTRDataSyncFunction Lambda documentation](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm "After the contact record (previously called contact trace record or CTR) is created in Amazon, this Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values of multiple VoiceCall object fields. This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream.") lists all the fields that are automatically synced with a VoiceCall record. Use these instructions to sync more fields.

1.  In your Salesforce org, create a custom field on the [VoiceCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm) object for the desired attribute in the [CTR data model](https://docs.aws.amazon.com/connect/latest/adminguide/ctr-data-model.html).
2.  In Amazon Connect, select the CTRDataSyncFunction Lambda function. From the menu select **Actions** | **Export function** so that you can get access to the function source code. If you already have the source code for this function, you don’t need to perform this step.

    ![Export Lambda function](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_examples_ctrdatasync_export_function.png&folder=voice_developer_guide)

3.  In the utils.js file for the CTRDataSyncFunction Lambda, update the end of the **transformCTR(ctr)** function (where there’s a comment to Add custom fields here).

    ```

    ```

    In that location, you can add any custom attributes to the **callAttributes** object. Add this code before the **JSON.stringify(callAttributes)** line. Your custom attributes are synced along with the automatically-synced attributes. The following example adds two fields to the list of synced fields:

    ```

    ```

4.  Deploy the new version of the Lambda function in your Amazon Connect instance.

    To learn more about managing Lambda function versions, see [Lambda function versions](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html) in the AWS Lambda Developer Guide.


In subsequent calls, the new data is synced.

#### See Also

-   [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html "AWS Lambda Developer Guide - HTML (New Window)")

## Code Examples

```
// Check if there are custom contact attributes
if (ctr.Attributes) {
    let callAttributes = {};
 
    // Get contact attributes data into call attributes
    callAttributes = getCallAttributes(ctr.Attributes);

    // Add custom fields here ← ADD YOUR CODE HERE!!!

    voiceCall.callAttributes = JSON.stringify(callAttributes);
}
...
```

```
// Check if there are custom contact attributes
if (ctr.Attributes) {
    let callAttributes = {};
 
    // Get contact attributes data into call attributes
    callAttributes = getCallAttributes(ctr.Attributes);

    // Add custom fields here

    // Custom field from ctr.Attributes 
    if (ctr.Attributes.ConnectionAttempts) {
        callAttributes.ConnectionAttempts__c = ctr.Attributes.ConnectionAttempts;
    }
    // Custom field in ctr (but not in ctr.Attributes)
    if (ctr.DisconnectReason) {
        callAttributes.DisconnectReason__c = ctr.DisconnectReason;
    }
 
    voiceCall.callAttributes = JSON.stringify(callAttributes);
}
...
```

## Related Topics

- CTRDataSyncFunction Lambda
                    documentation (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm)
