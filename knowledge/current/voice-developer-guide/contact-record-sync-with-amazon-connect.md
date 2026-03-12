---
title: "Contact Record Sync with Amazon Connect"
domain: voice-developer-guide
topic: contact-record-sync-with-amazon-connect
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.483Z
estimatedTokens: 388
keywords: [Contact, Record, Sync, Amazon, Connect, previously, trace, CTR, data, automatically, stored, Voice, Call, records, allowing]
---

# Contact Record Sync with Amazon Connect

> By default, contact record (previously called contact trace record or CTR) data is automatically stored in Voice Call records,
  allowing your Amazon Connect instance to stay in sync with Salesforce.

# Contact Record Sync with Amazon Connect

By default, contact record (previously called contact trace record or CTR) data is automatically stored in Voice Call records, allowing your Amazon Connect instance to stay in sync with Salesforce.

-   **[Retry Contact Record Sync for Voice Call Records](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_ctr_retry.htm)**
    Amazon Connect contact record (previously called contact trace record or CTR) data is stored automatically in Voice Call records through data synchronization. Sometimes this sync doesn’t occur, and it isn’t always possible to access contact record data in Amazon Connect after the call. Back up contact record data to a separate Amazon S3 bucket, then check for Voice Call records that don’t have contact record data, and then resync the contact record data to your org using the backup data.
-   **[Disable Contact Record Sync for Voice Call Records](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_disable_ctr_sync.htm)**
    When a contact record (previously called contact trace record or CTR) is created in Amazon, the CTRDataSyncFunctionLambda Lambda function invokes the UpdateVoiceCallRecords function, synchronizing contact record data to a VoiceCall object. However, there are times when you don’t want to sync the contact record data between your Amazon Connect instance and Salesforce. For example, during a phased rollout, automatic synchronization can cause redundancies. In these cases, disable contact record sync.

## Related Topics

- Retry Contact Record Sync for Voice Call Records (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_ctr_retry.htm)
- Disable Contact Record Sync for Voice Call Records (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_example_disable_ctr_sync.htm)
