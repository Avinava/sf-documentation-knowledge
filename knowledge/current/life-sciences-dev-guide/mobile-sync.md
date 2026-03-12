---
title: "Mobile Sync"
domain: life-sciences-dev-guide
topic: mobile-sync
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.717Z
estimatedTokens: 587
keywords: [Mobile, Sync, objects, store, data, transactions, synchronized, Life, Sciences, Cloud, Customer, Engagement, application, includes, individual]
---

# Mobile Sync

> The Mobile Sync objects store information about data transactions synchronized from the
  Life Sciences Cloud for Customer Engagement mobile application. This information includes
  individual data transactions and supporting summary and logging information.

# Mobile Sync

The Mobile Sync objects store information about data transactions synchronized from the Life Sciences Cloud for Customer Engagement mobile application. This information includes individual data transactions and supporting summary and logging information.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_mobile_sync_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/mobile-sync.html "HTML (New Window)").

-   **[BatchJob](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_batchjob.htm)**
    Represents an instance of a batch job that is either running and has been run. This object is available in Life Sciences Cloud API version 65.0 and later.
-   **[BatchJobPart](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_batchjobpart.htm)**
    Represents one part of a batch job. This object is available in Life Sciences Cloud in API version 65.0 and later.
-   **[DeviceSyncSummary](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_devicesyncsummary.htm)**
    Represents a summary of the synchronized data from a mobile device. This object is available in API version 65.0 and later.
-   **[DeviceSyncTransaction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_devicesynctransaction.htm)**
    Represents a set of related data items to synchronize from a mobile device. This object is available in API version 65.0 and later.
-   **[DeviceSyncTransactionLog](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_devicesynctransactionlog.htm)**
    Represents a log with information about the synchronized data from a mobile device. This object is available in API version 65.0 and later.
-   **[DeviceSyncTransactionRecord](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_devicesynctransactionrecord.htm)**
    Represents a single data item to synchronize from a mobile device. This object is available in API version 65.0 and later.

## Related Topics

- BatchJob (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_batchjob.htm)
- BatchJobPart (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_batchjobpart.htm)
- DeviceSyncSummary (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_devicesyncsummary.htm)
- DeviceSyncTransaction (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_devicesynctransaction.htm)
- DeviceSyncTransactionLog (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_devicesynctransactionlog.htm)
- DeviceSyncTransactionRecord (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_devicesynctransactionrecord.htm)
