---
title: "GroupMembershipEventLog"
domain: object-reference
topic: groupmembershipeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.998Z
estimatedTokens: 768
keywords: [GroupMembershipEventLog, Group, Membership, events, capture, changes, queue, members, added, removed, API, version, 64.0, later, Calls]
---

# GroupMembershipEventLog

> Group Membership events capture details about changes to public group and
         queue membership, such as when members are added to or removed from the public group or
         queue. This object is available in API version 64.0 and later.

# GroupMembershipEventLog

Group Membership events capture details about changes to public group and queue membership, such as when members are added to or removed from the public group or queue. This object is available in API version 64.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object stores event data that's queryable from platform APIs. For event data stored in event log files, see [EventLogFile](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm).

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIP address of the client employing salesforce.com services. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionAmount of cpu cycles used by the request |
| GroupIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the group whose membership changed. |
| GroupType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of group being updated. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. |
| MemberIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the member added to or removed from the group. Public groups can contain individual users, other groups, or users in a specified role or territory. Queues can contain individual users, roles, public groups, territories, connections, or partner users. |
| OperationType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of operation that occurred, such as a group member being added or removed from a group. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. |
