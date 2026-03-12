---
title: "Deleting Data"
domain: salesforce-large-data-volumes-bp
topic: deleting-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.956Z
estimatedTokens: 127
keywords: [Deleting, Data, Salesforce, deletion, mechanism, profound, effect, performance, large, volumes, uses, Recycle, Bin, metaphor, users]
---

# Deleting Data

> The Salesforce data deletion mechanism can have a profound effect on the performance of large
   data volumes. Salesforce uses a Recycle Bin
   metaphor for data that users delete. Instead of removing the data, Salesforce flags the data as
   deleted and makes it visible through the Recycle Bin. Thi

# Deleting Data

The Salesforce data deletion mechanism can have a profound effect on the performance of large data volumes. Salesforce uses a [Recycle Bin](https://help.salesforce.com/s/articleView?id=xcloud.recycle_bin.htm&type=5&language=en_US "HTML (New Window)") metaphor for data that users delete. Instead of removing the data, Salesforce flags the data as deleted and makes it visible through the Recycle Bin. This process is called soft deletion. While the data is soft deleted, it still affects database performance because the data is still resident, and deleted records have to be excluded from any queries. However, items in the Recycle Bin don’t count against an org’s storage usage. There isn’t a limit on the number of deleted items that the Recycle Bin can hold.

Deleted items remain in the Recycle Bin for 15 days, and during that time they can be restored. You also manually empty the Recycle Bin by using the UI, the API, or Apex. After 15 days, items are scheduled for hard deletion from the Recycle Bin. Salesforce doesn’t guarantee the exact time that the Recycle Bin permanently deletes these items.

In addition, Bulk API and Bulk API 2.0 support a hard delete option, which allows records to bypass the Recycle Bin and become immediately available for deletion. We recommend that you use the Bulk API 2.0’s hard delete function to delete large data volumes.

If you want to delete records from a sandbox org’s custom objects immediately, you can truncate those custom objects. Contact Salesforce Customer Support for assistance with this task.
