---
title: "InsufficientAccessEventLog"
domain: object-reference
topic: insufficientaccesseventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.238Z
estimatedTokens: 971
keywords: [InsufficientAccessEventLog, Insufficient, Access, event, logs, contain, errors, relating, account, case, contact, opportunity, record, API, version]
---

# InsufficientAccessEventLog

> Insufficient Access event logs contain details about errors relating to
         insufficient account, case, contact, and opportunity record access. This object is
      available in API version 61.0 and later.

# InsufficientAccessEventLog

Insufficient Access event logs contain details about errors relating to insufficient account, case, contact, and opportunity record access. This object is available in API version 61.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object stores event data that's queryable from platform APIs. For event data stored in event log files, see [EventLogFile](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The Insufficient Access event type is disabled by default. You can enable this event type for a period of 24 hours by contacting Salesforce Customer Support.

These insufficient access error scenarios are logged:

-   The user can’t share a case, contact, or opportunity because the user doesn’t have permission to share the parent account or the recipient of the share doesn’t currently have read access to the parent account.
-   The user can’t change ownership of a case, contact, or opportunity because the user doesn’t have permission to share the parent account or the new owner doesn’t currently have read access to the parent account.
-   The user can’t change the parent account of a case, contact, or opportunity because the user doesn’t have permission to share the new parent account or the owner of the case, contact, or opportunity doesn’t have read access to the new parent account.

Insufficient access errors resulting from bulk operations involving two or more records aren’t logged.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| AccessError | TypeStringDescriptionThe type of insufficient access error that the user received. Valid values are:DATA_NOT_AVAILABLE—The record is no longer accessible. For example, a record was deleted and moved to the Recycle Bin.INVALID_TYPE—The record type doesn’t exist.NO_ACCESS—The user doesn’t have the required access level to complete the attempted action on the record.ExampleNO_ACCESS |
| ActualLoggedInUserIdentifier | TypeIdDescriptionThe ID of the user who initiated the action that caused the insufficient access error. For example, a user attempts to transfer ownership of a record to a teammate, but the operation fails because the teammate doesn’t have the required access.Example005XXXXXXXXXXXX |
| ErrorDescription | TypeStringDescriptionDescription of the insufficient access error that the user received.ExampleUser 005XXXXXXXXXXXX doesn't have full access for the record 001XXXXXXXXXXXX. |
| ObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe object for which the user received the insufficient access error. |
| RecordIdentifier | TypeStringDescriptionThe ID of the record that the user doesn’t have access to.Example001XXXXXXXXXXXX |
| RequestIdentifier | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events.Example3nWgxWbDKWWDIk0FKfF5DV |
| RequestedAccessLevel | TypeStringDescriptionThe access level required by the user’s attempted action on the record. Valid values are:DELETEFULLREADTRANSFERWRITEExampleFULL |
| Timestamp | TypedateTimeDescriptionThe access time of Salesforce services in GMT.Example20130715233322.670 |
| UserIdentifier | TypeIdDescriptionThe ID of the user for whom the insufficient access error occurred, either when the user couldn’t access a record, the user couldn’t complete an operation, or the user was the intended recipient of a record transfer that failed because the user didn’t have the required access.Example005XXXXXXXXXXXX |
