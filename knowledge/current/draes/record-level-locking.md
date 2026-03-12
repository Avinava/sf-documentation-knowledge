---
title: "Record-Level Locking"
domain: draes
topic: record-level-locking
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.643Z
estimatedTokens: 421
keywords: [Record-Level, Locking, customers, regularly, upload, large, amounts, data, service, maintain, integrations, systems, their, scheduled, batches]
---

# Record-Level Locking

> Many customers regularly upload large amounts of data to the service, and maintain
      integrations with other systems that update their data in scheduled batches or continuously in
      real time. Like other transactional systems, Salesforce employs record-level database locking
      to preserve the integrity of data during these updates.

# Record-Level Locking

Many customers regularly upload large amounts of data to the service, and maintain integrations with other systems that update their data in scheduled batches or continuously in real time. Like other transactional systems, Salesforce employs record-level database locking to preserve the integrity of data during these updates.

The locks are held very briefly and don’t present the same performance risks as some of the other organization locks. However, they can still cause updates to fail, so you must still be careful not to run updates to the same collections of records in multiple threads.

In addition to taking this standard precaution, developers and administrators should know that for objects with a master-detail relationship, when you update child records, the system locks the parent and the child records to prevent inconsistencies. For example, updating a child record whose parent has just been deleted in another thread. When objects being processed have a master-detail relationship, two situations in particular pose a risk of producing locking errors.

-   Updates to parent records and their children are being processed simultaneously in separate threads.
-   Updates to child records that have the same parent records are being processed simultaneously in separate threads.

Because Salesforce holds these locks very briefly, customers who experience a small number of locking errors might be able to handle the problem by adding retry logic to their integration code. If you experience frequent locking from integrations and mass updates, sequence batches so that the same records aren’t updated in multiple threads simultaneously.
