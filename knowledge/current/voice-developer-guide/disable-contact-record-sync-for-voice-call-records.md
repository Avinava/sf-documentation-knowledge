---
title: "Disable Contact Record Sync for Voice Call Records"
domain: voice-developer-guide
topic: disable-contact-record-sync-for-voice-call-records
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.525Z
estimatedTokens: 464
keywords: [Disable, Contact, Record, Sync, Voice, Call, Records, previously, trace, CTR, created, Amazon, CTRDataSyncFunctionLambda, Lambda, function]
---

# Disable Contact Record Sync for Voice Call Records

> When a contact record (previously called contact trace record or CTR) is created in Amazon, the
        CTRDataSyncFunctionLambda Lambda function invokes the UpdateVoiceCallRecords function,
        synchronizing contact record data to a VoiceCall object. However, there are times when you don’t
        want to sync the contact record data between your Amazon Connect instance and Salesforce. For
        example, during a phased rollout, automatic synchronization can cause redundancies. In
        these cases, disable contact record sync.

# Disable Contact Record Sync for Voice Call Records

When a contact record (previously called contact trace record or CTR) is created in Amazon, the CTRDataSyncFunctionLambda Lambda function invokes the UpdateVoiceCallRecords function, synchronizing contact record data to a VoiceCall object. However, there are times when you don’t want to sync the contact record data between your Amazon Connect instance and Salesforce. For example, during a phased rollout, automatic synchronization can cause redundancies. In these cases, disable contact record sync.

| Ease of Implementation | Medium |
| --- | --- |
| Estimated Time to Implement | 15 minutes |

In this example, we show you how to disable contact record sync so that changes to the contact record data in Amazon Connect are not pushed automatically to Salesforce.

This configuration applies to the following telephony models.

-   Service Cloud Voice with Amazon Connect

-   Service Cloud Voice with Partner Telephony from Amazon Connect

## Prerequisites

Before you begin:

-   Verify that you have AWS root user or AWS administrator credentials.
-   Verify the AWS Account you are working with is already connected to a Salesforce org.

## Disable CTR Sync

1.  From the Amazon Connect console, select **Routing > Flows**.
2.  Open the inbound flow where you want to disable contact record sync.
3.  In the **Set contact attributes** flow block, add the following attribute:
    -   Namespace: User defined
    -   Key: NoSync
    -   Select **Set manually** and set the value to true.
4.  Click

    ```

    ```


## Test This Example

To test this example:

1.  Dial your phone number in order to create a record in Amazon Connect. After the call is answered, hang up.
2.  Confirm that the contact record data resulting from your phone call is saved in Amazon Connect and not Salesforce.
