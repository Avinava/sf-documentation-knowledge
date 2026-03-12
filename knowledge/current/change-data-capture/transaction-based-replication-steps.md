---
title: "Transaction-Based Replication Steps"
domain: change-data-capture
topic: transaction-based-replication-steps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.660Z
estimatedTokens: 2540
keywords: [Transaction-Based, Replication, Steps, maintain, accurate, replica, Salesforce, org’s, data, another, system, subscribe, approach, Events, Change]
---

# Transaction-Based Replication Steps

> To maintain an accurate replica of your Salesforce org’s data in another system,
    subscribe using a transaction-based approach.

# Transaction-Based Replication Steps

To maintain an accurate replica of your Salesforce org’s data in another system, subscribe using a transaction-based approach.

## Types of Events That Change Data Capture Can Generate: Change Events, Gap Events, and Overflow Events

Generally, Salesforce captures record changes by sending change events, which the subscriber receives to synchronize data in an external system. Sometimes, gap events or overflow events are generated.

Gap events are generated when change events can't be generated. They inform subscribers about errors or operations done outside of Salesforce application servers. Gap events don’t contain record data, but they contain the record ID, which enables you to retrieve the record from Salesforce. Ensure that the subscriber expects to receive gap events and handles them properly, as outlined in the next section. The changeType field in the gap event header identifies the gap event and the associated operation, and can take one of these values:

-   GAP\_CREATE
-   GAP\_UPDATE
-   GAP\_DELETE
-   GAP\_UNDELETE

For more information about gap events, see [Gap Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_gap.htm "Salesforce sometimes sends gap events instead of change events to inform subscribers about errors, or if it’s not possible to generate change events. A gap event contains information about the change in the header, such as the change type and record ID. It doesn’t include details about the change, such as record fields.").

Overflow events are generated when a single transaction involves more than 100,000 changes. The first 100,000 changes generate change events. The set of changes beyond that amount generates one overflow event for each entity type included in that set. Overflow events include header fields but no record data and no record ID. Ensure that the subscriber handles overflow events. The changeType field header value is GAP\_OVERFLOW instead of the specific type of change.

For more information about overflow events, see [Overflow Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_overflow.htm "To capture changes more efficiently, overflow events are generated for single transactions that exceed a threshold.").

## Transaction-Based Replication Approach

Each change event contains a transaction key in the header that uniquely identifies the transaction that the change is part of. Each change event also contains a sequence number that identifies the sequence of the change within a transaction. The sequence number is useful for operations that include multiple steps, such as lead conversion. If not all objects involved in a transaction are enabled for Change Data Capture, there will be a gap in the sequence numbers. We recommend that you replicate all the changes in one transaction as a single commit in your system. One approach is to buffer all changes related to a transaction and commit them all at once.

If you choose not to use a transaction-based replication process, your replicated data can be incomplete if your subscription stops. For example, if your subscription stops in the middle of an event stream for one transaction, only part of the transaction’s changes are replicated in your system.

A transaction-based replication process involves these high-level steps.

1.  In your subscribed client, allocate a transaction buffer for each transaction key. For example, create a map (Map<String, List<ChangeEvent>>) where the key is the transactionKey value.
2.  Open a subscription to the general /data/ChangeEvents channel that captures all enabled events.
3.  For each change event received over the channel, check the changeType field.
    1.  If the changeType field is GAP\_CREATE, GAP\_UPDATE, GAP\_DELETE, or GAP\_UNDELETE, the event is a gap event. Follow the recommended steps in How to Handle a Gap Event.
    2.  If the changeType field is GAP\_OVERFLOW, the event is an overflow event.
        1.  Process the change events that you previously stored in the map. Commit the changes, and then purge the corresponding map entry.
        2.  For the overflow event, follow the recommended steps in How to Handle an Overflow Event.
        3.  n
4.  If the event isn’t a gap or overflow event, it’s a change event. Deserialize the change event, and add it to the appropriate map entry for the transaction key.
5.  When the transactionKey value changes in the next change event, commit the changes in the map entry for the previous transaction key, and then purge the map entry.
6.  Repeat steps 3 through 5 for each new event received.

## How to Handle a Gap Event

If the event that the subscriber receives is a gap event, get the latest data from Salesforce. The gap event includes the ID of the affected record enabling you to retrieve the record. After receiving the gap event, one approach is to mark the corresponding record as dirty and not process any change events for that record until it has been reconciled.

Let's look at an example to examine the steps a subscriber can take to handle a gap event while change events are also received. Records A and B are modified in a transaction and generate two change events. Then a change for record C generates a gap event. The subscriber receives three events: two change events for record A and B and one gap event for record C. The steps for the subscriber are:

1.  Handle the change events according to the transaction-based replication process.
2.  For the gap event, mark the corresponding record as dirty locally as of the date of the gap event.
3.  If you receive change events for new changes for the same record before the data has been reconciled, don't process them. For example, if record C is modified again and a change event is received, ignore it because the corresponding record is marked as dirty. To ensure that the change is after the gap event, compare the commitTimestamp fields of both events. To ensure that the change occurred before the data is reconciled, compare the LastModifiedDate fields on the change event and the record retrieved in the next step.
4.  Reconcile the data for record C. Make a Salesforce API call, such as a REST API call, to retrieve the full data for record C, and save it in your system. Then clear the dirty flag on that record.
5.  Record C is modified again and a new change event is received. Process this change event according to the replication process because the record is no longer dirty.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

If the same type of change occurs on the same entity within the transaction, sometimes multiple gap events are merged into a single gap event. The IDs of the changed records are included in the recordIds header field. Use these IDs to reconcile all the referenced records. For more information, see [Merged Change Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_merged_events.htm "For efficiency, sometimes change events for one transaction are merged into one event if the same change occurred in multiple records of the same object type during one second.").

## How to Handle an Overflow Event

If a change results in more than 100,000 events in a single transaction, you receive overflow events for the events sent after the first 100,000. One overflow event is generated for each entity type. Mass changes aren't frequent. They can result from creating or modifying many records, such as changing a recurring calendar event series with many occurrences and invitees. A large change can also result from a cascade delete when deleting records with many related records.

An overflow event doesn't contain the record ID and only a dummy record ID, so one approach for data replication is to retrieve all records of the corresponding entity after an overflow event is received. Then you can update or delete those records in the external system. This approach can be the most process-intensive because it resyncs all the records for an entity. However, it’s the simplest approach because it doesn't require figuring out which records changed in a particular timeframe and filtering out the records that resulted in change events. These steps outline the process of reconciling data when the overflow event is received.

1.  After you receive an overflow event in your subscriber, unsubscribe from the channel, and stop processing further events. This step is in preparation of a full data synchronization for the entity.
2.  Store the Replay ID of the overflow event. This ID is the starting point for the data reconciliation.
3.  Reconcile the data for new, updated, and undeleted records.
    1.  Retrieve all records for the entity. Depending on the volume of records stored, this process can take some time.
    2.  Synchronize the data in your system by overwriting it with the retrieved data from Salesforce.
4.  Reconcile the data for deleted records by performing one of the following steps.
    1.  Get the non-deleted records from Salesforce, and synchronize.
        1.  Identify all records for that entity in your system that weren’t updated through the synchronization that you performed in step 3. These records are the deleted ones.
        2.  Delete the identified records from your system.
    2.  Or get the deleted records from Salesforce, and synchronize.
        1.  Query all records for the entity with isDeleted=true. You get all the soft-deleted records for that entity that are in the Recycle Bin.
        2.  Identify the records in your system that match the records returned in the previous step.
        3.  Delete the identified records from your system.
5.  Resubscribe to the stored event bus stream starting from the Replay ID you saved earlier.
6.  We recommend that you process all change events after that Replay ID. This way, you catch up on any data changes that happened during the synchronization and weren’t saved in your system.
7.  If you encounter an overflow event for another entity (entityName field value), repeat this process for that entity.

## Related Topics

- Gap Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_gap.htm)
- Overflow Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_overflow.htm)
- Merged Change Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_merged_events.htm)
