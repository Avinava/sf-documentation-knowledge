---
title: "General Guidelines for Data Loads"
domain: api-asynch
topic: general-guidelines-for-data-loads
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:59.223Z
estimatedTokens: 1798
keywords: [General, Guidelines, Data, Loads, optimal, processing, time, consider, tips, planning, Always, test, sandbox, organization, times]
---

# General Guidelines for Data Loads

> For optimal processing time, consider these tips when planning your data loads. Always
  test your data loads in a sandbox organization first. Processing times can be different in a
  production organization.

# General Guidelines for Data Loads

For optimal processing time, consider these tips when planning your data loads. Always test your data loads in a sandbox organization first. Processing times can be different in a production organization.

Use Parallel Concurrency Mode Whenever Possible

Salesforce Bulk API's concurrency modes determine how many batches of data can be processed simultaneously, and how the batches are processed. All batches in a Bulk API job are processed in either parallel or serial concurrency mode.

In *parallel mode*, the default mode, batches are processed in parallel with other batches from the same job and batches from other parallel mode jobs. To load data faster, process batches in parallel mode. Parallel processing, though, has the potential to cause lock contention on records. Any failed records must be resubmitted.

In *serial mode*, batches are processed serially with other batches from the same job and batches from other serial mode jobs, and each batch must complete before the next batch starts processing. Because batches are processed one at a time, the possibility of lock contention conditions are minimized. The cost of using serial mode is an increase in processing time.

A serial batch is processed simultaneously in parallel with batches from jobs submitted with parallel mode. However, in this case, a small chance of record locking occurs.

You set the value for concurrencyMode at the job level using the [JobInfo](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_jobinfo.htm "A job contains one or more batches of data for you to submit to Salesforce for processing. When a job is created, Salesforce sets the job state to Open.") resource.

In summary, the choice of concurrency mode depends on the specific needs of the use case. Avoid processing data in serial mode unless you know that parallel mode would otherwise result in lock timeouts and you can't reorganize your batches to avoid locks. Any failed records must be resubmitted.

Organize Batches to Minimize Lock Contention

For example, when an AccountTeamMember record is created or updated, the account for this record is locked during the transaction. If you load many batches of AccountTeamMember records and they all contain references to the same account, they all try to lock the same account and it's likely that you experience a lock timeout. Sometimes, lock timeouts can be avoided by organizing data in batches. If you organize AccountTeamMember records by AccountId so that all records referencing the same account are in a single batch, you minimize the risk of lock contention by multiple batches.

The Bulk API doesn't generate an error immediately when encountering a lock. It waits a few seconds for its release and, if it doesn't happen, the record is marked as failed. If there are problems acquiring locks for more than 100 records in a batch, the Bulk API places the remainder of the batch back in the queue for later processing. When the Bulk API processes the batch again later, records marked as failed aren’t retried. To process these records, you must submit them again in a separate batch.

If the Bulk API continues to encounter problems processing a batch, it's placed back in the queue and reprocessed up to 10 times before the batch is permanently marked as failed. Even if the batch failed, some records could have completed successfully. If errors persist, create a separate job to process the data in serial mode, which ensures that only one batch is processed at a time.

Be Aware of Operations that Increase Lock Contention

These operations are likely to cause lock contention and necessitate using serial mode:

-   Creating users
-   Updating ownership for records with private sharing
-   Updating user roles
-   Updating territory hierarchies

If you encounter errors related to these operations, create a separate job to process the data in serial concurrency mode. You set the concurrencyMode at the job level using the [JobInfo](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_jobinfo.htm "A job contains one or more batches of data for you to submit to Salesforce for processing. When a job is created, Salesforce sets the job state to Open.") resource.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

Because your data model is unique to your organization, Salesforce can't predict exactly when you might see lock contention problems.

Minimize Number of Fields

Processing time is faster if there are fewer fields loaded for each record. Foreign key, lookup relationship, and roll-up summary fields are more likely to increase processing time. It's not always possible to reduce the number of fields in your records, but if it is, loading times improve.

Minimize Number of Workflow Actions

Workflow actions increase processing time.

Minimize Number of Triggers

You can use parallel mode with objects that have associated triggers if the triggers don't cause side-effects that interfere with other parallel transactions. However, Salesforce doesn't recommend loading large batches for objects with complex triggers. Instead, rewrite the trigger logic as a [batch Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_batch.htm "HTML (New Window)") job that is executed after all the data has loaded.

Optimize Batch Size

Start with the maximum batch size of 10,000 records. Salesforce processes each batch asynchronously.

Adjust batch sizes based on processing times. If processing a batch takes too long, then the batch times out and an error is returned. If that happens, reduce the batch size and resubmit. Likewise, if a job only takes a few seconds, increase up the batch size toward the maximum size. Avoid using smaller batches as this increases the total number of batches, and therefore, increases the risk of hitting your daily batch limit. For more information, see [Limits](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm "Note the following limits specific to Bulk API.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

For Bulk queries, the batch size isn’t applied to the query result set or the retrieved data size. If your bulk query takes too long to process, filter your query statement to return less data.

For information on monitoring batch processing, see [Monitor a Batch](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm#asynch_api_batches_monitor "You can monitor a Bulk API batch in Salesforce.").

Minimize Number of Batches in the Asynchronous Queue

Salesforce uses a queue-based framework to handle asynchronous processes from such sources as future and batch Apex, and Bulk API batches. This queue is used to balance request workload across organizations. If more than 2,000 unprocessed requests from a single organization are in the queue, any more requests from the same organization will be delayed while the queue handles requests from other organizations. Minimize the number of batches submitted at one time to ensure that your batches aren’t delayed in the queue.

## Related Topics

- JobInfo (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_jobinfo.htm)
- Limits (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm)
- Monitor a Batch (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_monitor.htm)
