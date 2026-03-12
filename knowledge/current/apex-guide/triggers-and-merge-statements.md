---
title: "Triggers and Merge Statements"
domain: apex-guide
topic: triggers-and-merge-statements
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.198Z
estimatedTokens: 436
keywords: [Triggers, Merge, Statements, two, contacts, merged, contact, fire, records, accounts, opportunities]
---

# Triggers and Merge Statements

> For example, if two contacts are merged, only the delete and update
contact triggers fire. No triggers for records related to the contacts,
such as accounts or opportunities, fire.

# Triggers and Merge Statements

Merge events do not fire their own trigger events. Instead, they fire delete and update events as follows:

Deletion of losing records

A single merge operation fires a single delete event for all records that are deleted in the merge. To determine which records were deleted as a result of a merge operation use the MasterRecordId field in Trigger.old. When a record is deleted after losing a merge operation, its MasterRecordId field is set to the ID of the winning record. The MasterRecordId field is only set in after delete trigger events. If your application requires special handling for deleted records that occur as a result of a merge, you need to use the after delete trigger event.

Update of the winning record

A single merge operation fires a single update event for the winning record only. Any child records that are reparented as a result of the merge operation do not fire triggers.

For example, if two contacts are merged, only the delete and update contact triggers fire. No triggers for records related to the contacts, such as accounts or opportunities, fire.

The following is the order of events when a merge occurs:

1.  The before delete trigger fires.
2.  The system deletes the necessary records due to the merge, assigns new parent records to the child records, and sets the MasterRecordId field on the deleted records.
3.  The after delete trigger fires.
4.  The system does the specific updates required for the master record. Normal update triggers apply.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_defining.htm "Defining Triggers")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_recovered_records.htm "Triggers and Recovered Records")

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_triggers_defining.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_triggers_recovered_records.htm)
