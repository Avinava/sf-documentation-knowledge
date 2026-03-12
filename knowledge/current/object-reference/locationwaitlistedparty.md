---
title: "LocationWaitlistedParty"
domain: object-reference
topic: locationwaitlistedparty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.516Z
estimatedTokens: 518
keywords: [LocationWaitlistedParty, specific, party, people, waiting, queue, API, version, 50.0, later, Calls]
---

# LocationWaitlistedParty

> Represents a specific party of people waiting in a queue. This object is
    available in API version 50.0 and later.

# LocationWaitlistedParty

Represents a specific party of people waiting in a queue. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of this queue. |
| EntryDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time a party is added to the queue. |
| EstimatedWaitHours | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe estimated hours of wait time for a party. |
| EstimatedWaitMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe estimated minutes of wait time for a party. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date on which the record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the group. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner for this record. |
| PartySize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe size of the queued party. |
| PartyStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe state of a party in the queue.Possible values are:canceledenteredexitedreadywaiting |
| SignUpDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when a party signed up for the queue. |
| WaitlistId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID for the queue. |
