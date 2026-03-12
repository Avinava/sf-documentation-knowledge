---
title: "Archived Activities"
domain: api
topic: archived-activities
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.645Z
estimatedTokens: 831
keywords: [Archived, Activities, Salesforce, archives, tasks, events, over, year, old]
---

# Archived Activities

> Salesforce archives activities (tasks and events) that are over a year old.

# Archived Activities

Salesforce archives activities (tasks and events) that are over a year old.

You can use [queryAll()](atlas.en-us.api.meta/api/sforce_api_calls_queryall.htm "Retrieves data from specified objects, including records that have been deleted or archived.") to query on all [Task](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_task.htm "HTML (New Window)") and [Event](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_event.htm "HTML (New Window)") records, archived or not. You can also filter on the isArchived field to find only the archived objects. You cannot use [query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions.") as it automatically filters out all records where isArchived is set to true. You can update or delete archived records, though you cannot update the isArchived field. If you use the API to insert activities that meet the criteria listed below, the activities will be archived during the next run of the archival background process.

Older [Events](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_event.htm "HTML (New Window)") and [Tasks](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_task.htm "HTML (New Window)") are archived according to the criteria listed below. In the Salesforce user interface, users can view archived activities in several locations.

-   Click **View All** in the Activity History related list to open the Activity History tab. In the Activity History tab, you can sort entries and open, edit, or delete activities.
-   Click **View All** in the activity timeline to open the All Activity History list. Up to 2,000 records appear, including archived records. The All Activity History list is ideal for printing.

In the API, archived activities can only be queried via [queryAll()](atlas.en-us.api.meta/api/sforce_api_calls_queryall.htm "Retrieves data from specified objects, including records that have been deleted or archived.").

Activity archive criteria:

-   Events with an [ActivityDateTime](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_event.htm#i1450287 "HTML (New Window)") or [ActivityDate](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_event.htm#i1450257 "HTML (New Window)") value greater than or equal to 365 days old
-   Tasks with an [IsClosed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_task.htm#i1467379 "HTML (New Window)") value of true and an ActivityDate value greater than or equal to 365 days old
-   [Tasks](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_task.htm "HTML (New Window)") with an IsClosed value of true, a blank ActivityDate field, and a create date greater than or equal to 365 days ago

    For more information, see View Archived Activities in Salesforce Help.

## Related Topics

- queryAll() (atlas.en-us.api.meta/api/sforce_api_calls_queryall.htm)
- query() (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
