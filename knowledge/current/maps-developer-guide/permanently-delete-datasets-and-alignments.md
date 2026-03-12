---
title: "Permanently Delete Datasets and Alignments"
domain: maps-developer-guide
topic: permanently-delete-datasets-and-alignments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.766Z
estimatedTokens: 654
keywords: [Permanently, Datasets, Alignments, DoCleanup, Apex, removes, cleans, user, already, deleted, Territory, Planning, Data, reduce, size]
---

# Permanently Delete Datasets and Alignments

> The DoCleanup() Apex method
            permanently removes, or cleans up, datasets and related alignments that a user already
            deleted using Territory Planning Data Sets or Territory Planning Alignments | Delete in the UI. Use this method to reduce object size and improve Territory
            Planning load time and performance.

# Permanently Delete Datasets and Alignments

The DoCleanup() Apex method permanently removes, or cleans up, datasets and related alignments that a user already deleted using **Territory Planning Data Sets** or **Territory Planning Alignments** | **Delete** in the UI. Use this method to reduce object size and improve Territory Planning load time and performance.

The DoCleanup() Apex method is the equivalent of clicking **Permanently Delete** in Territory Planning Data Management in Setup. You can permanently delete datasets only with a Deleted status as shown on the Territory Planning Data Sets page. When you permanently delete a dataset, all alignments created from that dataset’s source are also permanently removed.

Dataset and alignment cleanups can run at scheduled times or after a user deletes a dataset in the UI.

## Signature

```

```

Where,

-   AsyncApexJob represents an individual Apex sharing recalculation job, a batch Apex job, a method with the future annotation, or a job that implements Queueable. Use this object to query Apex batch jobs in your organization.
-   maps is the namespace that's available after you install Salesforce Maps.
-   TPSDK is the class that contains the Salesforce Maps Territory Planning global methods exposed to developers.
-   DoCleanup() is the method.

## Sample Code

This code runs dataset and alignment cleanups at scheduled times. The DoCleanup() method returns an AsyncApexJob containing the number of items processed, the date and time of job completion, and other details.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, do one of the following to avoid uncommitted work errors:

-   Call the methods through a future method
-   Call the methods as queueable

Use the sample code in this method documentation as a guide.

**Example**

```

```

#### See Also

-   [*Knowledge Article:* Data Set and Alignment Browser Window](https://help.salesforce.com/s/articleView?id=000356008&type=1&language=en_US "Knowledge Article: Data Set and Alignment Browser Window - HTML (New Window)")

-   [*SOAP API Developer Guide*: AsyncApexJob](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_objects_asyncapexjob.htm "SOAP API Developer Guide: AsyncApexJob - HTML (New Window)")

-   [*Apex Developer Guide*: Apex Scheduler](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_scheduler.htm "Apex Developer Guide: Apex Scheduler - HTML (New Window)")

## Code Examples

```
AsyncApexJob maps.TPSDK.DoCleanup()
```

```apex
// Implement as Schedulable to run the Apex class at regular intervals.
public with sharing class TerritoryPlanningCleanupSchedule implements Schedulable  {

// Invoke the scheduled Apex class with the execute() method.
    public void execute(SchedulableContext SC) {
        AsyncApexJob cleanupJob = maps.TPSDK.DoCleanup();
        System.debug('Cleanup job is ' +cleanupJob.Status+ '.  '  +cleanupJob.JobItemsProcessed+ ' of ' +cleanupJob.TotalJobItems+ ' batches processed.');
    }
    
}
```
